import Link from "next/link";
import { Home, Monitor, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center py-16">
      <div className="surface max-w-xl p-8 text-center">
        <Monitor className="mx-auto mb-5 h-12 w-12 text-green-300" />
        <h1 className="mb-3 font-mono text-3xl font-black text-white">Signal lost</h1>
        <p className="mb-6 text-sm leading-7 text-slate-300">This feed is unavailable. Return to the guide or open the play page.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary"><Home className="h-5 w-5" />Home</Link>
          <Link href="/play" className="btn-secondary"><Search className="h-5 w-5 text-green-300" />Play</Link>
        </div>
      </div>
    </main>
  );
}
