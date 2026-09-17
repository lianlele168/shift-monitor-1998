import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Monitor } from "lucide-react";
import config from "@/data/site.config.json";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SHIFT_MONITOR: 1998 Beginner Guide",
  description: "A beginner guide for SHIFT_MONITOR: 1998 covering objective, controls, camera flow, purge timing, and first survival route.",
  alternates: { canonical: "/guide" },
};

const sections = [
  {
    "title": "Objective",
    "body": "Monitor the four CCTV feeds, spot signal anomalies, and purge corrupted frequencies before the corruption meter forces blackout."
  },
  {
    "title": "Controls",
    "body": "Use CAM 01 through CAM 04 to switch feeds, then use PURGE SIGNAL when the active feed shows a suspicious anomaly."
  },
  {
    "title": "First route",
    "body": "Run Hallway, Storage, Office, Generator in a fixed order until you can recognize the baseline look of each room."
  },
  {
    "title": "After a purge",
    "body": "Do not stare at the cleared camera. Return to the route so another feed does not decay unseen."
  }
];

const faqs = [
  {
    question: "Is SHIFT_MONITOR: 1998 Beginner Guide official?",
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
      { name: "SHIFT_MONITOR: 1998 Beginner Guide", item: absoluteUrl("/guide/") },
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
            Operator basics
          </div>
          <h1 className="font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">SHIFT_MONITOR: 1998 Beginner Guide</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">The game is less about memorizing a huge wiki and more about staying calm under signal pressure. Your first goal is a stable camera rhythm.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={config.game.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Official itch.io
              <ExternalLink className="h-5 w-5" />
            </a>
            <Link href="/camera-guide" className="btn-secondary">
              Open Camera Guide
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
