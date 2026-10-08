# Independent Shift review — 2026-10-09

Reviewer: Codex subagent `/root/autonomous_workflow`; implementation author: `/root`. This reviewer did not edit the site implementation or mark manifest/technical fields ready. Review scope is the existing-site repair, not an assertion that this was a new site created from nothing.

## Evidence examined

- Read the full supplied `quality/artifacts/sources/official-game.html`, the original itch page capture, source-capture metadata, `game-observation.json` and the observation script. The itch page identifies Carl Dev, Released, HTML5 and links its iframe to build 18906721.
- Read all current site content/routes, layout/SEO helpers, data actually used by search, the checklist component and the interaction test script/report. Read the rendered content supplied in the actual page screenshots, not a dead data array alone.
- Visually inspected all 40 full-page images: home, guide, updates, play, about, privacy-policy, terms, camera-guide, anomaly-guide and survival-tips at 390/768/1024/1440. Also inspected the four guide viewport screenshots. These inspections exposed inconsistent font rendering between builds; they are not silently treated as final-version evidence.
- Ran an independent read-only local Chrome check with networkidle plus `document.fonts.ready`, first on the inconsistent export and then on the cold rebuild. No game state was injected and no page-review JSON was changed.

## Fact support

| Claim/scope | Independent support |
|---|---|
| Four feeds and their displayed names | Official supplied code `camNames` maps 1–4 to MAIN HALLWAY, STORAGE ROOM, SECURITY OFFICE, GENERATOR BAY; root observation records actual button selections and labels. |
| Warning can persist after leaving affected feed | `updateEntityVisibility()` hides the entity in the other-feed branch but only resets signal text when `anomalyCam === 0`. Observation reports entityVisible false with warning text unchanged on another feed. |
| Purge succeeds on the affected camera | `purgeAnomaly()` requires `anomalyCam === currentCam && anomalyCam !== 0`; success sets anomalyCam to zero, reduces stored corruption with a zero floor, calls visibility update. Observation records disappearance and SIGNAL: STABLE. |
| Another anomaly can appear later | Supplied game loop can call spawnAnomaly again when no anomaly exists. The site avoids claiming an optimal interval or guaranteed survival. |
| Red shape in CAM 02 in the recorded sequence | The natural-observation script only captures after `#entity` is visible; recorded cam is 2, consistent with screenshot caption and displayed label. This is a report of that recorded sequence, not a universal fixed spawn. |
| Manual checklist cannot inspect the game; refresh clears | Component uses local React state, no network/game-state connection and no persistent storage. Empty, marked and reset states are present. |
| AI-assisted review versus Hlele personal playtesting | About/footer/source log expressly distinguish these; no invented personal gameplay/credential declaration remains in the reviewed pages. |
| Dates/build references | 8 October date refers to actual source capture and observation timestamps; static code does not regenerate current-month metadata. |

No unsupported camera priority, risk score, safe-purge-window formula or tier rating remained in the reviewed rendered guide. The three former advice routes explicitly point to the consolidated guide and are noindex. Homepage gives entry/summary; guide contains the distinct observed control pitfall. Eight ancillary/correction pages being outside sitemap is consistent with the current scope.

## Visual observations

- Homepage: all four widths retain legible heading, two clear actions, game screenshot/caption, two explanatory cards and footer; no horizontal clipping observed.
- Guide: paragraphs/ordered steps/checklist fit each width; 390 uses one checklist column and larger widths two; title wraps, long text flows, figure remains in its container. The small game labels in the narrow figure are explained in adjacent text, so the figure is not the sole instruction source.
- Sources page: long build link text wraps, attribution and observation limits are readable, and supporting headings distinguish source, browser action and correction history.
- Play/About/Privacy/Terms: short text and contact/action links fit every inspected width. Existing-guide correction pages show one clear link to `/guide/` without the old unsupported advice.
- No new layout blocker apart from the font/export issue below was found. Empty space on short utility pages is cosmetic, not a reason to manufacture content.

## Issues found and disposition

1. **Resolved in source, final export needs normal confirmation:** `buildWebsiteSchema()` advertised `/guide/?q={search_term_string}` as a SearchAction although the route did not implement URL-driven search. Reported to root; root removed potentialAction and this reviewer confirmed source removal. The real in-page search remains a client-state feature.
2. **Cold rebuild fixed the first half; final font class needs confirmation:** an export had body classes `__variable_f367f3 __variable_b4c22e` while its CSS defined `__variable_d8ebd1/__variable_6e1ae4`. Actual browser showed empty font variables and Times New Roman. Root preserved old caches and cold-built; independently checked that the new HTML/CSS now share the latter classes and body has the Inter variable. A separate inheritance issue remained: Tailwind's html font declaration could not read the body-scoped variable, and ordinary body text still inherited Times. Root was advised to add `font-sans` directly to body (or equivalent direct body font-family). Final screenshot capture must follow that source change; no stale screenshots should receive a new fingerprint.
3. **Evidence caution, not invented failure:** `interactions.json` records successful four-width checklist/reset/refresh/search/navigation plus actual404. This reviewer inspected its script and report but did not claim to have repeated those interactions. The reviewer did independently repeat actual-browser font/computed-style inspection.

## Release disposition

The narrowed factual content is supported by the inspected source and recorded observation within its explicitly stated limits. No remaining content blocker was found. Final publication still requires resolving/confirming the body-font issue, capturing the final successful build, completing the actual gate records and checking the production deployment. This document alone does not authorize or certify publication and is not evidence of Google indexing.

Root may append the final-difference verification when the font-only change and new capture are complete; it must not rewrite the earlier observed failures as if they never occurred.

## Final difference verification — 2026-10-08 16:35 UTC

Reviewer `/root/autonomous_workflow` independently checked the final export at code fingerprint `a3f54de5b5874b493d8c872854c77d5f37bc8f71275f308ca2b33bc669e4f1db` after the successful controller build and preview. This closes the two open findings above. It does not erase their earlier failed observations.

- Repeated a read-only Chrome inspection on all ten routes at all four widths, waiting for networkidle and document.fonts.ready. Forty observations confirm body font is Inter, the body-scoped font variable is populated, paragraph styles use the intended Inter or IBM Plex Mono rather than Times New Roman, and scroll width equals viewport width. The raw results are in local `quality/autonomous/final-font-check.json` (checkedAt 2026-10-08T16:35:30.298Z).
- Confirmed no rendered JSON-LD on any route advertises SearchAction. The final body includes font-sans and its generated variable classes agree with the loaded stylesheet.
- Viewed the latest captured guide screenshots at 390/768/1024/1440 and homepage at 390/1440 as a focused review of the shared-font and reading-column change. Text, headings, actions, checklist and source caption remain legible with no clipping. The earlier complete ten-route visual/content review remains applicable because game facts and route scope were unchanged; it is not misrepresented as a second full forty-image visual review.
- Inspected the final interaction report checkedAt 2026-10-08T16:32:26.786Z: the builder reran checklist/reset/refresh, search and navigation at all four widths. This reviewer does not claim to have independently repeated those interactions; the actual script and report support that check.
- The other final differences are build reproducibility and isolation: Node engine/Linux dependency lock consistency, npm ci in Vercel, and excluding quality backups from TypeScript compilation. They add no game claims. The controller's failed build correctly prevented preview until repaired and rebuilt.

No unresolved factual or visual blocker remains in the reviewed local version. This independently reviewed version may proceed through the conditional release preflight and actual production checks. Google indexing remains unverified.

## Generated-file gate correction — independently revalidated 16:49 UTC

The only implementation difference from the preceding reviewed commit is the gate fingerprint filter: exclude generated `*.tsbuildinfo` and the root `next-env.d.ts`. Application declarations, nested `src/**/next-env.d.ts`, compiler configuration, lockfiles and actual site code remain included. This reviewer read the exact four-line diff and the real Git-archive regressions. It fixes a local/CI fingerprint inconsistency; it does not loosen content/source evidence requirements.

Read the retained Linux npm ci/build logs and clean Git candidate fingerprint: the 38-file archive and local source both identify `3b034f2e2735bd9305c76203e24606f47d13895fb5dcf08c4d851543fcd6808f`. The current controller preview is `7d0e199f-693e-4cb0-ab63-156ecc92d7ef`.

At 2026-10-08T16:49:33.641Z this reviewer independently compared current captured main text and screenshot hashes against the previous reviewed Git HEAD: all ten page main texts were unchanged, 39 of 40 images were byte-identical, and only `updates-1440.png` changed. Opened and visually inspected that new image: complete source/observation paragraphs, correction explanation, footer, font and spacing are present and legible, with no new defect. Existing fact/source review dates remain appropriate because those claims did not change. Read the repeated four-width interaction report dated 16:45:59 UTC; it records the builder's executed checks, not new gameplay observation by this reviewer.

No remaining blocker was found for this updated local version. The new code fingerprint and current collection can be recorded by the controller; release remains conditional on clean committed evidence, actual provider success and formal-domain checks.
