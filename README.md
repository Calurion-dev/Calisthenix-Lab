# Calisthenix-Lab

Site vitrine bilingue (FR/EN) de vulgarisation de la calisthénie. Statique, sans framework, sans compte et sans cookie.

**En ligne :** https://calurion-dev.github.io/Calisthenix-Lab/

## Contenu

- **Accueil** — définition, méthode en trois étages (bases → statique → dynamique), bénéfices.
- **Les bases** — six fiches techniques : pompe, traction australienne, dips, squat, fente, gainage. Exécution, respiration, erreurs, régression, progression.
- **Statique** — L-sit, planche, front lever : ce que c'est, prérequis, pourquoi ça attend (V2).
- **Dynamique** — muscle-up, handstand, transitions (V3).
- **À propos** — intention, disclaimer santé, crédits, mentions légales.

Le cahier des charges de référence est [`CDC-Calisthenix-Lab.md`](./CDC-Calisthenix-Lab.md).

## Structure

```
.
├── index.html / bases.html / statique.html / dynamique.html / a-propos.html
├── en/                  # miroir anglais (index, bases, static, dynamic, about)
├── css/style.css        # feuille unique, tokens clair/sombre
├── js/main.js           # bascule de thème (localStorage)
├── assets/fonts/        # Archivo Black + Inter (woff2, auto-hébergées)
├── assets/img/          # illustrations SVG des six mouvements + image OG
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

GitHub Pages, branche `main`, racine du dépôt. Tout est relatif : le site fonctionne aussi dans un sous-chemin.

```bash
git push origin main
```

## Licence

Textes et illustrations originaux. Typographies sous SIL Open Font License 1.1.
