# GEO/SEO Audit Report — RBT Exam Prep

**Site:** https://xavierkain.github.io/rbt-exam-prep/  
**Date:** 27 February 2026  
**Type:** Education / SaaS (PWA study app)

---

## Executive Summary

**GEO Score: 41/100** 🟡

The site has strong content foundations — well-written, topically relevant blog articles with clear structure and genuine expertise signals. However, it severely underperforms on technical GEO optimization: no structured data on the homepage, no `llms.txt`, no `robots.txt`, missing canonical URLs, no author entities, and zero brand authority signals across third-party platforms. The site is essentially invisible to AI search engines despite having content they'd love to cite.

---

## 1. AI Citability & Visibility — 12/25

### ✅ Strengths
- **Clear, factual passages** — Blog articles contain specific data points (pass rate ~80%, 85 questions, 68% cut score, $50 fee) that AI engines love to cite
- **Well-structured Q&A sections** — FAQ blocks at the end of articles are perfect for AI extraction
- **Definitive statements** — "You need approximately 68% to pass" is exactly the kind of passage ChatGPT/Perplexity would quote

### ❌ Weaknesses
- **No `llms.txt` file** — 404. This is the #1 GEO signal for AI crawlers to understand your site
- **No `robots.txt`** — 404. Cannot explicitly allow/deny AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- **No canonical URLs** — No `<link rel="canonical">` found on any page
- **OG URL mismatch** — Homepage og:url points to `rbt-exam-prep-site.netlify.app` instead of the actual GitHub Pages URL
- **Blog index is empty** — The `/blog/` page returns almost no readable content (just a subtitle). AI crawlers can't discover articles from it
- **Broken sitemap URL** — `rbt-task-list-5th-edition` returns 404

### 🎯 Priority Actions
1. Create `robots.txt` allowing all AI bots + linking to sitemap
2. Create `llms.txt` with site description, key pages, and content summary
3. Fix canonical URLs on all pages
4. Fix og:url to match actual domain
5. Add article links/summaries to blog index page
6. Remove broken URL from sitemap

---

## 2. Brand Authority Signals — 5/20

### ✅ Strengths
- References BACB (authoritative entity in the field)
- Mentions established textbook (Cooper, Heron & Heward)
- Product has clear differentiator ($4.99 lifetime vs $40 study guides)

### ❌ Weaknesses
- **Zero third-party brand mentions** — No Reddit threads, YouTube reviews, LinkedIn posts, or forum discussions found
- **No author entity** — "RBT Exam Prep" as organization author has no web presence, no LinkedIn, no credentials page
- **No Wikipedia/Wikidata entity** — Not expected at this stage, but no effort toward entity establishment
- **No social proof beyond testimonials** — Testimonials on homepage but no verifiable names (one is anonymous)
- **No backlinks from ABA community sites**

### 🎯 Priority Actions
1. Create author/about page with real credentials (BCBA credentials if applicable)
2. Post helpful content on Reddit r/ABA, r/behavioranalysis with natural brand mentions
3. Create YouTube shorts with RBT study tips linking back to the app
4. Build a LinkedIn presence for the brand
5. Get listed on ABA resource compilation pages

---

## 3. Content Quality & E-E-A-T — 14/20

### ✅ Strengths
- **Excellent content structure** — Clear H2/H3 hierarchy, bullet points, callout boxes
- **Genuinely useful content** — "50 Free RBT Practice Questions" article is a massive value piece (~25 min read, 50+ questions with explanations)
- **Actionable study strategy** — 4-week study plan is specific and practical
- **Good internal linking** — CTAs to the app are natural and non-spammy
- **Appropriate reading level** — Matches target audience (high school diploma holders)
- **Factual accuracy** — Exam details match official BACB information

### ❌ Weaknesses
- **No author byline with credentials** — Articles say "RBT Exam Prep" not a named expert
- **No "Experience" signal** — No first-person accounts, no "I've helped X candidates" language
- **Dates say "February 2025"** — Content may appear outdated to AI engines checking freshness
- **No original data** — No survey results, pass rate analysis, or proprietary insights
- **No external citations/links** — Only links to bacb.com; no references to studies or research

### 🎯 Priority Actions
1. Add named author with BCBA/BCaBA credentials and photo
2. Add "Last updated" dates and keep them current
3. Include original data (e.g., "Based on feedback from X users of our app")
4. Add external citations to BACB data, research papers
5. Write first-person experience sections

---

## 4. Technical Foundations — 9/15

### ✅ Strengths
- **HTTPS** ✅ — Served over HTTPS via GitHub Pages
- **Mobile responsive** — Viewport meta tag present, CSS uses clamp() and responsive units
- **Fast loading** — Static HTML on GitHub Pages CDN (Fastly), 19KB page size
- **PWA architecture** — App works offline, installable
- **Clean HTML** — Semantic markup with `<article>`, `<nav>`, proper heading hierarchy

### ❌ Weaknesses
- **No robots.txt** — 404
- **No canonical tags** — Missing on all pages
- **OG URL wrong domain** — Points to netlify.app instead of github.io
- **Sitemap has broken URL** — `rbt-task-list-5th-edition` → 404
- **Blog index not rendering content** — Readability extraction gets almost nothing; likely JS-dependent or empty HTML
- **No hreflang** — Not critical for English-only, but noted
- **Static HTML only** — Not SSR (it's pre-rendered, which is fine for SEO, but no dynamic meta tags)

### 🎯 Priority Actions
1. Add `robots.txt` with sitemap reference
2. Add `<link rel="canonical">` to every page
3. Fix og:url across all pages
4. Remove or create the missing blog post (`rbt-task-list-5th-edition`)
5. Ensure blog index renders article cards in HTML (not JS-only)

---

## 5. Structured Data — 3/10

### ✅ Present
- **Article schema on blog posts** — JSON-LD with `@type: Article`, headline, dates, author, publisher

### ❌ Missing
- **No schema on homepage** — No WebSite, SoftwareApplication, or Product schema
- **No FAQPage schema** — Homepage and blog posts have FAQ sections but no FAQPage markup (huge missed opportunity for rich results AND AI citation)
- **No BreadcrumbList schema**
- **No Organization schema** — Publisher is referenced but no standalone Organization entity
- **Blog Article schema is minimal** — No image, no wordCount, no articleSection, no mainEntityOfPage
- **No HowTo schema** — "How It Works" section and study strategy are perfect candidates
- **No Review/AggregateRating schema** — Testimonials exist but aren't marked up

### 🎯 Priority Actions
1. **Add FAQPage schema** to homepage and blog posts (immediate win for AI + Google)
2. Add WebSite + SoftwareApplication schema to homepage
3. Add Organization schema with logo, social profiles
4. Enrich Article schema (image, wordCount, articleSection, mainEntityOfPage)
5. Add HowTo schema to study strategy sections
6. Add AggregateRating schema for testimonials

---

## 6. Platform Optimization — 5/10

### Google AI Overviews (AIO) — 6/10
- ✅ Clear, concise factual passages suitable for extraction
- ✅ FAQ format aligns with AIO snippet patterns
- ❌ No FAQPage schema to signal structured Q&A
- ❌ No featured snippet optimization (missing summary tables in HTML `<table>`)

### ChatGPT / SearchGPT — 4/10
- ✅ Content is well-written and citable
- ❌ No `llms.txt` file
- ❌ No robots.txt to explicitly allow GPTBot
- ❌ No brand mentions on platforms ChatGPT trains on (Reddit, forums)

### Perplexity — 4/10
- ✅ Specific data points Perplexity can cite with source attribution
- ❌ No PerplexityBot allowed/disallowed in robots.txt
- ❌ No cross-platform authority signals
- ❌ Brand not discoverable via web search for "RBT exam prep app"

### 🎯 Priority Actions
1. Create `llms.txt` optimized for AI consumption
2. Allow all AI bots in `robots.txt`
3. Convert comparison tables to HTML `<table>` for better AIO extraction
4. Build Reddit/forum presence for Perplexity/ChatGPT discoverability

---

## GEO Score Breakdown

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| AI Citability & Visibility | 25% | 48/100 | 12.0 |
| Brand Authority Signals | 20% | 25/100 | 5.0 |
| Content Quality & E-E-A-T | 20% | 70/100 | 14.0 |
| Technical Foundations | 15% | 60/100 | 9.0 |
| Structured Data | 10% | 30/100 | 3.0 |
| Platform Optimization | 10% | 45/100 | 4.5 |
| **TOTAL** | **100%** | | **47.5 → 41*** |

*Score adjusted down due to critical missing files (robots.txt, llms.txt, canonical) that compound across categories.*

---

## Prioritized Action Plan

### 🔴 Critical (Week 1) — Impact: +15-20 points

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | Create `robots.txt` (allow all bots, link sitemap) | 5 min | High |
| 2 | Create `llms.txt` with site summary and key pages | 15 min | High |
| 3 | Add `<link rel="canonical">` to all pages | 10 min | High |
| 4 | Fix og:url from netlify.app → github.io on all pages | 10 min | Medium |
| 5 | Add FAQPage JSON-LD schema to homepage + blog posts | 30 min | Very High |
| 6 | Remove broken sitemap entry or create missing page | 5 min | Medium |

### 🟡 Important (Week 2-3) — Impact: +10-15 points

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 7 | Add WebSite + SoftwareApplication schema to homepage | 20 min | High |
| 8 | Add named author with credentials to all blog posts | 30 min | High |
| 9 | Create an About/Team page with E-E-A-T signals | 45 min | High |
| 10 | Enrich Article schema (image, wordCount, etc.) | 20 min | Medium |
| 11 | Fix blog index to render article cards in HTML | 30 min | Medium |
| 12 | Convert RBT vs BCBA comparison to HTML `<table>` | 15 min | Medium |

### 🟢 Growth (Month 1-2) — Impact: +10-15 points

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 13 | Post on Reddit r/ABA, r/behavioranalysis (3-5 helpful posts) | 2 hrs | High |
| 14 | Create 3-5 YouTube Shorts with RBT study tips | 3 hrs | High |
| 15 | Set up LinkedIn page for RBT Exam Prep | 30 min | Medium |
| 16 | Add original data points ("X users passed using our app") | 1 hr | Medium |
| 17 | Update all dates to 2026 | 10 min | Medium |
| 18 | Add external citations/references to blog posts | 30 min | Medium |
| 19 | Create the missing "RBT Task List 5th Edition" blog post | 2 hrs | Medium |
| 20 | Submit site to ABA resource directories | 1 hr | Medium |

---

## Quick Wins (Do Today)

```
# 1. Create robots.txt
User-agent: *
Allow: /

Sitemap: https://xavierkain.github.io/rbt-exam-prep/sitemap.xml

# 2. Create llms.txt
# RBT Exam Prep
> The #1 study app for the RBT certification exam.

## About
RBT Exam Prep is a Progressive Web App helping RBT candidates pass the 
Behavior Analyst Certification Board (BACB) exam. Features 154 flashcards, 
300+ practice questions, and a realistic 85-question exam simulator based 
on the RBT Task List (2nd Edition).

## Key Pages
- Homepage: https://xavierkain.github.io/rbt-exam-prep/
- App: https://xavierkain.github.io/rbt-exam-prep/app/
- Blog: https://xavierkain.github.io/rbt-exam-prep/blog/
- How to Pass the RBT Exam: https://xavierkain.github.io/rbt-exam-prep/blog/how-to-pass-rbt-exam
- 50 Free Practice Questions: https://xavierkain.github.io/rbt-exam-prep/blog/rbt-practice-questions-free
- RBT vs BCBA Guide: https://xavierkain.github.io/rbt-exam-prep/blog/rbt-vs-bcba

## Pricing
$4.99 one-time payment. 24-hour free trial. No subscription.
```

---

## Conclusion

The RBT Exam Prep site has a **strong content foundation** that is currently **underoptimized for AI discovery**. The blog articles are genuinely useful, well-structured, and contain the kind of specific, factual information that AI engines cite. But without robots.txt, llms.txt, proper schema markup, and brand authority signals, AI search engines either can't find the content or have no reason to trust it over competitors.

The good news: most fixes are quick (robots.txt, llms.txt, schema, canonical URLs). Implementing the Critical actions alone could push the GEO score from **41 to ~60** within a week. Building brand authority (Reddit, YouTube, author credentials) over the following month could bring it to **70+**.

**Estimated GEO Score after full implementation: 72-78/100**
