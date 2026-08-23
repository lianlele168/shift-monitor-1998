import Link from "next/link";
import { Camera, ExternalLink, FileText, Monitor, Play, ShieldCheck } from "lucide-react";
import config from "@/data/site.config.json";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-green-300/15 bg-black text-slate-400">
      <div className="border-b border-green-300/15 bg-green-950/20 py-5">
        <div className="page-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-300 shadow-lg shadow-green-400/50" />
            <span className="font-mono text-sm font-bold text-slate-200">
              Signal source: <span className="text-green-200">itch.io HTML5</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/play" className="btn-quiet">
              <Play className="h-3.5 w-3.5 text-green-300" />
              Play Guide
            </Link>
            <a href={config.game.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-quiet">
              Official itch.io
              <ExternalLink className="h-3.5 w-3.5 text-amber-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="page-shell py-11">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Monitor className="h-6 w-6 text-green-300" />
              <span className="font-mono text-lg font-black text-white">SHIFT_MONITOR</span>
            </div>
            <p className="text-xs leading-relaxed">
              Unofficial guide for {config.game.name}. Built as a compact HTML5 game experiment with source tracking, original strategy notes, and a monitor planner.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-green-300/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-green-200">
              Checked {config.game.lastChecked}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-green-200">Core</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/play" className="flex items-center gap-2 hover:text-white"><Play className="h-4 w-4 text-green-300" />Play</Link></li>
              <li><Link href="/guide" className="flex items-center gap-2 hover:text-white"><FileText className="h-4 w-4 text-green-300" />Beginner Guide</Link></li>
              <li><Link href="/camera-guide" className="flex items-center gap-2 hover:text-white"><Camera className="h-4 w-4 text-green-300" />Camera Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-green-200">Strategy</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/anomaly-guide" className="hover:text-white">Anomaly Guide</Link></li>
              <li><Link href="/survival-tips" className="hover:text-white">Survival Tips</Link></li>
              <li><Link href="/updates" className="hover:text-white">Updates & Sources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-green-200">Info</h3>
            <ul className="mb-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
            <p className="rounded-md border border-green-300/15 bg-white/5 p-3 text-[11px] leading-relaxed">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-green-300" />
              Not affiliated with itch.io or {config.game.developer}. Play the game from the official itch.io page.
            </p>
          </div>
        </div>

        <div className="mt-9 border-t border-green-300/15 pt-6 text-xs">
          (c) {new Date().getFullYear()} {config.game.name} Guide. Unofficial HTML5 game companion.
        </div>
      </div>
    </footer>
  );
}
