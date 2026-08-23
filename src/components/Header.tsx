"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Camera,
  ChevronRight,
  ExternalLink,
  FileText,
  Menu,
  Monitor,
  Play,
  Radar,
  Search,
  ShieldAlert,
  X,
} from "lucide-react";
import config from "@/data/site.config.json";
import gameplay from "@/data/gameplay.json";

const navItems = [
  { href: "/play", label: "Play", icon: Play },
  { href: "/guide", label: "Guide", icon: FileText },
  { href: "/camera-guide", label: "Cameras", icon: Camera },
  { href: "/anomaly-guide", label: "Anomalies", icon: Radar },
  { href: "/survival-tips", label: "Survival", icon: Activity },
];

const staticSearchItems = [
  { title: "Play SHIFT_MONITOR: 1998", detail: "Official itch.io play link and pre-shift checklist", href: "/play", type: "Play" },
  { title: "Beginner Guide", detail: "Game objective, controls, purge loop, and first run plan", href: "/guide", type: "Guide" },
  { title: "Camera Guide", detail: "Hallway, Storage, Office, and Generator rotation notes", href: "/camera-guide", type: "Guide" },
  { title: "Anomaly Guide", detail: "How to inspect feeds without inventing hidden spawn tables", href: "/anomaly-guide", type: "Guide" },
  { title: "Survival Tips", detail: "Cycle timing, purge windows, and corruption pressure", href: "/survival-tips", type: "Tips" },
  { title: "Updates", detail: "Sources and quality-control notes", href: "/updates", type: "Log" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();

    const cameraResults = gameplay.cameras
      .filter((item) => `${item.name} ${item.role} ${item.checkRule}`.toLowerCase().includes(q))
      .map((item) => ({
        title: item.name,
        detail: item.checkRule,
        href: "/camera-guide",
        type: "Camera",
      }));

    const featureResults = gameplay.features
      .filter((item) => `${item.title} ${item.body}`.toLowerCase().includes(q))
      .map((item) => ({
        title: item.title,
        detail: item.body,
        href: "/guide",
        type: "Feature",
      }));

    const routeResults = staticSearchItems.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(q));

    return [...cameraResults, ...featureResults, ...routeResults].slice(0, 10);
  }, [searchQuery]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-green-300/15 bg-black/90 shadow-lg shadow-black/60 backdrop-blur-md">
        <div className="page-shell">
          <div className="flex h-16 items-center justify-between gap-3">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-green-300/35 bg-green-950/30 text-green-200 shadow-lg shadow-green-950/30">
                <Monitor className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-mono text-sm font-black uppercase text-white group-hover:text-green-200 sm:text-base">
                  SHIFT_MONITOR: 1998
                </span>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-green-200">
                  CCTV Survival Guide
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex h-10 items-center gap-2 rounded-md px-3 text-sm font-bold transition ${
                      isActive
                        ? "bg-green-300/15 text-green-100 ring-1 ring-green-300/35"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-green-200" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a href={config.game.officialUrl} target="_blank" rel="noopener noreferrer" className="hidden h-10 items-center gap-2 rounded-md border border-green-300/20 bg-white/5 px-3 text-xs font-bold text-green-100 transition hover:border-green-300 hover:text-white lg:flex">
                itch.io
                <ExternalLink className="h-3.5 w-3.5 text-amber-300" />
              </a>
              <button onClick={() => setSearchOpen(true)} className="flex h-10 items-center gap-2 rounded-md border border-green-300/20 bg-black/70 px-3 text-xs font-bold text-slate-300 transition hover:border-green-300/50 hover:text-white" title="Search guide">
                <Search className="h-4 w-4 text-green-300" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden rounded border border-green-900 bg-black px-1.5 py-0.5 font-mono text-[10px] text-green-300/70 sm:inline">
                  Ctrl K
                </kbd>
              </button>
              <button onClick={() => setMobileMenuOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-md border border-green-300/20 bg-black/70 text-slate-200 xl:hidden" aria-label="Toggle navigation">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-green-300/15 bg-black/95 px-4 py-4 xl:hidden">
            <div className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`flex items-center justify-between rounded-md border px-4 py-3 text-sm font-bold ${isActive ? "border-green-300/40 bg-green-500/10 text-green-100" : "border-green-300/15 bg-white/5 text-slate-300"}`}>
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-green-300" />
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </header>

      {searchOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/95 px-4 pt-16 backdrop-blur-sm sm:pt-24">
          <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-green-300/25 bg-black shadow-2xl">
            <div className="flex items-center border-b border-green-300/15 px-4">
              <Search className="h-5 w-5 shrink-0 text-green-300" />
              <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search cameras, anomaly, purge, survival..." className="h-14 w-full bg-transparent px-4 font-mono text-base font-semibold text-white placeholder:text-slate-500 focus:outline-none" autoFocus />
              <button onClick={() => setSearchOpen(false)} className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close search">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[62vh] overflow-y-auto p-4">
              {!searchQuery ? (
                <div className="py-9 text-center">
                  <ShieldAlert className="mx-auto mb-3 h-8 w-8 text-amber-300" />
                  <p className="text-sm font-semibold text-slate-300">Try CAM 04, purge, corruption, anomaly, or survival.</p>
                </div>
              ) : null}
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((item) => (
                    <Link key={`${item.type}-${item.title}`} href={item.href} onClick={() => setSearchOpen(false)} className="flex items-center justify-between rounded-md border border-green-300/15 bg-white/5 p-3 transition hover:border-green-300/40 hover:bg-green-500/10">
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-black text-white">{item.title}</span>
                        <span className="block truncate text-xs text-slate-400">{item.detail}</span>
                      </span>
                      <span className="ml-3 flex shrink-0 items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wide text-green-200">
                        {item.type}
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              ) : null}
              {searchQuery && searchResults.length === 0 ? (
                <div className="py-9 text-center text-sm font-semibold text-slate-400">No results found for &quot;{searchQuery}&quot;.</div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
