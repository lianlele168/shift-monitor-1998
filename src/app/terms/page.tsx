import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the unofficial SHIFT_MONITOR: 1998 Guide.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main className="page-shell max-w-4xl py-10">
      <h1 className="mb-5 font-mono text-4xl font-black text-white">Terms of Use</h1>
      <div className="surface space-y-5 p-6 text-sm leading-7 text-slate-300">
        <p>SHIFT_MONITOR: 1998 Guide is an unofficial informational site. Use the guide and monitor planner as player aids, not as guarantees of game outcomes.</p>
        <p>Game content, names, and trademarks belong to their respective owners. This site is not affiliated with itch.io or Carl Dev.</p>
        <p>Play SHIFT_MONITOR: 1998 from the official itch.io page. Do not enter account credentials on unofficial mirrors.</p>
      </div>
    </main>
  );
}
