# Calisthenix-Lab

Site vitrine bilingue (FR/EN) de vulgarisation de la calisthénie. Statique, sans framework, sans compte et sans cookie.

**En ligne :** https://calurion-dev.github.io/Calisthenix-Lab/

## Contenu

- **Accueil** — définition, méthode en trois étages (bases → statique → dynamique), bénéfices.
- **Les bases** — cinq fiches techniques : pompes, tractions, dips, pistol squat, gainage. Exécution, respiration, erreurs, régression, progression.
- **Méthodes** — neuf façons de structurer l'entraînement : circuits, rep & set, GTG, push / pull, force / street lifting, endurance, freestyle / combos, EMOM, pyramide.
- **Échauffement & étirements** — page de préparation : échauffement avant la séance et retour au calme (contenu à venir).
- **Intensifications** — dégressif, tempo, pause / hold et temps de repos : quatre leviers pour rendre une série plus exigeante.
- **Statique** — L-sit, planche, front lever : ce que c'est, prérequis, pourquoi ça attend (V2).
- **Dynamique** — muscle-up, handstand, transitions (V3).
- **À propos** — intention, disclaimer santé, crédits, mentions légales.

Le cahier des charges de référence est [`CDC-Calisthenix-Lab.md`](./CDC-Calisthenix-Lab.md).

## Structure

```
.
├── index.html / bases.html / methodes.html / statique.html / dynamique.html / echauffement-etirements.html / intensifications.html / a-propos.html
├── en/                  # miroir anglais (index, bases, methods, static, dynamic, warm-up-stretching, intensifications, about)
├── css/style.css        # feuille unique, tokens clair/sombre
├── js/main.js           # bascule de thème (localStorage)
├── assets/fonts/        # Archivo Black + Inter (woff2, auto-hébergées)
├── assets/img/          # illustrations SVG des cinq mouvements + image OG
├── sitemap.xml / robots.txt / llms.txt
└── favicon.svg
```

## Développement

Aucun build. Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python -m http.server 8000
```

Puis http://localhost:8000.

## Thème

Sombre par défaut. Le bouton bascule clair/sombre et mémorise le choix dans `localStorage`. Sans JavaScript, le thème suit `prefers-color-scheme` et le contenu reste lisible.

## Déploiement

GitHub Pages, branche `gh-pages`, racine de la branche. Tout est relatif : le site fonctionne aussi dans un sous-chemin.

Un push sur `main` ne publie rien. Pour publier, recopier le site sur `gh-pages` :

```bash
git checkout gh-pages
git checkout main -- index.html bases.html methodes.html statique.html dynamique.html a-propos.html en css js assets favicon.svg sitemap.xml robots.txt llms.txt .nojekyll
git commit -am "Publish site"
git push origin gh-pages
git checkout -f main
```

## Licence

Textes et illustrations originaux. Typographies sous SIL Open Font License 1.1.
