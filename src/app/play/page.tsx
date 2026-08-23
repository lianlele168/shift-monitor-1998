import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Monitor } from "lucide-react";
import config from "@/data/site.config.json";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Play SHIFT_MONITOR: 1998 Online",
  description: "Where to play SHIFT_MONITOR: 1998, what to check before starting, and how to use the official itch.io browser version safely.",
  alternates: { canonical: "/play/" },
};

const sections = [
  {
    "title": "Use the official page",
    "body": "Open the Carl Dev itch.io page and run the HTML5 version there. Avoid random rehost pages that ask for downloads or credentials."
  },
  {
    "title": "Start with the loop",
    "body": "Before chasing high survival time, learn the core loop: switch camera, inspect for anomaly, purge signal, continue rotation."
  },
  {
    "title": "Keep the planner nearby",
    "body": "Use the survival planner on this site to set a camera cycle rhythm before you start a run."
  }
];

const faqs = [
  {
    question: "Is Play SHIFT_MONITOR: 1998 official?",
    answer: "No. This is an unofficial companion guide that links to the official itch.io page."
  },
  {
    question: "Does this page invent hidden SHIFT_MONITOR: 1998 data?",
    answer: "No. It avoids fake spawn rates, fake entity names, and unverified hidden mechanics."
  },
  {
    question: "Where should I play SHIFT_MONITOR: 1998?",
    answer: "Use the official Carl Dev itch.io page linked from this site."
  }
];

export default function InfoPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Play SHIFT_MONITOR: 1998", item: absoluteUrl("/play/") },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <main className="page-shell py-10">
        <section className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300/40 bg-green-300/10 px-4 py-1.5 font-mono text-xs font-black uppercase tracking-wide text-green-100">
            <Monitor className="h-4 w-4 text-green-300" />
            Official play route
          </div>
          <h1 className="font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">Play SHIFT_MONITOR: 1998</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">SHIFT_MONITOR: 1998 is hosted on itch.io. This page points players to the official browser game and summarizes the first-run checklist without mirroring the game file.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={config.game.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Official itch.io
              <ExternalLink className="h-5 w-5" />
            </a>
            <Link href="/guide" className="btn-secondary">
              Read Beginner Guide
              <ArrowRight className="h-5 w-5 text-green-300" />
            </Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="surface p-6">
              <h2 className="mb-3 flex items-center gap-2 text-xl font-black text-white">
                <CheckCircle2 className="h-5 w-5 text-green-300" />
                {section.title}
              </h2>
              <p className="text-sm leading-7 text-slate-300">{section.body}</p>
            </div>
          ))}
        </section>
        
      </main>
    </>
  );
}
