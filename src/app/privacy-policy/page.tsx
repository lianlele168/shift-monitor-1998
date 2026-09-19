import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Mail, Scale, ExternalLink, CheckCircle2 } from "lucide-react";
import config from "@/data/site.config.json";

export const metadata: Metadata = {
  title: `Privacy Policy & Trust Center | ${config.game.name} Guide`,
  description: `Privacy policy, COPPA child safety disclosures, and data protection guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-rose-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Privacy Policy</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-xs font-bold text-rose-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>INDEPENDENT GAME GUIDE TRUST CENTER</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Privacy Policy &amp; Trust Disclosures
          </h1>
          <p className="text-sm text-slate-300">
            Unofficial fan guide and anomaly tracker for {config.game.name}.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-bold text-white">COPPA Compliant</p>
              <p className="text-slate-400">Safe for all players</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <Lock className="h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-bold text-white">Zero Account Needed</p>
              <p className="text-slate-400">No passwords or logins</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="font-bold text-white">100% Client-Side</p>
              <p className="text-slate-400">Tools run in browser</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <Mail className="h-5 w-5 shrink-0 text-rose-400" />
            <div>
              <p className="font-bold text-white">Verified Contact</p>
              <p className="text-slate-400">48h response SLA</p>
            </div>
          </div>
        </div>

        <div className="surface space-y-8 p-6 sm:p-8">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Lock className="h-5 w-5 text-amber-400" />
              <span>1. Zero Personal Data &amp; No Account Requirements</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              SHIFT_MONITOR: 1998 Guide is an informational fan resource. We do not require accounts, signups, or personal profile creation. All anomaly checklists, shift survival calculators, and camera guides run entirely within your local browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span>2. COPPA &amp; Privacy Compliance</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              In accordance with child privacy standards and COPPA regulations, this website does not collect, harvest, or profile personal identification from young visitors.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Eye className="h-5 w-5 text-cyan-400" />
              <span>3. Telemetry, Cookies &amp; Advertising</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Standard anonymous web telemetry (such as page speed and browser type) is processed to keep the site responsive. Third-party advertising vendors may use cookies to serve ads according to their privacy policies. Manage your preferences via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline hover:text-rose-300">Google Ads Settings</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ExternalLink className="h-5 w-5 text-blue-400" />
              <span>4. External Platform Hyperlinks</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Our site provides links to official itch.io and Steam pages. We do not control and are not responsible for the privacy practices of external platforms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Scale className="h-5 w-5 text-purple-400" />
              <span>5. Intellectual Property &amp; Fair Use</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              {config.game.name}, its logos, and game assets belong to {config.game.developer}. This fan site is an independent educational reference created under Fair Use.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Mail className="h-5 w-5 text-rose-400" />
              <span>6. Editorial &amp; Privacy Contact</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              For privacy inquiries, DMCA notices, or correction requests, contact our editorial staff directly at:
            </p>
            <div className="inline-block rounded-xl border border-rose-500/30 bg-rose-950/40 p-3 font-mono text-sm font-bold text-rose-300">
              lianlele168@gmail.com
            </div>
            <p className="text-xs text-slate-400">
              Inquiries are acknowledged within 48 business hours.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
