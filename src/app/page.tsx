import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, ExternalLink, Monitor, Play, Radar, ShieldCheck } from "lucide-react";
import MonitorPlanner from "@/components/MonitorPlanner";
import config from "@/data/site.config.json";
import gameplay from "@/data/gameplay.json";
import { buildFAQSchema, buildVideoGameSchema, buildWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SHIFT_MONITOR: 1998 Guide - Play, Cameras & Survival Tips",
  description: "Play and understand SHIFT_MONITOR: 1998 with a compact guide for CCTV feeds, anomaly checks, purge timing, and survival routing.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    "question": "What is SHIFT_MONITOR: 1998?",
    "answer": "SHIFT_MONITOR: 1998 is a released HTML5 browser game by Carl Dev where you monitor four CCTV feeds, spot anomalies, purge corrupted signals, and try to survive before system blackout."
  },
  {
    "question": "Can I play SHIFT_MONITOR: 1998 online?",
    "answer": "Yes. The official itch.io page describes it as zero-friction browser play with no downloads required."
  },
  {
    "question": "What cameras are in SHIFT_MONITOR: 1998?",
    "answer": "The official page lists Hallway, Storage, Office, and Generator as the four active CCTV feeds."
  },
  {
    "question": "Does this guide list exact hidden anomaly spawn rates?",
    "answer": "No. Public sources do not provide exact spawn rates, so this guide focuses on observable camera rotation and purge discipline."
  },
  {
    "question": "Is this an official SHIFT_MONITOR: 1998 site?",
    "answer": "No. This is an unofficial companion guide that links to the official itch.io page."
  }
];

export default function HomePage() {
  const schemas = [buildWebsiteSchema(), buildVideoGameSchema(), buildFAQSchema(faqs)];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="hero-bg border-b border-green-300/15">
        <div className="page-shell grid min-h-[690px] items-center gap-10 py-14 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-300/40 bg-black/70 px-4 py-1.5 font-mono text-xs font-black uppercase tracking-wide text-green-100">
              <Monitor className="h-4 w-4 text-green-300" />
              HTML5 browser game
            </div>
            <h1 className="mb-5 font-mono text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              SHIFT_MONITOR: 1998 Guide
            </h1>
            <p className="max-w-2xl text-base font-medium leading-8 text-green-50/85 sm:text-lg">
              Rotate four CCTV feeds, identify signal anomalies, and purge corruption before the relay facility goes dark.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/play" className="btn-primary">
                <Play className="h-5 w-5" />
                Play Guide
              </Link>
              <Link href="/camera-guide" className="btn-secondary">
                <Camera className="h-5 w-5 text-green-300" />
                Camera Route
              </Link>
              <a href={config.game.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Official itch.io
                <ExternalLink className="h-5 w-5 text-amber-300" />
              </a>
            </div>

            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="metric-tile">
                <span className="block font-mono text-[11px] font-bold uppercase text-slate-400">Platform</span>
                <span className="mt-1 block font-mono text-lg font-black text-white">HTML5</span>
              </div>
              <div className="metric-tile">
                <span className="block font-mono text-[11px] font-bold uppercase text-slate-400">Feeds</span>
                <span className="mt-1 block font-mono text-lg font-black text-green-200">4 CCTV</span>
              </div>
              <div className="metric-tile">
                <span className="block font-mono text-[11px] font-bold uppercase text-slate-400">Genre</span>
                <span className="mt-1 block font-mono text-lg font-black text-white">Horror Sim</span>
              </div>
              <div className="metric-tile">
                <span className="block font-mono text-[11px] font-bold uppercase text-slate-400">Published</span>
                <span className="mt-1 block font-mono text-lg font-black text-white">Aug 22</span>
              </div>
            </div>
          </div>

          <div className="surface p-5">
            <div className="mb-5 flex items-center justify-between border-b border-green-300/15 pb-4">
              <div>
                <h2 className="font-mono text-xl font-black text-white">Operator Brief</h2>
                <p className="text-xs font-semibold text-slate-400">Facts from the official itch.io page</p>
              </div>
              <span className="badge-live">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Released
              </span>
            </div>
            <div className="space-y-3">
              {gameplay.features.map((feature) => (
                <Link key={feature.title} href="/guide" className="block rounded-md border border-green-300/15 bg-white/5 p-4 transition hover:border-green-300/50">
                  <span className="block font-mono text-sm font-black text-green-200">{feature.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-300">{feature.body}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-14">
        <MonitorPlanner />
      </section>

      <section className="bg-white py-14 text-slate-950">
        <div className="page-shell">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-green-700">Guide structure</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Small site, high intent, no filler</h2>
            </div>
            <Link href="/updates" className="inline-flex items-center gap-2 text-sm font-black text-green-800 hover:text-green-600">
              Source log
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["/play", "Play Online", "Official itch.io link, pre-shift checklist, and safe play notes."],
              ["/camera-guide", "Camera Rotation", "Hallway, Storage, Office, and Generator feed priorities."],
              ["/anomaly-guide", "Anomaly Checks", "Observable inspection methods without fake spawn tables."],
            ].map(([href, title, body]) => (
              <Link key={href} href={href} className="surface-light p-6 hover:border-green-700/30">
                <Radar className="mb-4 h-8 w-8 text-green-700" />
                <h3 className="mb-2 text-xl font-black">{title}</h3>
                <p className="text-sm leading-6 text-slate-700">{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-amber-200">Quality control</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">How this avoids thin-content risk</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The experiment is intentionally compact. It has one official source page, one original monitor tool, and a small set of player-intent pages instead of dozens of AI-expanded text pages.
            </p>
          </div>
          <div className="surface p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {gameplay.qualityRules.map((rule) => (
                <div key={rule} className="rounded-md border border-green-300/15 bg-white/5 p-4">
                  <ShieldCheck className="mb-3 h-5 w-5 text-green-300" />
                  <p className="text-sm leading-6 text-slate-300">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-green-300/15 bg-black/60 py-14">
        <div className="page-shell max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-green-300" />
            <h2 className="text-2xl font-black text-white">Quick FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="surface p-5">
                <h3 className="mb-2 text-sm font-black text-white">{faq.question}</h3>
                <p className="text-sm leading-6 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-shell py-6 text-[11px] text-slate-500">
        <p>Reviewed by Hlele · Content AI-assisted, human-reviewed · Data sources cited on page · Contact: lianlele168@gmail.com</p>
      </section>
    </>
  );
}
