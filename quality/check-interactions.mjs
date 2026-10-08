import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const root=path.resolve(import.meta.dirname,'..');
const require=createRequire(path.resolve(root,'../worm-capitalist-wiki/package.json'));
const {chromium}=require('@playwright/test');
const server=http.createServer((req,res)=>{let file=path.join(root,'out',decodeURIComponent(new URL(req.url,'http://local').pathname));if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');if(!fs.existsSync(file)){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':'application/octet-stream');fs.createReadStream(file).pipe(res);});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const origin='http://127.0.0.1:'+server.address().port;
const browser=await chromium.launch({channel:'chrome'}), checks=[],errors=[];
try{
for(const width of [390,768,1024,1440]){
 const page=await browser.newPage({viewport:{width,height:900}});page.on('pageerror',e=>errors.push(e.message));
 await page.goto(origin+'/guide/');
 const box=page.getByLabel('Main Hallway',{exact:true});await box.check();assert.equal(await page.getByRole('status').textContent(),'1 of 4 marked');
 await page.getByLabel('Storage Room',{exact:true}).check();assert.equal(await page.getByRole('status').textContent(),'2 of 4 marked');
 await page.getByRole('button',{name:'Reset checklist'}).click();assert.equal(await box.isChecked(),false);assert.equal(await page.getByRole('button',{name:'Reset checklist'}).isDisabled(),true);
 await box.check();await page.reload();assert.equal(await box.isChecked(),false);
 await page.getByTitle('Search guide').click();await page.getByPlaceholder('Search cameras, anomaly, purge, survival...').fill('no-such-feed-9182');assert.match(await page.locator('body').innerText(),/No results found/);
 await page.getByPlaceholder('Search cameras, anomaly, purge, survival...').fill('warning');await page.getByRole('link',{name:/Camera controls and persistent warning/}).click();
 if(width<1280){await page.getByRole('button',{name:'Toggle navigation'}).click();await page.getByRole('link',{name:'Sources',exact:true}).click();await page.waitForURL(/\/updates\/?$/);}
 await page.goto(origin+'/');await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:path.join(root,'quality/artifacts/home-viewport-'+width+'.png')});
 await page.goto(origin+'/guide/');await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:path.join(root,'quality/artifacts/guide-viewport-'+width+'.png')});
 const fontCheck=await page.evaluate(()=>[...document.querySelectorAll('main p,main li,main label,main button')].map(x=>parseFloat(getComputedStyle(x).fontSize)));assert(Math.min(...fontCheck)>=12);
 checks.push({width,checklist:'passed',refreshClears:'passed',search:'passed',navigation:'passed',minimumBodyFont:Math.min(...fontCheck)});await page.close();
}
assert.equal((await fetch(origin+'/nonexistent-review-route/')).status,404);
assert.deepEqual(errors,[]);
const result={checkedAt:new Date().toISOString(),checks,errors,notFound404:true,passed:true};fs.writeFileSync(path.join(root,'quality/artifacts/interactions.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result));
}finally{await browser.close();await new Promise(r=>server.close(r));}
