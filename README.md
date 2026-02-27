# RBT Exam Prep — Vidéo Promo (Remotion)

Vidéo promotionnelle 15 secondes au format vertical (1080x1920) pour TikTok/Reels/Shorts.

## Pré-requis

- **Node.js 18+** (tu as déjà v22)
- **macOS 13+ (Ventura ou supérieur)** — Remotion v4 utilise un ffmpeg qui nécessite des APIs AVFoundation récentes. **macOS Monterey ne fonctionne PAS.**

## Comment render la vidéo sur ton MacBook Pro

### Option A : Si ton MacBook Pro a macOS Ventura+ (13+)

```bash
# 1. Clone ou copie le projet
cd /chemin/vers/rbt-promo-video

# 2. Installe les dépendances
npm install

# 3. Preview dans le navigateur (optionnel — pour voir/modifier la vidéo)
npm run studio
# Ouvre http://localhost:3000 dans Chrome

# 4. Render la vidéo MP4
npm run render
# → Produit out/promo.mp4 (15 secondes, 1080x1920, H.264)
```

### Option B : Si ton MacBook Pro est aussi sur Monterey

```bash
# 1. Installe ffmpeg via Homebrew (si pas déjà fait)
brew install ffmpeg

# 2. Lance le studio Remotion pour preview
npm run studio

# 3. Render les frames individuellement (contourne le bug ffmpeg)
node render-frames.mjs
# → Produit out/frames/frame-0000.jpeg, frame-0003.jpeg, etc.

# 4. Assemble avec le ffmpeg système
ffmpeg -framerate 10 -pattern_type glob -i 'out/frames/frame-*.jpeg' \
  -c:v libx264 -r 30 -pix_fmt yuv420p -vf "scale=1080:1920" \
  out/promo.mp4
```

### Option C : Render dans VS Code avec Remotion Extension

1. Ouvre le dossier dans VS Code
2. Installe l'extension "Remotion" depuis le marketplace
3. Ouvre `src/PromoVideo.tsx`
4. L'extension te permet de preview et render directement

## Structure de la vidéo

| Timing | Slide | Contenu |
|--------|-------|---------|
| 0-4s | Hook | "Taking the RBT Exam? Study smarter, not harder." |
| 4-8s | Stats | 154 Flashcards, 300+ Questions, 85-Q Exam Sim, Progress Tracking |
| 8-12s | Features | 5th Ed Task List, Offline, No account, No ads, No subscription |
| 12-15s | CTA | "$4.99 one-time · Try Free for 24h" |

## Modifier la vidéo

Édite `src/PromoVideo.tsx`. Chaque slide est un composant React. Tu peux :
- Changer les textes
- Modifier les couleurs (constantes `COLORS` en haut)
- Ajuster les timings (les `Sequence` dans `PromoVideo`)
- Ajouter des slides (créer un nouveau composant + une `Sequence`)

## Fichiers

```
src/
  index.ts          → Point d'entrée Remotion
  Root.tsx           → Configuration de la composition (taille, durée, fps)
  PromoVideo.tsx     → La vidéo elle-même (4 slides animées)
render-frames.mjs    → Script de fallback pour render frame par frame
package.json         → Scripts npm (studio, render)
```
