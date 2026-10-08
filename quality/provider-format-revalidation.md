# Vercel config format equivalence

Codex /root, 2026-10-08T17:01:32.660Z. Only the review gate changes: root vercel.json is parsed and stringified for fingerprint comparison because the actual Vercel deployment reserializes its JSON before invoking the build. Configuration values and key order remain covered. Other JSON, application sources and invalid config bytes are not exempt. The failed provider fingerprint was reproduced exactly by changing only this serialization.

Actual controller build and fresh preview passed. Independently compared all 10 main texts and all 40 screenshot bytes against Git HEAD: no differences. Fresh four-width checklist/reset/reload/search/navigation checks passed at 2026-10-08T16:59:19.688Z. The 28 gate regressions passed, including changed buildCommand rejection. Original factual source review dates remain untouched. New fingerprint 84b7065a525ddb77e20bd12f5d85b85c811e0843efc414bea638cee447eb4469.

Remote build and public URL verification remain separate release steps.
