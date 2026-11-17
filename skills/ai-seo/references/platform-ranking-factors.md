# How Each AI Platform Picks Sources

Each AI search platform has its own search index, ranking logic, and content preferences. This guide covers what matters for getting cited on each one.

Sources cited throughout: Princeton GEO study (KDD 2024), SE Ranking domain authority study, ZipTie content-answer fit analysis.

---

## The Fundamentals

Every AI platform shares three baseline requirements:

1. **Your content must be in their index** — Each platform uses a different search backend (Google, Bing, Brave, or their own). If you're not indexed, you can't be cited.
2. **Your content must be crawlable** — AI bots need access via robots.txt. Block the bot, lose the citation.
3. **Your content must be extractable** — AI systems pull passages, not pages. Clear structure and self-contained paragraphs win.

Beyond these basics, each platform weights different signals. Here's what matters and where.

---

## Google AI Overviews

Google AI Overviews pull from Google's own index and lean heavily on E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness). They appear in roughly 45% of Google searches.

**What makes Google AI Overviews different:** They already have your traditional SEO signals — backlinks, page authority, topical relevance. The additional AI layer adds a preference for content with cited sources and structured data. Research shows that including authoritative citations in your content correlates with a 132% visibility boost, and writing with an authoritative (not salesy) tone adds another 89%.

**Importantly, AI Overviews don't just recycle the traditional Top 10.** Only about 15% of AI Overview sources overlap with conventional organic results. Pages that wouldn't crack page 1 in traditional search can still get cited if they have strong structured data and clear, extractable answers.

**What to focus on:**
- Use structured data that accurately describes visible content. Do not promise a fixed visibility boost. Google requires no special schema for AI features; see the current primary-source boundaries below.
- Build topical authority through content clusters with strong internal linking
- Include named, sourced citations in your content (not just claims)
- Author bios with real credentials matter — E-E-A-T is weighted heavily
- Get into Google's Knowledge Graph where possible (an accurate Wikipedia entry helps)
- Target "how to" and "what is" query patterns — these trigger AI Overviews most often

**Watch for OKF.** In June 2026 Google introduced the [Open Knowledge Format](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing) — a markdown spec for agent-readable site bundles. There is no confirmed signal that AI Overviews factor it in today, but the spec is published, the GitHub repo lives under `GoogleCloudPlatform`, and it ships inside Knowledge Catalog. For protocol-layer "register early" plays, it has the same shape as early schema.org adoption did a decade ago. See **Machine-Readable Files for AI Agents** in the main `SKILL.md` for how to generate and serve a bundle.

---

## ChatGPT

ChatGPT's web search draws from a Bing-based index. It combines this with its training knowledge to generate answers, then cites the web sources it relied on.

**What makes ChatGPT different:** Domain authority matters more here than on other AI platforms. An SE Ranking analysis of 129,000 domains found that authority and credibility signals account for roughly 40% of what determines citation, with content quality at about 35% and platform trust at 25%. Sites with very high referring domain counts (350K+) average 8.4 citations per response, while sites with slightly lower trust scores (91-96 vs 97-100) drop from 8.4 to 6 citations.

**Freshness is a major differentiator.** Content updated within the last 30 days gets cited about 3.2x more often than older content. ChatGPT clearly favors recent information.

**The most important signal is content-answer fit** — a ZipTie analysis of 400,000 pages found that how well your content's style and structure matches ChatGPT's own response format accounts for about 55% of citation likelihood. This is far more important than domain authority (12%) or on-page structure (14%) alone. Write the way ChatGPT would answer the question, and you're more likely to be the source it cites.

**Where ChatGPT looks beyond your site:** Wikipedia accounts for 7.8% of all ChatGPT citations, Reddit for 1.8%, and Forbes for 1.1%. Brand official sites are cited frequently but third-party mentions carry significant weight.

**What to focus on:**
- Invest in backlinks and domain authority — it's the strongest baseline signal
- Update competitive content at least monthly
- Structure your content the way ChatGPT structures its answers (conversational, direct, well-organized)
- Include verifiable statistics with named sources
- Clean heading hierarchy (H1 > H2 > H3) with descriptive headings

---

## Perplexity

Perplexity always cites its sources with clickable links, making it the most transparent AI search platform. It combines its own index with Google's and runs results through multiple reranking passes — initial relevance retrieval, then traditional ranking factor scoring, then ML-based quality evaluation that can discard entire result sets if they don't meet quality thresholds.

**What makes Perplexity different:** It's the most "research-oriented" AI search engine, and its citation behavior reflects that. Perplexity maintains curated lists of authoritative domains (Amazon, GitHub, major academic sites) that get inherent ranking boosts. It uses a time-decay algorithm that evaluates new content quickly, giving fresh publishers a real shot at citation.

**Perplexity has unique content preferences:**
- **FAQ content** — Clear, self-contained answers can be evaluated for usefulness. FAQ markup alone does not establish a citation lift.
- **PDF documents** — Publicly accessible PDFs (whitepapers, research reports) are prioritized. If you have authoritative PDF content gated behind a form, consider making a version public.
- **Publishing velocity** — How frequently you publish matters more than keyword targeting
- **Self-contained paragraphs** — Perplexity prefers atomic, semantically complete paragraphs it can extract cleanly

**What to focus on:**
- Allow PerplexityBot in robots.txt
- Use FAQPage only for matching visible questions and answers, with the eligibility and no-guarantee limits below.
- Host PDF resources publicly (whitepapers, guides, reports)
- Add Article schema with publication and modification timestamps
- Write in clear, self-contained paragraphs that work as standalone answers
- Build deep topical authority in your specific niche

---

## Microsoft Copilot

Copilot is embedded across Microsoft's ecosystem — Edge, Windows, Microsoft 365, and Bing Search. It relies entirely on Bing's index, so if Bing hasn't indexed your content, Copilot can't cite it.

**What makes Copilot different:** The Microsoft ecosystem connection creates unique optimization opportunities. Mentions and content on LinkedIn and GitHub provide ranking boosts that other platforms don't offer. Copilot also puts more weight on page speed — sub-2-second load times are a clear threshold.

**What to focus on:**
- Submit your site to Bing Webmaster Tools (many sites only submit to Google Search Console)
- Use IndexNow protocol for faster indexing of new and updated content
- Optimize page speed to under 2 seconds
- Write clear entity definitions — when your content defines a term or concept, make the definition explicit and extractable
- Build presence on LinkedIn (publish articles, maintain company page) and GitHub if relevant
- Ensure Bingbot has full crawl access

---

## Claude

Claude uses Brave Search as its search backend when web search is enabled — not Google, not Bing. This is a completely different index, which means your Brave Search visibility directly determines whether Claude can find and cite you.

**What makes Claude different:** Claude is extremely selective about what it cites. While it processes enormous amounts of content, its citation rate is very low — it's looking for the most factually accurate, well-sourced content on a given topic. Data-rich content with specific numbers and clear attribution performs significantly better than general-purpose content.

**What to focus on:**
- Verify your content appears in Brave Search results (search for your brand and key terms at search.brave.com)
- Allow ClaudeBot and anthropic-ai user agents in robots.txt
- Maximize factual density — specific numbers, named sources, dated statistics
- Use clear, extractable structure with descriptive headings
- Cite authoritative sources within your content
- Aim to be the most factually accurate source on your topic — Claude rewards precision

---

## Meta AI & Social Search (Entity-First AEO)

**Scope:** the Coastline Equity v2.1 handoff's local content policy, dated November 17, 2026. Entity clarity is a useful editorial and retrieval hypothesis. It is not proof that Meta indexes every caption, private group, audio track, OCR surface, or comment, and it does not guarantee citations in Meta AI, Google AI Overviews, or Perplexity.

For a local market, leasing, or vacancy post, select **one relevant micro-neighborhood + a genuinely relevant anchor landmark + verified numeric or amenity details**. Describe their relationship accurately. A landmark name alone does not establish proximity, travel time, school eligibility, or an affiliation. Do not append all clusters as a keyword list.

### Coastline territory clusters

These are internal campaign groupings, not an authoritative geographical taxonomy. In particular, Carlsbad is in San Diego County and West Covina is in the San Gabriel Valley. Keep those real locations clear when using the handoff's broader “Inland Empire Commercial” campaign label.

| Campaign cluster | Candidate neighborhood / corridor entities | Candidate anchor entities | Candidate Facebook groups to verify before use |
| --- | --- | --- | --- |
| Westside | Santa Monica, Sunset Park, West Hollywood, Robertson Blvd, Main Street, Ocean Park | Cedars-Sinai, Santa Monica College (SMC), Melrose, Beverly Center | Santa Monica Community; West Hollywood Rentals; Cedars-Sinai Housing; Travel Nurse Housing - Los Angeles |
| South Bay & Harbor | San Pedro, Vista Del Oro, Redondo Beach, Riviera Village, Torrance, Long Beach, Wilmington, Palos Verdes, Gardena | Fort MacArthur, Port of Los Angeles, Los Angeles Air Force Base, Boys & Girls Club, Alta Vista, 405 / 110 Freeway | South Bay Parents; Redondo Beach Community; San Pedro CA Community; Los Angeles Air Force Base Housing |
| Inland Empire Commercial and adjacent campaign territories | Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Rancho Cucamonga, Carlsbad, West Covina, Foothill Blvd | Murrieta Innovation Center, Murrieta Hot Springs, I-15 Corridor, Victoria Gateway, Turnkey Clinic, 3PL / Logistics Hub | Murrieta/Wildomar Chamber of Commerce; Temecula Valley Entrepreneurs; Inland Empire Commercial Real Estate |

Verify the actual landmark or business behind a candidate such as “Turnkey Clinic”, “Victoria Gateway”, or “3PL / Logistics Hub”. Generic descriptors are not established place entities. Resolve an exact site before claiming distance or adjacency.

### High-intent attributes and evidence

Useful attributes, when true: `Walk Score [N]`, `Bike Score [N]`, `[N] sq ft`, in-unit laundry, subterranean/gated parking, detached ADU, pet-friendly, turnkey, medical office, cold storage, conference facility, 24-hour access.

- Verify scores with source and date. Verify dimensions, access, parking, pet terms, permitted use, and current availability against the property record. Do not infer them from neighboring listings or images.
- State transparent rent/pricing and the relevant square footage, parking, and pet terms in a leasing post. Missing required facts means an incomplete draft, not permission to invent them or replace price with “DM for price”.
- Keep location and property facts consistent across caption, spoken audio, on-screen text, and canonical page. Do not represent a drafted transcript as recorded speech.
- Use commercial/portfolio context only where supported by the actual asset or audience. Entity relevance is more important than keyword count.

### Three-tier Facebook group distribution

1. **Tier 1, marketplaces:** clear property facts, transparent pricing, accurate photos or walkthroughs, and a legitimate next step.
2. **Tier 2, community groups:** a useful corridor or market observation and a genuine question. Do not disguise commercial intent, fabricate local participation, or post raw listing spam. The handoff's “Trojan Horse” label is not permission for deception.
3. **Tier 3, chamber / professional groups:** operational relevance, local evidence, and practitioner discussion.

Group names above are supplied candidates, not verified current groups or posting authorization. Check existence, membership, rules, and fit before posting. The **two-hour comment reply SLA** is an internal service target requiring staffing and actual timestamps. It is not a proven ranking guarantee. Log missed targets and moderation exceptions honestly.

### Canonical page and social connection

For the requested five-asset operational bundle, prepare an **eight-section canonical page** with an opening answer of **no more than 60 words**, plus **eight self-contained Q&A entries of 40–60 words each**. This is the user's publishing format, not a search engine requirement. Preserve the same sourced story, metric definition, place, and date across assets.

Generate valid `Article` and `FAQPage` JSON-LD only from the final visible content. The FAQ questions and answers must match the page. Validate JSON syntax and schema properties, and retain author/date/source provenance. Schema is not a substitute for accuracy or a promise of indexing.

Google's official May 2026 update says FAQ rich results stopped appearing on **May 7, 2026**. `FAQPage` may still describe the content semantically, but do not promise Google FAQ rich-result eligibility or a citation boost. Google's AI-features guidance also says no special schema is required for AI Overviews / AI Mode and that indexing or serving is not guaranteed.

### Primary sources checked November 17, 2026

- [Google Search documentation updates](https://developers.google.com/search/updates): FAQ rich-results retirement, May 2026.
- [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): ordinary search eligibility, no special AI schema, no guaranteed indexing or serving.
- [Social AVS policy](../../social/references/platforms.md): exact user-supplied platform targets, measurement limits, and Trial Reel SOP. These are separate from verified search-engine behavior.

---

## Allowing AI Bots in robots.txt

If your robots.txt blocks an AI bot, that platform can't cite your content. Here are the user agents to allow:

```
User-agent: GPTBot           # OpenAI — powers ChatGPT search
User-agent: ChatGPT-User     # ChatGPT browsing mode
User-agent: PerplexityBot    # Perplexity AI search
User-agent: ClaudeBot        # Anthropic Claude
User-agent: anthropic-ai     # Anthropic Claude (alternate)
User-agent: Google-Extended   # Google Gemini and AI Overviews
User-agent: Bingbot          # Microsoft Copilot (via Bing)
Allow: /
```

**Training vs. search:** Some AI bots are used for both model training and search citation. If you want to be cited but don't want your content used for training, your options are limited — GPTBot handles both for OpenAI. However, you can safely block **CCBot** (Common Crawl) without affecting any AI search citations, since it's only used for training dataset collection.

---

## Where to Start

If you're optimizing for AI search for the first time, focus your effort where your audience actually is:

**Start with Google AI Overviews** — They reach the most users (45%+ of Google searches) and you likely already have Google SEO foundations in place. Add schema markup, include cited sources in your content, and strengthen E-E-A-T signals.

**Then address ChatGPT** — It's the most-used standalone AI search tool for tech and business audiences. Focus on freshness (update content monthly), domain authority, and matching your content structure to how ChatGPT formats its responses.

**Then evaluate Perplexity and social search for the audience** — Write sourced, self-contained answers and relevant entity details across native assets. Treat citation and discovery effects as hypotheses to measure, not guaranteed consequences of schema or keyword density.

**Copilot and Claude are lower priority** unless your audience skews enterprise/Microsoft (Copilot) or developer/analyst (Claude). But the fundamentals — structured content, cited sources, schema markup — help across all platforms.

**Actions that help everywhere:**
1. Allow all AI bots in robots.txt
2. Use valid structured data appropriate to the visible content, without assuming a universal minimum set or search appearance guarantee
3. Include statistics with named sources in your content
4. Update content regularly — monthly for competitive topics
5. Use clear heading structure (H1 > H2 > H3) with a 60-word direct answer snippet
6. Keep page load time under 2 seconds
7. Add author bios with credentials
