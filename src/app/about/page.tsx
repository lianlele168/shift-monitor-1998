import type { Metadata } from "next";
import { Monitor, ShieldCheck, Signal } from "lucide-react";
import config from "@/data/site.config.json";

export const metadata: Metadata = {
  title: "About SHIFT_MONITOR: 1998 Guide",
  description: "About this unofficial SHIFT_MONITOR: 1998 browser game guide and its source policy.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main className="page-shell py-10">
      <section className="mb-10 max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300/40 bg-green-300/10 px-4 py-1.5 font-mono text-xs font-black uppercase tracking-wide text-green-100">
          <Monitor className="h-4 w-4 text-green-300" />
          About this guide
        </div>
        <h1 className="font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">About SHIFT_MONITOR: 1998 Guide</h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          This is an unofficial companion guide for {config.game.name}, an HTML5 analog horror browser game by {config.game.developer}.
        </p>
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        <div className="surface p-6">
          <Signal className="mb-4 h-8 w-8 text-green-300" />
          <h2 className="mb-2 text-xl font-black text-white">Source tracked</h2>
          <p className="text-sm leading-7 text-slate-300">Core facts come from the official itch.io page and are kept separate from strategy interpretation.</p>
        </div>
        <div className="surface p-6">
          <ShieldCheck className="mb-4 h-8 w-8 text-amber-300" />
          <h2 className="mb-2 text-xl font-black text-white">No fake tables</h2>
          <p className="text-sm leading-7 text-slate-300">The site does not invent exact anomaly rates, hidden mechanics, or entity names.</p>
        </div>
        <div className="surface p-6">
          <Monitor className="mb-4 h-8 w-8 text-green-300" />
          <h2 className="mb-2 text-xl font-black text-white">Unofficial</h2>
          <p className="text-sm leading-7 text-slate-300">This site is not affiliated with itch.io or {config.game.developer}. Use the official page to play.</p>
        </div>
      </section>
    </main>
  );
}
