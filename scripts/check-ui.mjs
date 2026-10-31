import puppeteer from 'puppeteer-core';import {preview} from 'vite';import {mkdirSync,writeFileSync} from 'node:fs';
const server=await preview({preview:{host:'127.0.0.1',port:5194,strictPort:true}});let browser;
try{
 browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));const observations=[];
 mkdirSync('docs/local-evidence',{recursive:true});
 for(const width of [1440,390]){
  await page.setViewport({width,height:1000});await page.goto('http://127.0.0.1:5194/',{waitUntil:'domcontentloaded'});await page.waitForSelector('h1');await page.evaluate(()=>document.fonts.ready);
  for(const [name,selector] of [['Responsibility desk','textarea'],['Source register','.source-list'],['Advisory inbox','.queue']]){
   await page.evaluate(t=>[...document.querySelectorAll('nav button')].find(b=>b.textContent.includes(t)).click(),name);await page.waitForSelector(selector);
   if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Horizontal overflow: '+name);
   observations.push({width,view:name,visible:true});
  }
  if(await page.evaluate(()=>/\u00c2|\u00e2\u2020/.test(document.body.innerText)))throw Error('UI encoding corruption');
  const logo=await page.$eval('.brand img',e=>e.naturalWidth>0);if(!logo)throw Error('Missing supplied logo');
  await page.screenshot({path:`docs/local-evidence/${width===1440?'desktop':'mobile'}.png`,fullPage:true});
 }
 await page.type('.connection input','invalid');await page.evaluate(()=>[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Verify contract')).click());await page.waitForSelector('[role=alert]');
 if(!await page.$eval('[role=alert]',e=>e.textContent.includes('valid deployed')))throw Error('Invalid contract not rejected');
 if(errors.length)throw Error(JSON.stringify(errors));
 const report={at:new Date().toISOString(),scope:'Built local browser UI only. No injected provider, signed transaction, mock RPC or GenVM proof.',observations,logo:true,invalid_address_rejected:true,errors};writeFileSync('docs/local-evidence/UI_CHECK.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
}finally{if(browser)await browser.close();await new Promise(r=>server.httpServer.close(r));}
