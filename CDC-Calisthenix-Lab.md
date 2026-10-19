# Cahier des Charges — Calisthenix-Lab

> **Site vitrine 100 % informatif — vulgarisation de la calisthénie**
> Version 1.0 — 19/09/2026 — Statut : Validable

---

## 1. Informations générales

| Champ                    | Valeur                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Nom du projet**        | **Calisthenix-Lab**                                                                                                   |
| **Nature**               | Site web vitrine / pédagogique — 100 % informatif                                                                     |
| **Objectif principal**   | Mettre en avant la calisthénie et présenter différentes façons de s'entraîner, en vulgarisant pour un public débutant |
| **Porteur**              | Calurion                                                                                                              |
| **Dossier de livraison** | `Documents\6.Opencode\Calisthenix-Lab`                                                                                |
| **Stack cible**          | HTML / CSS / JS vanilla — architecture simple, sans framework, sans build obligatoire                                 |
| **Hors-scope V1**        | Générateur de programmes (existant dans `calicoach`, non repris), espace membre, e-commerce, coaching                 |

---

## 2. Contexte & vision

### 2.1 Définition partagée

La **calisthénie** (du grec *kallos* = beauté, *sthenos* = force) désigne l'entraînement au **poids du corps**, sans ou avec peu de matériel. On la confond souvent avec le *street workout* (pratique urbaine, figures spectaculaires) et le *freestyle* (enchaînements créatifs). Calisthenix-Lab clarifie ces nuances sans jargon.

### 2.2 Problème adressé

- Idées reçues : "il faut une salle", "il faut déjà être musclé", "c'est dangereux".
- Offre existante dispersée (YouTube, apps payantes, programmes PDF) — manque une **porte d'entrée claire, neutre et progressive**.
- Besoin d'un site qui rassure, explique, et donne les **bases exécutées correctement** avant de parler figures.

### 2.3 Vision

> Devenir la **référence vulgarisée FR/EN** pour comprendre la calisthénie et démarrer proprement, avec une esthétique laboratoire ("Lab") : sobre, rigoureuse, accessible.

### 2.4 Positionnement

- **Pas un blog perso** : ton pédagogique, factuel, sourcé.
- **Pas une app** : pas de suivi, pas de compte.
- **Différenciation** : progression assumée Bases → Statique → Dynamique (là où la concurrence brûle les étapes).

---

## 3. Objectifs & indicateurs de succès

### 3.1 Objectifs V1

1. **Comprendre** : le visiteur sait définir calisthénie vs street workout en 2 minutes.
2. **Se projeter** : il identifie la méthode qui lui correspond (sans générateur, via lecture).
3. **Démarrer sans se blesser** : il maîtrise les exos de base avec critères d'exécution.
4. **Donner envie de revenir** : teasing clair sur statique/dynamique + newsletter ou rappel (optionnel V1.1).

### 3.2 KPIs

| Objectif      | Indicateur                           | Cible V1 (3 mois) |
| ------------- | ------------------------------------ | ----------------- |
| Acquisition   | Visites organiques FR/EN             | 500 / mois        |
| Compréhension | Temps moyen sur `/bases.html`        | > 2 min           |
| Engagement    | Taux de scroll > 75 % sur page bases | > 40 %            |
| Technique     | Lighthouse Perf / A11y / SEO         | > 90 / 100 / 100  |
| Satisfaction  | Retours qualitatifs "j'ai compris"   | 5 retours         |

*Pas de KPI business en V1 (pas de vente).*

---

## 4. Publics cibles — personas vulgarisation

### Persona 1 — Léo, 22 ans, débutant (prioritaire V1)

- Étudiant, peu sportif, budget limité, s'entraîne chez lui ou au parc.
- Freins : peur du regard, ne sait pas par où commencer, peur de mal faire.
- Attentes : explications simples, pas de termes médicaux, visuels clairs, durée courte.
- Besoin : "Montre-moi 4-5 exos que je peux faire demain, correctement."

### Persona 2 — Inès, 28 ans, reprise d'activité

- A fait de la salle, veut s'entraîner dehors / à la maison.
- Freins : douleurs passées (dos/genou), besoin de rassurance.
- Attentes : consignes de sécurité, alternatives faciles, disclaimer santé visible.

### Persona 3 — Yanis, 19 ans, motivé figures (secondaire, V2)

- Suit des vidéos muscle-up / handstand, veut aller vite.
- Besoin V1 : comprendre les **prérequis** (pourquoi les bases d'abord) pour éviter la blessure.

**Ton éditorial** : tutoiement, phrases courtes, analogies concrètes, pas de jargon non défini. Niveau collège.

---

## 5. Périmètre fonctionnel

### 5.1 In-scope V1

- Site **statique 100 % lecture**, aucune interactivité métier.
- Thème **sombre par défaut**, basculable clair (bouton visible, persistance).
- **Bilingue FR/EN** : tout le contenu traduit, URLs distinctes.
- 5 pages (cf §6).
- Contenu rédactionnel + illustrations placeholders.
- SEO de base + accessibilité + RGPD minimal.

### 5.2 Hors-scope V1 (explicitement non livré)

- Générateur de programmes / scoring / localStorage métier (reste dans `calicoach`).
- Quiz, filtres, recherche, commentaires, espace membre.
- Vidéos intégrées (prévoir emplacements, pas d'hébergement vidéo V1).
- PWA / offline, backend, base de données, analytics intrusif.
- Boutique, prise de RDV, newsletter (possible V1.1 avec lien externe).

### 5.3 V2 / V3 (roadmap indicative)

- **V2 — Statique approfondi** : fiches détaillées L-sit, planche, front lever (prérequis, étapes, erreurs).
- **V3 — Dynamique** : muscle-up, handstand, transitions, programmation type.
- **V2+** : glossaire figures, page "Où s'entraîner ?" (matériel minimal : sol, barre), page "S'équiper".
- **V1.1 optionnel** : formulaire contact statique (Formspree / mailto), inscription newsletter externe (Brevo/ConvertKit).

---

## 6. Arborescence & parcours

### 6.1 Sitemap V1

```
/ (index.html)              FR — Accueil
/en/ (en/index.html)        EN — Home
/bases.html                 FR — Les bases
/en/bases.html              EN — Fundamentals
/statique.html              FR — Figures statiques (teasing)
/en/static.html             EN — Static skills (teasing)
/dynamique.html             FR — Figures dynamiques (teasing)
/en/dynamic.html            EN — Dynamic skills (teasing)
/a-propos.html              FR — À propos + disclaimer + crédits
/en/about.html              EN — About
/sitemap.xml
/robots.txt
```

**Règles :** URLs en minuscules, sans accent, `hreflang` + `canonical` sur chaque page, redirection `/en/` depuis switch langue.

### 6.2 Navigation & parcours

- **Header commun** : logo Calisthenix-Lab + nav (Accueil | Bases | Statique | Dynamique | À propos) + switch `FR | EN` + bouton thème `🌙/☀️`.
- **Footer commun** : ©, liens rapides, disclaimer santé court, crédits, lien `sitemap.xml`.
- **Parcours prioritaire** : Accueil → Bases (80 % du trafic attendu) → Statique/Dynamique (découverte) → À propos.

### 6.3 Contenu par page

#### Page 1 — Accueil (`index.html` / `en/index.html`)

- **Hero** : "La calisthénie, c'est l'art de se renforcer avec son propre corps." + sous-titre vulgarisé + CTA principal "Apprendre les bases" → `/bases.html`.
- **Bloc "C'est quoi ?"** : 3 colonnes — Définition (1 phrase) / Où ? (maison, parc, sol) / Pour qui ? (tout niveau, progressif).
- **Bloc "3 façons de progresser"** : visuel timeline Bases (vert = V1 complet) → Statique (jaune = à venir) → Dynamique (jaune). Explique pourquoi cet ordre.
- **Bloc bénéfices** : force utile, liberté, peu de matériel, progression visible — 4 cartes sobres.
- **CTA secondaire** : "Voir les 6 exos de base".
- **SEO** : `title` FR "Calisthenix-Lab — Comprendre et débuter la calisthénie" / EN "Calisthenix-Lab — Understand & Start Calisthenics".

#### Page 2 — Les bases (`bases.html` / `en/bases.html`) — CŒUR V1

**Intro** (150 mots) : pourquoi les bases sont non-négociables (articulations, gainage, prévention).

**6 fiches exos** (même template, ancre `#pompe`, etc.) :

| #   | Exo                                                                           | Focus                      | Matériel                 |
| --- | ----------------------------------------------------------------------------- | -------------------------- | ------------------------ |
| 1   | Pompe (push-up)                                                               | Poussée horizontale        | Sol                      |
| 2   | Tirage / Traction australienne (si pas de barre : tirage serviette/élastique) | Tirage horizontal/vertical | Barre ou table/élastique |
| 3   | Dips (ou pompes serrées si pas de support)                                    | Poussée verticale          | Banc / chaises           |
| 4   | Squat poids du corps                                                          | Jambes                     | Sol                      |
| 5   | Fente avant                                                                   | Jambes unilatéral          | Sol                      |
| 6   | Gainage planche                                                               | Core                       | Sol                      |

**Template fiche** :

- Nom FR/EN + catégorie (push/pull/legs/core)
- **Pourquoi cet exo ?** (1 phrase)
- **Comment bien l'exécuter** : 3 étapes numérotées, verbes d'action
- **Respire** : consigne simple
- **Erreurs courantes** : 3 bullets (ex: dos creusé, épaules en avant)
- **Pour débuter plus facile / Pour progresser** : 1 régression + 1 progression
- **Illustration** : placeholder `assets/img/bases-pompe.svg` (schéma ou photo libre V1)
- **Sécurité** : rappel "pas de douleur articulaire, stop si gêne"

**Encadré fin de page** : "Combien ?" — vulgarisation volume : 2-3 séries, 6-12 reps, repos 60-90s, 2-3×/semaine — sans plan personnalisé (pas de générateur).

#### Page 3 — Statique (`statique.html` / `en/static.html`)

- Définition isométrie, exemples (L-sit, planche, front lever) en 1 ligne chacun.
- Message : "Pas pour maintenant — voici les prérequis" (ex: 30s planche propre avant L-sit).
- Teasing V2 + CTA "Revenir aux bases".

#### Page 4 — Dynamique (`dynamique.html` / `en/dynamic.html`)

- Définition mouvement + élan, exemples (muscle-up, handstand, transitions).
- Risques si bases bâclées, importance de la progressivité.
- Teasing V3.

#### Page 5 — À propos (`a-propos.html` / `en/about.html`)

- Intention du Lab : vulgariser, pas remplacer un coach.
- **Disclaimer santé** complet (reprendre et adapter `calicoach\lib\constants.ts:164` : "Calisthenix-Lab fournit des informations générales... consulte un professionnel de santé...").
- Sources & crédits (même si contenu original, citer inspirations).
- Contact : `mailto:` ou lien externe (pas de formulaire V1).
- Mentions légales minimales : éditeur, hébergeur, RGPD (pas de cookies).

---

## 7. Exigences éditoriales

### 7.1 Charte

- Langue : FR impeccable, EN simple (pas de traduction auto).
- Ton : tutoyant, bienveillant, direct. Pas de superlatifs vides.
- Longueur : phrases < 20 mots, paragraphes < 4 lignes.
- Jargon : tout terme technique défini entre parenthèses la première fois.

### 7.2 Volume V1

- Accueil : ~400 mots FR + EN
- Bases : ~1 200 mots FR + EN (6 × 150-200 + intro/conclusion)
- Statique : ~250 mots FR + EN
- Dynamique : ~250 mots FR + EN
- À propos : ~300 mots FR + EN
- **Total : ~2 400 mots / langue** — à rédiger, pas de contenu existant.

### 7.3 Assets

- V1 : illustrations vectorielles simples ou photos libres (Unsplash/Pexels) — prévoir `assets/img/` avec 6-8 images < 150ko chacune (WebP + fallback).
- Pas de vidéo V1 ; prévoir slots `<!-- TODO: video -->`.

---

## 8. Exigences design & UX

### 8.1 Direction artistique — "Lab sombre"

- **Thème sombre par défaut** (laboratoire, sportif, lisible le soir) + **clair basculable**.
- Tokens (reprennent l'esprit `calicoach` mais vanilla CSS) :

```css
/* Dark (défaut) */
--bg: #0b0e12;
--panel: #12161c;
--edge: #232b35;
--text: #edf1f5;
--muted: #8e9ba8;
--accent: #ff8a3d;
--accent-2: #3ddc97; /* touches */

/* Light */
[data-theme="light"] {
  --bg: #f7f8f9;
  --panel: #ffffff;
  --edge: #e2e8f0;
  --text: #12161c;
  --muted: #5a6b7a;
}
```

- Typo : 1 display (titres, ex: Archivo Black ou Space Grotesk) + 1 body (Inter) — 2 max, via `Google Fonts` ou système.
- Radius 12px, ombres douces, grille max 1100px centrée.

### 8.2 Composants

- Header sticky léger, nav accessible clavier, focus visible.
- Bouton thème : `aria-label="Basculer thème clair/sombre"` + `aria-pressed`.
- Switch langue : liens `<a hreflang>` visibles, pas de JS obligatoire pour changer de langue.
- Cartes fiches : bordure `edge`, padding 16-24px, hiérarchie `h2 > h3`.

### 8.3 Responsive & accessibilité

- Mobile-first : 320px → 1100px, 1 colonne mobile, 2 colonnes desktop pour fiches.
- Contraste AA (≥ 4.5:1) vérifié sur dark et light.
- Navigation clavier complète, `skip-link`, `lang` sur `<html>`, `alt` descriptifs.
- Pas de dépendance JS pour lire le contenu (JS uniquement pour thème + amélioration).

---

## 9. Exigences techniques

### 9.1 Stack & architecture

- **HTML5 sémantique** : `header`, `nav`, `main`, `section`, `article`, `footer`, `h1` unique par page.

- **CSS vanilla** : 1 fichier `css/style.css` (~15-25ko), variables CSS, pas de Tailwind/CDN obligatoire. Pas de préprocesseur.

- **JS vanilla** : 1 fichier `js/main.js` (< 10ko, pas de dépendance) :
  
  ```js
  // - theme: localStorage + matchMedia('(prefers-color-scheme: light)')
  // - lang switch: redirection href (optionnel, les liens suffisent)
  // - pas de tracking, pas de framework
  ```

- **Aucun build** requis pour déployer ; optionnel `npm` juste pour linter si souhaité.

- **Hébergement** : statique (GitHub Pages, Netlify, Vercel Static, Cloudflare Pages) — HTTPS, déploiement par `git push` ou drag & drop.

### 9.2 Arborescence fichiers cible

```
Calisthenix-Lab/
├── CDC-Calisthenix-Lab.md      ← ce fichier
├── index.html
├── bases.html
├── statique.html
├── dynamique.html
├── a-propos.html
├── en/
│   ├── index.html
│   ├── bases.html
│   ├── static.html
│   ├── dynamic.html
│   └── about.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── img/ (WebP + SVG)
├── sitemap.xml
└── robots.txt
```

### 9.3 Performance & qualité

- Poids total 1ère page < 300ko (HTML+CSS+JS+images critiques), < 1s sur 4G.
- Images optimisées WebP, `loading="lazy"` hors hero, `width`/`height` posés.
- CSS/JS minifiables à la main pour prod (pas bloquant).
- Validation W3C HTML/CSS, Lighthouse > 90 partout.

### 9.4 SEO

- `title` + `meta description` uniques par page et par langue.
- `html lang="fr"` / `lang="en"`, `hreflang="fr"` / `hreflang="en"` + `x-default`.
- `canonical` absolu par page (à renseigner selon domaine final).
- `sitemap.xml` listant 10 URLs (5 FR + 5 EN), `robots.txt` autorisant tout.
- Open Graph / Twitter Card basiques (titre, description, image 1200×630).
- Données structurées `Article` ou `FAQPage` sur `/bases.html` (optionnel V1).

### 9.5 RGPD & légal

- **Zéro cookie** en V1, pas d'analytics par défaut. Si ajout ultérieur (Plausible/Matomo sans cookie), bandeau info simple.
- Mentions : éditeur, hébergeur, contact, propriété intellectuelle.
- Disclaimer santé visible en footer + page À propos.

### 9.6 Compatibilité

- Navigateurs : evergreen (Chrome, Firefox, Safari, Edge) sur 2 dernières versions.
- JS désactivé : site lisible, thème suit `prefers-color-scheme`, langue via liens.

---

## 10. Internationalisation (FR/EN)

- **Stratégie** : duplication HTML (pas de JSON/i18n JS) — SEO optimal, pas de flash de contenu.
- **URLs** : FR à la racine, EN sous `/en/` (ex: `/bases.html` ↔ `/en/bases.html`).
- **Switch** : dans header, lien explicite "FR | EN" avec `hreflang`.
- **Traduction** : humaine, pas auto. Prévoir relecture native.
- **Noms fichiers EN** : `static.html` / `dynamic.html` / `about.html` (anglais naturel).

---

## 11. Contraintes & non-objectifs

- Pas de CMS (pas de WordPress) — édition directe HTML.
- Pas de backend, pas de base de données, pas d'auth.
- Pas de générateur — lien éventuel vers `calicoach` en V2 mais pas en V1.
- Contenu 100 % original, pas de copier-coller d'autres sites.

---

## 12. Planning prévisionnel

| Phase              | Contenu                                           | Durée | Livrable                                      |
| ------------------ | ------------------------------------------------- | ----- | --------------------------------------------- |
| **1. CDC**         | Rédaction & validation                            | 1 j   | Ce document                                   |
| **2. Design**      | Tokens + maquette HTML accueil + thème dark/light | 1-2 j | `index.html` + `css/style.css` + `js/main.js` |
| **3. Intégration** | Déclinaison 4 pages FR                            | 1-2 j | 5 HTML FR                                     |
| **4. Traduction**  | Duplication EN + relecture                        | 1 j   | 5 HTML EN                                     |
| **5. QA**          | A11y, perf, SEO, orthographe, liens               | 0.5 j | Checklist signée                              |
| **6. Déploiement** | Mise en ligne statique + domaine                  | 0.5 j | URL publique                                  |

**Total V1 : ~5-6 jours** à rythme soutenu, compressible si contenu fourni.

---

## 13. Critères d'acceptation V1 (définition de "terminé")

- [ ] 10 pages HTML livrées (5 FR + 5 EN) dans l'arborescence §9.2
- [ ] Thème sombre par défaut, toggle clair fonctionnel + persistance `localStorage` + respect `prefers-color-scheme`
- [ ] Switch FR/EN fonctionnel avec `hreflang` + `canonical`
- [ ] 6 fiches bases complètes FR/EN avec template §6.3
- [ ] Pages statique/dynamique en mode teasing (pas de tuto incomplet)
- [ ] Lighthouse > 90 Perf / 100 A11y / 100 SEO sur `/` et `/bases.html` (mobile + desktop)
- [ ] Navigation clavier OK, contraste AA, `alt` présents, `h1` unique
- [ ] `sitemap.xml` + `robots.txt` + OG tags présents
- [ ] Poids < 300ko 1ère visite, pas de JS bloquant
- [ ] Zéro cookie, disclaimer santé présent
- [ ] Contenu relu (orthographe FR/EN), liens internes/externes vérifiés

---

## 14. Risques & parades

| Risque                              | Parade                                                                       |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| Contenu non prêt (pas de rédacteur) | Livrer avec textes "lorem vulgarisé" structurés + TODO clairs pour rédaction |
| Traduction EN approximative         | Prévoir relecture native avant publication, sinon publier FR d'abord         |
| Images non libres                   | Utiliser placeholders SVG + crédits, remplacer avant prod                    |
| Domaine non choisi                  | Utiliser URLs relatives + `canonical` à remplir au déploiement               |

---

## 15. Annexes

### 15.1 Références à ne pas copier mais à connaître

- `calicoach` (ton projet générateur) — pour cohérence visuelle, pas pour code.
- Sites de référence calisthénie : à lister après veille (non inclus V1).

### 15.2 Prochaines décisions à figer avant intégration

1. Nom de domaine final (ex: `calisthenix-lab.fr` ?) — impacte `canonical` et OG.
2. Hébergeur statique retenu.
3. Source des illustrations (banque libre choisie).

---

*Document généré pour `Calisthenix-Lab` — prêt à être partagé tel quel. Prochaine étape : intégration HTML/CSS/JS selon §9.2 après validation du CDC.*
