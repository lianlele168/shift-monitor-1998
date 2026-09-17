import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, CheckCircle2, Scale, Mail, Gamepad2 } from "lucide-react";
import config from "@/data/site.config.json";

export const metadata: Metadata = {
  title: `Terms of Use & Guidelines | ${config.game.name} Guide`,
  description: `Terms of use, gameplay accuracy disclaimers, and fair use guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="page-shell py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-rose-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Terms of Use</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-xs font-bold text-rose-300">
            <FileText className="h-3.5 w-3.5" />
            <span>COMMUNITY &amp; LEGAL TERMS</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Terms of Use &amp; Service Guidelines
          </h1>
          <p className="text-sm text-slate-300">
            Last updated: {config.game.lastChecked}. Unofficial strategy and survival companion for {config.game.name}.
          </p>
        </div>

        <div className="surface space-y-8 p-6 sm:p-8">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Gamepad2 className="h-5 w-5 text-emerald-400" />
              <span>1. Unofficial Fan Companion</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              SHIFT_MONITOR: 1998 Guide is an independent fan-made resource. It is not affiliated with, sponsored by, or endorsed by {config.game.developer} or itch.io.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>2. Live Patch Volatility &amp; Accuracy Disclaimer</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Anomaly spawn rules, audio cues, shift schedules, and endings change across demo builds. While we cross-reference player reports, all guides are provided &quot;as is&quot;. Always confirm game mechanics in your local game instance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ShieldAlert className="h-5 w-5 text-amber-400" />
              <span>3. Anti-Phishing &amp; Security Pledge</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We will <strong className="text-white">never</strong> ask for payment credentials or account passwords. Never share private credentials on fan sites.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <FileText className="h-5 w-5 text-blue-400" />
              <span>4. Acceptable Community Use</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Visitors are welcome to freely access and share our anomaly guides and shift trackers. You agree not to engage in malicious scraping, denial-of-service attempts, or misrepresenting this fan site as official game documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Scale className="h-5 w-5 text-purple-400" />
              <span>5. Intellectual Property &amp; Fair Use</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              {config.game.name}, camera art, and game assets belong to {config.game.developer}. All media and text on this site are used under Fair Use principles for commentary and strategy guide purposes.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Mail className="h-5 w-5 text-rose-400" />
              <span>6. DMCA &amp; Contact Inquiries</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              For rights holders, content attribution, or takedown requests, contact our editorial team directly at:
            </p>
            <div className="inline-block rounded-xl border border-rose-500/30 bg-rose-950/40 p-3 font-mono text-sm font-bold text-rose-300">
              lianlele168@gmail.com
            </div>
            <p className="text-xs text-slate-400">
              We respond promptly within 48 business hours.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
