# 🚀 Guide Complet : Builder, Lancer et Vendre une Micro-App

*Playbook reproductible basé sur l'expérience RBT Exam Prep*

---

## Vue d'ensemble

Ce guide couvre le process complet de A à Z pour créer et vendre des micro-applications (PWA) à petit prix ($5-$20) avec un investissement quasi nul.

**Le modèle :**
- Trouver une niche avec un besoin clair
- Builder une app minimaliste en 1-2 jours
- La vendre via un paywall client-side + Stripe
- Acquérir des clients via SEO/GEO + posts communautaires
- Héberger gratuitement (GitHub Pages)
- Profit = 95%+ de marge (pas de serveur, pas d'infra)

---

## Phase 1 : Trouver l'Idée (1-2 heures)

### La formule magique

**Certification/Exam + Study App = 💰**

Les gens qui passent un examen :
- Ont un **besoin urgent** (date fixe)
- Sont **motivés à payer** (petit prix vs. coût de l'échec)
- Cherchent **activement** des solutions (SEO parfait)
- Ont un **cycle court** (besoin de l'app 2-4 semaines)

### Où trouver des niches

1. **Certifications professionnelles** — RBT, CNA, NASM, PMP, CompTIA, Real Estate, etc.
2. **Examens académiques** — SAT, GRE, MCAT, bar exam, etc.
3. **Certifications techniques** — AWS, Google Cloud, Kubernetes, etc.
4. **Langues** — TOEFL, IELTS, DELF, etc.

### Comment valider une niche en 15 minutes

1. **Google "X exam prep app"** — regarde les résultats
   - S'il y a des apps à $10-40+/mois → il y a de la demande ET de la marge pour faire moins cher
   - S'il n'y a rien → soit pas de demande, soit opportunité vide

2. **Reddit/Facebook** — cherche "X exam study tips"
   - Des gens demandent de l'aide ? → ✅ Demande confirmée
   - Quels sont les reproches sur les apps existantes ?

3. **Google Trends** — vérifie que le volume de recherche est stable ou en croissance

4. **Calcul rapide** :
   - Volume de recherche mensuel estimé × 2% conversion × prix = revenus
   - Exemple : 10,000 recherches/mois × 2% × $5 = $1,000/mois potentiel

### Red flags (éviter)

- ❌ Niche trop petite (< 1,000 recherches/mois)
- ❌ Concurrence gratuite et de qualité (ex: Khan Academy pour le SAT)
- ❌ Contenu qui change constamment (ex: lois qui changent chaque mois)
- ❌ Audience qui ne paye pas (ex: lycéens vs. professionnels)

---

## Phase 2 : Builder l'App (1-2 jours)

### Stack recommandée

```
React + TypeScript + Vite + TailwindCSS + vite-plugin-pwa
```

**Pourquoi cette stack :**
- Rapide à développer
- PWA = installable sur mobile sans App Store
- Offline capable (Service Worker)
- Gratuit à héberger (fichiers statiques)
- Pas de backend nécessaire

### Les 4 features essentielles

1. **Flashcards** — Le cœur de l'app
   - Recto/verso, swipe ou tap pour tourner
   - Status par carte : "Know it" / "Learning" / "Need review"
   - Filtrage par catégorie

2. **Quiz Mode** — Questions à choix multiples
   - 10-20 questions par quiz
   - Feedback immédiat + explication détaillée
   - Score à la fin

3. **Exam Simulator** — Simule l'examen réel
   - Même nombre de questions que le vrai examen
   - Timer
   - Score + analyse par section

4. **Dashboard** — Suivi de progression
   - Stats flashcards (combien learned/learning/review)
   - Historique des quiz et exam scores
   - Visualisation des points faibles

### Architecture des données

```typescript
// types.ts
interface Flashcard {
  id: string;
  category: string;
  taskCode: string;
  term: string;
  definition: string;
}

interface Question {
  id: string;
  category: string;
  taskCode: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
```

**Tout est dans des fichiers .ts** — pas de base de données, pas d'API. Les données sont bundlées dans l'app.

### Stockage local

```typescript
// Progression sauvée en localStorage
localStorage.setItem('flashcard_statuses', JSON.stringify(statuses));
localStorage.setItem('quiz_history', JSON.stringify(history));
```

**Avantage** : Pas de backend, pas de compte utilisateur, pas de RGPD compliqué.

### PWA Setup

```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Your App Name',
    short_name: 'App',
    display: 'standalone',
    // ...
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,svg}'],
  },
})
```

### Le contenu (le plus important)

**Options pour créer le contenu :**

1. **IA + Validation humaine** (recommandé)
   - Utilise Claude/GPT pour générer flashcards et questions
   - Fais valider par un expert du domaine
   - Fais un audit de contenu automatisé

2. **Sources officielles**
   - Task lists, syllabi, study guides officiels
   - Documents publics (pas de copyright)

3. **Compilation de sources**
   - Relis les manuels de référence du domaine
   - Synthétise en flashcards et questions

⚠️ **CRUCIAL** : Le contenu doit être **100% exact**. Une seule erreur = review 1 étoile = mort de l'app. Fais un audit complet avant de lancer.

---

## Phase 3 : Monétisation — Paywall + Stripe (1 jour)

### Le modèle : Free Trial → One-Time Payment

```
Jour 1-X : Accès complet gratuit (trial)
Après le trial : Contenu verrouillé → Payer $4.99-$9.99 pour débloquer
```

**Pourquoi one-time et pas abonnement :**
- Les gens ont besoin de l'app 2-4 semaines → un abo mensuel les fait fuir
- $4.99 one-time = achat impulsif, pas de friction
- "Pas d'abonnement" est un argument de vente majeur vs. la concurrence

### Paywall côté client (simple)

```typescript
// hooks/usePaywall.ts
const TRIAL_HOURS = 24;

export function usePaywall() {
  const trialStart = localStorage.getItem('trial_start');
  const isPaid = localStorage.getItem('is_paid') === 'true';
  
  const isTrialActive = trialStart && 
    (Date.now() - Number(trialStart)) < TRIAL_HOURS * 60 * 60 * 1000;
  
  const isExpired = trialStart && !isTrialActive && !isPaid;
  
  const unlock = () => {
    // Redirect to Stripe Checkout
    window.location.href = 'https://checkout.stripe.com/pay/your_link';
  };
  
  return { isPaid, isTrialActive, isExpired, unlock };
}
```

### Stripe Setup

**1. Créer un compte Stripe** → https://stripe.com

**2. Créer un Payment Link**
   - Dashboard Stripe → Payment Links → New
   - Product : "App Name — Lifetime Access"
   - Prix : $4.99 (one-time)
   - After payment : redirect vers `https://yoursite.com/app/?paid=true`

**3. Gérer le succès du paiement**
```typescript
// Dans App.tsx, au chargement
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('paid') === 'true') {
    localStorage.setItem('is_paid', 'true');
    // Nettoyer l'URL
    window.history.replaceState({}, '', window.location.pathname);
  }
}, []);
```

**4. Sécurité**
- Oui, c'est contournable (F12 → localStorage). C'est ok pour un produit à $5.
- Ceux qui contournent n'auraient jamais payé
- Pour $5, la friction d'ouvrir la console suffit à dissuader 99% des gens
- Si tu veux plus de sécurité → Stripe Webhooks + vérification serveur (mais ça nécessite un backend)

### Alternative : Stripe Checkout Session (plus robuste)

```typescript
// Si tu veux une vérification plus solide :
// 1. Crée un Stripe Checkout Session via l'API
// 2. Le success_url contient un token unique
// 3. L'app vérifie le token via l'API Stripe
// → Nécessite un petit backend (Netlify Functions, Cloudflare Workers, etc.)
```

---

## Phase 4 : Landing Page + SEO (1 jour)

### Landing Page

Une seule page HTML statique avec :
1. **Hero** — Titre accrocheur + CTA
2. **Stats** — Chiffres impressionnants (X flashcards, Y questions)
3. **Features** — 6 features avec icônes
4. **How it works** — 4 étapes simples
5. **Testimonials** — 3 témoignages (vrais dès que possible)
6. **Pricing** — Un seul prix, simple
7. **FAQ** — 5-6 questions courantes
8. **CTA final** — Rappel + bouton

### Blog SEO

**Articles prioritaires (par ordre d'impact) :**

1. **"Free [Exam] Practice Questions"** — Le #1 aimant à trafic
2. **"How to Pass [Exam] on Your First Try"** — Guide complet
3. **"[Exam] Study Schedule (Free Template)"** — Actionable
4. **"[Certification] vs [Other]: Salary & Career"** — Long tail
5. **"[Exam] Tips You Need Before Test Day"** — Exam day content
6. **"[Subject] Glossary: 100+ Terms"** — Référence (excellent pour GEO)

**Format de chaque article :**
- 1,500-3,000 mots
- Table of contents
- Schema.org markup (Article + FAQPage)
- CTA vers l'app toutes les 800 mots
- Internal linking vers les autres articles
- Meta description optimisée
- Canonical URL

### GEO (Generative Engine Optimization)

Pour être cité par ChatGPT, Perplexity, etc. :

1. **Répondre directement aux questions** — Format Q&A clair
2. **Stats précises et citables** — "The RBT exam has 85 questions and a 90-minute time limit"
3. **Définitions claires** — Les IA adorent les définitions structurées
4. **Schema markup** — FAQPage, HowTo, DefinedTermSet
5. **Exhaustivité** — Couvrir un sujet à fond (les IA préfèrent les sources complètes)
6. **Ton autoritaire** — Écrire comme une source de référence, pas un blog casual

### SEO Technique

```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... -->
</urlset>
```

```
# robots.txt
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

→ Soumettre le sitemap sur Google Search Console

---

## Phase 5 : Distribution & Acquisition (ongoing)

### Semaine 1 : Posts communautaires (gratuit)

**Reddit :**
- Poste dans les subreddits pertinents
- Ton : helpful, pas spammy → "I built a free tool..."
- Inclure du contenu gratuit (liens blog) en plus du lien app
- Répondre aux posts existants avec des conseils + lien subtil

**Facebook Groups :**
- Rejoindre 3-5 groupes actifs
- Poster des ressources gratuites (articles)
- Répondre aux questions avec expertise + mention de l'app

**Forum posts template :**
```
Hey everyone 👋

I was helping someone study for [exam] and built a simple web app:
- [X] flashcards covering the entire [task list/syllabus]
- [Y]+ practice questions with explanations
- Full exam simulator with timer
- Works offline, no account needed

Free to try for 24h, then $X.XX one-time. No subscription.

[Link]

Would love feedback! What topics do you wish had more coverage?
```

### Semaine 2-4 : Content marketing

- Publier 2-3 articles/semaine
- Partager chaque article sur Reddit/Facebook
- Commenter sur les posts pertinents avec des liens

### Mois 2+ : Channels avancés

- **YouTube Shorts / TikTok** — "3 [exam] questions most people get wrong"
- **Pinterest** — Infographies (study schedules, cheat sheets)
- **Quora** — Répondre aux questions avec expertise
- **Custom domain** — Meilleur pour le SEO long terme
- **Google Ads** — Si le ROI est prouvé ($5 CPA cible)

---

## Phase 6 : Optimisation & Scale

### Analytics (gratuit)

- **Plausible.io** (gratuit self-hosted) ou **Umami** — Pas de cookies, RGPD compliant
- **Stripe Dashboard** — Revenus, conversion, géographie des clients

### A/B Testing simple

```javascript
// Test deux prix
const price = Math.random() > 0.5 ? '4.99' : '6.99';
localStorage.setItem('price_test', price);
```

### Upsell / Cross-sell

Une fois que l'app marche :
1. **Bundle** — "Get [Other Exam App] for 50% off"
2. **Flashcard decks supplémentaires** — $2.99 chacun
3. **Coaching** — $29 pour une session de study planning
4. **Affiliate** — Recommander des manuels Amazon (commission)

### Reproduire le modèle

**Chaque nouvelle app = ~2 jours de travail :**
- Jour 1 : Générer le contenu + setup le projet (fork du template)
- Jour 2 : Landing page + blog + deploy

**Template réutilisable :**
- Fork le repo RBT Exam Prep
- Changer le contenu (flashcards.ts + questions.ts)
- Changer le branding (couleurs, textes)
- Deploy sur GitHub Pages
- Nouveau Stripe Payment Link

**Niches à explorer :**
| Certification | Recherches/mois | Competition | Difficulté |
|---|---|---|---|
| CNA (Nursing Assistant) | ~30K | Moyenne | Facile |
| NASM CPT (Personal Trainer) | ~20K | Faible | Facile |
| Real Estate Exam | ~50K | Haute | Moyen |
| CompTIA A+ | ~40K | Haute | Moyen |
| PMP (Project Management) | ~30K | Haute | Moyen |
| AWS Solutions Architect | ~25K | Haute | Dur |
| TOEFL | ~100K | Très haute | Dur |

---

## Checklist de Lancement

### Avant le launch
- [ ] Contenu audité (0 erreur)
- [ ] App buildée et testée sur mobile
- [ ] PWA installable + offline
- [ ] Paywall fonctionnel
- [ ] Stripe Payment Link créé et testé
- [ ] Landing page live
- [ ] Blog : minimum 3 articles
- [ ] sitemap.xml + robots.txt
- [ ] Google Search Console configuré

### Jour du launch
- [ ] Post Reddit (subreddit principal)
- [ ] Post Facebook (2-3 groupes)
- [ ] Soumettre sitemap à Google

### Semaine 1
- [ ] Répondre aux commentaires
- [ ] Publier 2 articles supplémentaires
- [ ] Post sur un 2ème subreddit
- [ ] Vérifier les premières analytics

### Mois 1
- [ ] 10+ articles publiés
- [ ] Premiers revenus ?
- [ ] Ajuster le prix si nécessaire
- [ ] Identifier la prochaine niche

---

## Économie du Modèle

### Coûts
| Élément | Coût |
|---|---|
| Hébergement (GitHub Pages) | $0 |
| Domaine custom (optionnel) | $12/an |
| Stripe | 2.9% + $0.30 par transaction |
| Développement | Ton temps |
| Contenu | IA + validation |

### Revenus (scénario conservateur)
| Métrique | Valeur |
|---|---|
| Trafic blog | 5,000 visites/mois |
| Conversion blog → app | 5% |
| Conversion trial → paid | 15% |
| Prix | $4.99 |
| **Revenus mensuels** | **~$187/mois** |

### Revenus (scénario optimiste avec 3 apps)
| Métrique | Valeur |
|---|---|
| Trafic total | 20,000 visites/mois |
| Conversion globale | ~1% |
| Prix moyen | $5.99 |
| **Revenus mensuels** | **~$1,200/mois** |

### Le vrai leverage
- Chaque article SEO travaille pour toi 24/7
- Chaque app est une machine à cash autonome
- Le coût marginal d'une nouvelle app est quasi nul (fork + nouveau contenu)
- Pas de support client (pas de comptes = pas de "j'ai oublié mon mot de passe")

---

## Résumé en 1 minute

1. **Trouve** une certification avec des gens qui cherchent de l'aide
2. **Builde** une PWA avec flashcards + quiz + exam sim (React + Vite)
3. **Monétise** avec Stripe ($5 one-time, free trial)
4. **Héberge** gratuitement sur GitHub Pages
5. **Acquiers** via articles SEO/GEO + posts Reddit/Facebook
6. **Reproduis** pour d'autres certifications

**Temps total pour la première app : ~4-5 jours**
**Temps pour les suivantes : ~2 jours**

Bon surf. 🏄
