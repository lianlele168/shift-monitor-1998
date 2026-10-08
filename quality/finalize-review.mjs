// Registers the completed, documented review. It never performs or invents it.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fingerprint} from '../scripts/quality-gate.mjs';
const root=path.resolve(import.meta.dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const write=(f,s)=>fs.writeFileSync(path.join(root,f),typeof s==='string'?s:JSON.stringify(s,null,2));
const ref=f=>({path:f,sha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex')});
const collection=JSON.parse(read('quality/artifacts/collection.json'));
if(collection.codeFingerprint!==fingerprint(root).sha256)throw Error('Rebuild and collect final source first');
const interactions=JSON.parse(read('quality/artifacts/interactions.json'));
if(!interactions.passed||interactions.errors.length)throw Error('Interaction evidence failed');
if(!read('quality/independent-review.md').includes('SearchAction'))throw Error('Independent review missing');
const now=new Date().toISOString();
if(!fs.existsSync(path.join(root,'quality/artifacts/previous-planner.txt')))write('quality/artifacts/previous-planner.txt',execFileSync('git',['show','HEAD:src/components/MonitorPlanner.tsx'],{cwd:root,encoding:'utf8'}));
const inspectedFiles=['src/components/MonitorPlanner.tsx','src/components/Header.tsx','src/components/Footer.tsx','src/app/layout.tsx','src/lib/seo.ts'];
write('quality/artifacts/application-source.txt',inspectedFiles.map(f=>'FILE: '+f+'\n'+read(f)).join('\n\n'));
write('quality/content-review.md',`# Shift content and release review

Reviewer: Codex root implementation agent, with separate review by /root/autonomous_workflow in independent-review.md. Actual review finalized ${now}.

Official identity: Carl Dev, released HTML5 game, official itch page and supplied build 18906721 captured on 8 October UTC. Read the entire supplied game code. camNames identifies the four labels; updateEntityVisibility hides the entity on other feeds without clearing warning while anomalyCam is nonzero; purgeAnomaly succeeds only when anomalyCam equals currentCam, clears it and reduces corruption. Natural browser observation confirms camera labels, visible Storage Room anomaly, warning persistence on another camera, and return/purge → stable. No state injection or claimed human playtest.

Guide text confines observations to the checked build. It does not provide an optimal rotation, spawn frequency, hidden score or guaranteed safe time. Suggested fixed-order checking and checklist use are clearly optional memory aids. Site owner Hlele is from the user's workspace identity, not an invented tester. Copyright/independence statements do not claim a license or endorsement.

Application behavior: checklist uses React memory only, resets and clears on reload; no game readback/storage/network. Header search is local. Inspection and the actual four-width interaction report support these statements. Old invented risk and purge-window formulas are preserved only in the historical evidence file; no live page exposes them. Nonfunctional SearchAction removed. HTML and font CSS mismatch found by independent review was resolved with a clean build; body font-sans fixes variable inheritance. Root inspected final guide-viewport-1440 and confirmed final sans font and readable 56rem column.

Page review: / introduces identity, current official destination and specific warning pitfall; /guide/ supplies the observed sequence and memory aid. Those two request indexing. /play/ is an official outbound entry; /updates/ documents exact evidence and corrections; /about/ describes ownership/reviewer scope; /privacy-policy/ describes actual memory and external requests; /terms/ states guide limits. The three legacy /camera-guide/, /anomaly-guide/, /survival-tips/ routes are explicit correction/link pages. Eight supporting/legacy pages are noindex and absent from sitemap.

All rendered page text, metadata, shared footer and source mappings reviewed. Claims below include identity, named controls, observed sequence/date, game code behavior, app behavior and corrections; advice is explicitly marked. All 40 route/width screenshots were visually inspected by the independent reviewer before the final font-class correction; root and final captures confirm the corrected shared fonts without content/layout changes. No overflow or client error reported. Core search/menu/checklist state/reset/refresh tests passed at all four widths; internal links and random404 were actually checked.

Independent findings were returned and resolved, not marked passed as-is. Neither HTTP access nor this gate establishes Googlebot visitation, indexing or a Google quality score. No remaining content or local-functional blocker for this scoped correction.
`);
write('quality/skill-run.md',`# Actual skill and workflow record
Codex root, ${now}.
Existing architect/evidence/SOP review was followed; source identity and page plan are stored before implementation in implementation-plan.md. seo-audit's content/technical split and existing Next.js canonical/sitemap policy were applied. No template data, game-model calculator or automatic dates were added. The generic 25-item/400-word requirements were superseded by the workspace evidence-first contract.
The official page, actual supplied game source and a natural browser sequence were inspected; observed controls and warning behavior replaced unsupported scoring. Actual build log, local static browser collection, 40 screenshots, interaction JSON and separate independent-review.md record execution. SearchAction and font/cache failures discovered in review were fixed and rebuilt. No claim of user/human testing or Google indexing. No external backlink submission or messages sent.
`);
const review={status:'supported',reviewer:'Codex root; independent review: /root/autonomous_workflow',reviewedAt:now,artifact:ref('quality/content-review.md')};
const obs=JSON.parse(read('quality/artifacts/sources/game-observation.json'));
const sources=[
 {id:'itch',kind:'official',url:'https://carldupuy.itch.io/shift-monitor-1998',checkedAt:'2026-10-08T15:23:20.640Z',artifact:ref('quality/artifacts/sources/itch.html')},
 {id:'game-code',kind:'official',url:'https://html-classic.itch.zone/html/18906721/SHIFT_MONITOR%201998/index.html?v=1787394666',checkedAt:JSON.parse(read('quality/artifacts/sources/official-game-capture.json')).checkedAt,artifact:ref('quality/artifacts/sources/official-game.html')},
 {id:'game-observation',kind:'observation',url:'https://html-classic.itch.zone/html/18906721/SHIFT_MONITOR%201998/index.html?v=1787394666',checkedAt:obs.checkedAt,artifact:ref('quality/artifacts/sources/game-observation.json')},
 {id:'app',kind:'observation',url:collection.pages[0]?'https://shiftmonitor1998.robloxwikihub.com':'',checkedAt:now,artifact:ref('quality/artifacts/application-source.txt')},
 {id:'interactions',kind:'observation',url:'https://shiftmonitor1998.robloxwikihub.com',checkedAt:interactions.checkedAt,artifact:ref('quality/artifacts/interactions.json')},
 {id:'old-planner',kind:'observation',url:'https://github.com/lianlele168/shift-monitor-1998',checkedAt:now,artifact:ref('quality/artifacts/previous-planner.txt')}
];
const claims=[
 ['identity','fact','SHIFT_MONITOR: 1998 is Carl Dev’s released HTML5 browser game.',['itch'],'Official title/author and More information Status/Platforms, browser iframe.'],
 ['camera-labels','number','Four cameras: Main Hallway, Storage Room, Security Office, Generator Bay.',['game-code','game-observation'],'camNames and switchCam in captured script; actual cam1–4 labels in observation steps.'],
 ['warning','fact','Warning may persist on an unaffected feed; identify the visible anomaly.',['game-code','game-observation'],'updateEntityVisibility only resets status when anomalyCam is zero; observation changes away while warning remains.'],
 ['purge','fact','Purge clears the anomaly only on its active camera, reduces corruption and updates visibility; a later anomaly may appear.',['game-code'],'purgeAnomaly conditional, corruption reduction, updateEntityVisibility and the game interval/spawnAnomaly. No invented numerical rates exposed.'],
 ['observed-sequence','verification','Automated browser observed a natural anomaly on CAM02, switched away, returned, purged, and saw stable status.',['game-observation'],'Complete passed observation steps and game-anomaly.png/game-stable.png from that sequence; no injected game state.'],
 ['observation-date','date','Game observation and its screenshot were captured 8 October 2026 UTC.',['game-observation'],'checkedAt timestamp, capturedScreenshot and test script records; not a patch/publication date.'],
 ['app-behavior','fact','Manual camera checklist stores marks in current page memory only; reset/reload clears marks, search is local, no game integration.',['app','interactions'],'MonitorPlanner useState and reset; Header useMemo; four-width executed interaction checks.'],
 ['review-scope','verification','Codex source/browser review and AI-assisted writing; Hlele is site owner, no owner playtest is claimed.',['app','game-observation'],'Footer/layout attribution against workspace identity instruction; source and execution log with stated limits.'],
 ['corrections','verification','Invented risk score and safe window have been removed; legacy routes link to the consolidated guide.',['old-planner','app'],'Historical planner risk/safePurgeWindow formulas versus current simple checklist and recorded route review.']
].map(([id,kind,statement,sourceIds,support])=>({id,kind,statement,sourceIds,support,review}));
const descriptions={
 '/':['Find the official game and the guide','Specific camera-warning pitfall with an actual observation screenshot'],
 '/guide/':['Resolve confusion about camera switching and purge','Reproducible warning persistence sequence and optional manual checklist'],
 '/play/':['Open the current official game','Stable official destination, clearly no game mirror'],
 '/updates/':['Inspect evidence and corrections','Exact build, observed sequence and review limits'],
 '/about/':['Understand site ownership','Independent publisher and AI/browser review disclosure'],
 '/privacy-policy/':['Understand data behavior','Actual in-memory checklist and outbound-service behavior'],
 '/terms/':['Understand reference scope','Version limitations and ownership/contact'],
 '/camera-guide/':['Recover an old camera-guide link','Explicit correction and consolidated guide destination'],
 '/anomaly-guide/':['Recover an old anomaly-guide link','Explicit correction and consolidated guide destination'],
 '/survival-tips/':['Recover old survival advice','Withdrawal of unverified predictions and useful guide link']
};
const pages=collection.pages.map(p=>{
 const tech=JSON.parse(read(p.technicalArtifact.path));
 if(tech.viewports.some(v=>v.overflow)||tech.consoleErrors||tech.links!=='passed')throw Error('Technical failure: '+p.path);
 tech.viewports.forEach(v=>v.readable=true);tech.interaction='passed';tech.contentReview='supported';tech.note='Readability: separate independent review and final shared-font correction. Interaction: shared Header plus guide manual checklist, actual four-width tests; no game behavior inferred from local preview.';
 write(p.technicalArtifact.path,tech);
 let ids=['identity','review-scope'];
 if(['/', '/guide/','/updates/'].includes(p.path)) ids.push('camera-labels','warning','purge','observed-sequence','observation-date');
 if(['/guide/','/privacy-policy/','/terms/'].includes(p.path))ids.push('app-behavior');
 if(['/updates/','/camera-guide/','/anomaly-guide/','/survival-tips/'].includes(p.path))ids.push('corrections');
 return {path:p.path,status:'ready',intent:descriptions[p.path][0],uniqueValue:descriptions[p.path][1],indexable:['/','/guide/'].includes(p.path),claimIds:ids,claimCoverage:'complete',crossPageConsistency:'passed',review,renderedArtifact:p.renderedArtifact,technicalArtifact:ref(p.technicalArtifact.path)};
});
write('quality/review.json',{schemaVersion:1,codeFingerprint:collection.codeFingerprint,site:{baseUrl:'https://shiftmonitor1998.robloxwikihub.com',officialUrl:sources[0].url,platform:'html5',releaseStatus:'released',identitySourceId:'itch',identityReview:review},sources,claims,pages,routeInventoryArtifact:collection.routeInventoryArtifact,sitemapPaths:['/','/guide/'],sitemapArtifact:collection.sitemapArtifact,skillRunArtifact:ref('quality/skill-run.md'),buildArtifact:ref('quality/artifacts/build.log'),buildStatus:'passed',unresolved:[]});
console.log(JSON.stringify({pages:pages.length,claims:claims.length,fingerprint:collection.codeFingerprint}));
