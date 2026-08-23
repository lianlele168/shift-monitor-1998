import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the unofficial SHIFT_MONITOR: 1998 Guide.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell max-w-4xl py-10">
      <h1 className="mb-5 font-mono text-4xl font-black text-white">Privacy Policy</h1>
      <div className="surface space-y-5 p-6 text-sm leading-7 text-slate-300">
        <p>This static guide does not require registration and does not ask for itch.io or game account credentials.</p>
        <p>If analytics, ads, or hosting logs are enabled by the site owner or hosting provider, they may collect standard technical information such as page views, browser type, referral source, and approximate location.</p>
        <p>External links may take you to itch.io or other third-party websites governed by their own policies.</p>
      </div>
    </main>
  );
}
