import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ExternalLink, ShieldAlert } from "lucide-react";
import config from "@/data/site.config.json";
import gameplay from "@/data/gameplay.json";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SHIFT_MONITOR: 1998 Updates & Sources",
  description: "Source log and quality-control notes for this unofficial SHIFT_MONITOR: 1998 HTML5 guide.",
  alternates: { canonical: "/updates" },
};

const faqs = [
  {
    question: "What sources does this SHIFT_MONITOR: 1998 guide use?",
    answer: "The initial site uses the official itch.io game page plus itch.io tag pages for public platform context.",
  },
  {
    question: "Why is the site small?",
    answer: "It is intentionally compact to avoid thin-content expansion and focus on pages with clear player intent.",
  },
  {
    question: "When was it checked?",
    answer: "The current source snapshot was checked on August 23, 2026.",
  },
];

export default function UpdatesPage() {
  const schema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Updates", item: absoluteUrl("/updates/") },
  ]);
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="page-shell py-10">
        <section className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 font-mono text-xs font-black uppercase tracking-wide text-amber-100">
            <ShieldAlert className="h-4 w-4 text-amber-300" />
            Source and quality log
          </div>
          <h1 className="font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">SHIFT_MONITOR: 1998 Updates & Sources</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This page records what was checked and how the site avoids becoming a low-value text clone of the official itch.io page.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="surface p-5">
            <CheckCircle2 className="mb-3 h-7 w-7 text-green-300" />
            <h2 className="mb-2 font-mono text-xl font-black text-white">Released</h2>
            <p className="text-sm leading-6 text-slate-300">Official status: {config.game.status}. Published {config.game.published}.</p>
          </div>
          <div className="surface p-5">
            <CheckCircle2 className="mb-3 h-7 w-7 text-green-300" />
            <h2 className="mb-2 font-mono text-xl font-black text-white">HTML5</h2>
            <p className="text-sm leading-6 text-slate-300">Platform: {config.game.platform}. No download required according to the official page.</p>
          </div>
          <div className="surface p-5">
            <CheckCircle2 className="mb-3 h-7 w-7 text-green-300" />
            <h2 className="mb-2 font-mono text-xl font-black text-white">Compact</h2>
            <p className="text-sm leading-6 text-slate-300">The site keeps a narrow page set and one original monitor planner.</p>
          </div>
        </section>

        <section className="mb-10 surface p-6">
          <h2 className="mb-5 text-2xl font-black text-white">Checked sources</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {config.sources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-md border border-green-300/15 bg-white/5 p-4 hover:border-green-300/40">
                <span>
                  <span className="block font-black text-white">{source.name}</span>
                  <span className="block truncate text-xs text-slate-500">{source.url}</span>
                </span>
                <ExternalLink className="h-4 w-4 text-amber-300" />
              </a>
            ))}
          </div>
        </section>

        <section className="surface p-6">
          <h2 className="mb-5 text-2xl font-black text-white">Thin-content safeguards</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {gameplay.qualityRules.map((rule) => (
              <div key={rule} className="rounded-md border border-green-300/15 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                {rule}
              </div>
            ))}
          </div>
          <Link href="/survival-tips" className="btn-primary mt-6">
            Open Monitor Planner
          </Link>
        </section>
      </main>
    </>
  );
}
