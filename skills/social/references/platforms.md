# Platform Strategy and AVS Policy v2026.11

Use this reference for the November 17, 2026 Coastline / Anthony Luna handoff. **Every coefficient, multiplier, target, penalty, and duration below is a supplied editorial policy assumption, not an official platform algorithm coefficient, measured causal lift, or probability of virality.** Keep it separate from source-backed historical calibration.

## Evidence and scoring contract

- Label outputs `policy_version: 2026.11`, `evidence_type: user_supplied_policy`, platform, account, format, observation window, metric definitions, and coverage.
- A draft receives an editorial readiness score. It cannot have observed completion, dwell, sends, or retention before publication. Report those as Pending, not zero or an inferred value.
- Normalize measured components only against documented targets or comparable platform/account cohorts. Never add raw likes, comments, seconds, and ratios as if they share units.
- Retain platform definitions. Total shares are not DM-only sends. Views are not unique reach. Average percentage viewed is not completion. YouTube viewed-vs-swiped is not three-second hold. Author replies are not independent audience comments.
- Missing or zero denominators make the rate unavailable. Preserve the unassessed weight. Do not rescale an incomplete score to 100 and call it comparable to a complete score.
- Report raw weighted contribution, modifiers, capped display score, missing evidence, and readiness separately. A score never authorizes publication.
- The YouTube long-form weights supplied below sum to **0.90**. Keep the remaining **0.10 unspecified**. Do not invent or silently normalize it.
- Historical exports require provenance, actual accounts, date coverage, denominators, paid/collaboration status, and comparable formats. Synthetic fixtures must never become Anthony's personalized historical evidence.

## Global editorial penalties

| Condition | Policy modifier | Required action |
| --- | --- | --- |
| AI-slop phrase | 0.68x | Rewrite the phrase and reassess |
| Engagement bait | 0.62x–0.72x | Remove bait. If calculating a scalar score, document the selected value within this supplied range rather than silently inventing one |
| External URL in post body | X 0.50x, Facebook 0.60x, LinkedIn 0.63x, Instagram 0.88x | Prepare first-comment/reply placement, or an authorized native DM workflow where appropriate |

Banned phrases: “in today's fast-paced world”, “delve into”, “unlock your potential”, “game-changer”, “synergy”, “synergies”, “paradigm shift”, “let's dive in”, “buckle up”, “testament to”, “tapestry of”, “it's not just about”, “thrilled to announce”, “humbled and honored”, “excited to share”, “thought leader”, “leadership journey”.

Bait patterns: “comment YES”, “type YES below”, “like if you agree”, “tag 3 friends”, “follow for part 2”. Genuine practitioner questions remain appropriate when they add value.

Link placement is a user policy, not evidence of a guaranteed reach benefit. The format modifier and URL modifier are distinct inputs: disclose each application and avoid applying the same named modifier twice. Do not send comments or DMs merely because a draft includes their proposed text.

## Instagram

| Signal | Unconnected Reels / Explore policy | Connected follower-feed policy |
| --- | ---: | ---: |
| Watch time / completion | 0.34 | 0.30 |
| DM sends / reach | 0.30 | 0.22 |
| Saves / reach | 0.16 | 0.12 |
| Profile visits | 0.10 | 0.04 |
| Likes | 0.06 | 0.26 |
| Comments | 0.04 | 0.06 |

Format modifiers: Trial Reel **1.38x**, Reel **1.32x** (18–65s), carousel **1.24x** (6–12 slides), image **0.82x**, Story **0.75x**. Trial Reel is its own format modifier, not Trial Reel × ordinary Reel.

Targets: three-second hold **68%**, completion **65%**, sends/reach **2.5%**, saves/reach **3.0%**, **2–5** hashtags. More than five tags: **0.84x**. Reel over 180 seconds: **0.45x** editorial penalty. Watermark: **0.55x**. Do not describe the duration policy as verified exclusion from Explore or the hashtag policy as a universal platform limit.

Bonuses: useful DM-share premise **1.18x**, saveable framework/checklist **1.12x**, natural topic keywords in first two lines **1.09x**. These are policy preferences, not measured uplift.

### Trial Reels SOP

1. Prepare the video, final caption, audience, hypothesis, and measurement definitions. Confirm Trial Reels is available for this account. Staging a draft and publishing a Trial Reel are different actions.
2. Under an authorized distribution task, publish as a Trial Reel first. Keep automatic share-to-everyone disabled when enforcing the custom gate below. Trials reach non-followers first, but followers can encounter them through sharing or other surfaces.
3. At approximately 24 hours, record the actual metrics available for the **non-follower cohort** and the measurement timestamp. Meta's documentation names views, likes, comments, and shares. It does not guarantee cohort-specific three-second hold or DM-only sends.
4. Custom graduation policy: **24-hour non-follower three-second hold >=62% AND DM sends/reach >=1.5%**. Both must be observed with compatible definitions and nonzero denominators. Total shares or overall hold are not substitutes.
5. Either metric unavailable: **PENDING_EVIDENCE**, no automatic graduation. Both observed and either below target: retain trial / revise. Both pass: eligible for an authorized share-to-everyone action, not proof of future follower performance.
6. Record the publication object and subsequent 48-hour / seven-day outcomes separately. Do not manufacture a completed 24-hour observation from cumulative later data.

## LinkedIn

“360Brew” is retained only as a legacy handoff label. Do not describe it as the current Feed ranker or assert a verified “69% topic authority” rule. LinkedIn's March 2026 engineering account describes semantic retrieval and sequential ranking, not these public coefficients.

| Signal | Policy weight |
| --- | ---: |
| Dwell time | 0.34 |
| Substantive comments (>12 words) | 0.26 |
| Saves / sends | 0.18 |
| Author reply-chain depth | 0.10 |
| Profile clicks / follows | 0.08 |
| Likes | 0.04 |

Formats: document carousel **1.38x** (7–12 slides), text with image **1.18x**, native video **1.16x** (35–115s), newsletter **1.14x**, text **1.10x** (110–260 words), link post **0.62x**.

Bonuses: crisp two-line hook of <=13 words **1.16x**, concrete operator evidence **1.18x**, relevant practitioner question **1.14x**. Approximate 210-character fold is a working preview target, not a fixed device-independent boundary. Maximum three hashtags, excess **0.85x**. Paragraphs target <=3 displayed lines, wall of text **0.80x**. Check mobile presentation rather than equating newline count with rendered lines.

## Facebook

| Signal | Policy weight |
| --- | ---: |
| Watch completion | 0.32 |
| Shares / Messenger sends | 0.28 |
| Meaningful comment threads | 0.18 |
| Saves | 0.10 |
| Reactions | 0.08 |
| Clicks | 0.04 |

Formats: Reel **1.30x** (20–90s), video **1.22x**, carousel **1.12x**, image **1.02x**, text **0.94x**, link post **0.58x**. Targets: three-second hold **65%**, completion **58%**, **0–3** hashtags. Bonuses: Messenger / group shareability **1.16x**, substantive multi-turn discussion prompt **1.15x**.

### Three-tier community distribution

- **Tier 1, marketplaces:** transparent rent/pricing, square footage, parking, pet terms, and accurate walkthroughs.
- **Tier 2, moderated community groups:** lead with a useful corridor insight or genuine local question. The handoff calls this “Trojan Horse”, but do not disguise a commercial relationship or manufacture community participation.
- **Tier 3, professional / chamber groups:** concrete operating context, local anchors, and evidence useful to the group.

Verify the group's existence, current rules, audience fit, and membership before distribution. Treat the **two-hour reply SLA** as a staffed community-service target, not a platform ranking coefficient. Track received/replied timestamps and exceptions. Do not reply to spam or unsafe content just to satisfy a percentage. Use the [SoCal entity clusters](../../ai-seo/references/platform-ranking-factors.md#meta-ai--social-search-entity-first-aeo) only for geographically relevant content.

## TikTok

| Signal | Policy weight |
| --- | ---: |
| Completion, 70% target | 0.30 |
| Rewatch / loop rate | 0.20 |
| Shares | 0.18 |
| Saves / favorites | 0.14 |
| Tri-Modal search alignment | 0.10 |
| Comments | 0.05 |
| Likes | 0.03 |

Core duration **15–55s**, deeper story **62–110s**. Three-second hold target **72%**, completion **70%**, **3–5** niche tags, no `#fyp` or `#viral`. Slow three-second opening: **0.58x**.

Tri-Modal SEO policy: use the same truthful target phrase in **spoken audio at 0–3s**, on-screen text, and caption when the format supports speech. Alignment bonus **1.20x**, coherent loop bridge **1.15x**. Do not invent speech to claim all three surfaces were covered. Treat the completion target as an internal test threshold, not a verified cohort-graduation rule or guaranteed traffic ladder.

## X / Twitter

| Signal | Policy weight |
| --- | ---: |
| Author-engaged replies | 0.30 |
| Replies | 0.22 |
| Bookmarks | 0.18 |
| Reposts / quotes | 0.14 |
| Two-minute dwell | 0.12 |
| Likes | 0.04 |

Formats: thread **1.30x**, native video **1.26x**, long form **1.22x**, link post **0.50x**. Target **0–1** hashtag, more than two **0.72x**. Hostility / block-risk flag **0.25x**. Constructive response within the first 30 minutes **1.22x** as an internal workflow preference.

The handoff's relative labels (author-engaged reply ~75x like, reply 13.5x, bookmark ~20x) are contextual assumptions, not additional multipliers to stack onto the weights or verified current production internals. Do not manufacture controversy or reply activity to chase them.

## YouTube

| Shorts signal | Policy weight |
| --- | ---: |
| Viewed versus swiped away, 76% target | 0.32 |
| Completion efficiency, 82% target | 0.28 |
| Viewer satisfaction | 0.18 |
| Rewatch loops | 0.12 |
| Shares | 0.06 |
| Subscribes | 0.04 |

Shorts working duration **18–35s**. Define completion efficiency against the actual supplied metric. Do not equate it to average percentage viewed or infer satisfaction from likes alone.

| Long-form signal | Policy weight |
| --- | ---: |
| Valued watch-time satisfaction | 0.32 |
| Average percentage viewed | 0.26 |
| Packaging CTR | 0.20 |
| Session continuation | 0.12 |
| Unspecified in supplied handoff | **0.10** |

Long-form duration **8–18 minutes**. Deliver the title / thumbnail promise in the first five seconds, **1.18x** editorial bonus. Keep unobservable satisfaction or session information Pending.

## Primary-source boundaries, checked November 17, 2026

- [Meta Trial Reels](https://about.fb.com/news/2024/12/trial-reels-try-content-non-followers-first-see-what-perfoms-best/) supports non-follower-first testing and approximate 24-hour metrics. The graduation thresholds here are custom policy.
- [LinkedIn Feed engineering, March 2026](https://www.linkedin.com/blog/engineering/feed/engineering-the-next-generation-of-linkedins-feed) supports semantic retrieval and sequential ranking. It does not validate these weights.
- [LinkedIn's 360Brew clarification](https://www.linkedin.com/posts/timjurka_updates-to-the-linkedin-feed-focusing-on-activity-7449929754679545857-HyFG) states that its 360Brew experiment is not the current Feed ranking system.
- For a platform limit, metric API, eligibility rule, or legal statement not verified here, check the relevant current primary documentation before asserting it as fact.
