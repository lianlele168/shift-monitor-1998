"use client";
import {useState} from 'react';
const feeds=['Main Hallway','Storage Room','Security Office','Generator Bay'];
export default function MonitorPlanner(){
 const [checked,setChecked]=useState<string[]>([]);
 return <section className="surface mt-8 p-6" aria-labelledby="checklist-title"><h2 id="checklist-title" className="text-xl font-bold">Optional camera checklist</h2><p className="mt-3 text-sm leading-7 text-slate-300">Mark feeds you have looked at, then reset for another pass. This is a manual memory aid. It cannot read the game, detect an anomaly or tell you that a camera is safe. Marks disappear on refresh.</p><div className="my-5 grid gap-3 sm:grid-cols-2">{feeds.map(feed=><label key={feed} className="flex cursor-pointer items-center gap-3 rounded border border-green-300/25 p-3"><input type="checkbox" checked={checked.includes(feed)} onChange={()=>setChecked(prev=>prev.includes(feed)?prev.filter(x=>x!==feed):[...prev,feed])}/>{feed}</label>)}</div><p role="status" className="mb-4 text-sm text-green-200">{checked.length ? checked.length+' of 4 marked' : 'No feeds marked yet.'}</p><button className="btn-secondary" onClick={()=>setChecked([])} disabled={!checked.length}>Reset checklist</button></section>;
}
