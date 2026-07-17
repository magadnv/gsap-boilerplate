# GSAP Boilerplate

Persönliches Setup für tägliche GSAP-Lernprojekte. Ein Repo, viele Mini-Projekte —
jedes in seinem eigenen Ordner unter `projects/`.

## Struktur

- `index.html` — Übersichtsseite, listet alle Projekte unter `projects/` auf
- `shared/base.css` — gemeinsame Basis (Reset, Fonts, CSS-Variablen, Header/Footer) für alle Seiten
- `_template/` — Startpunkt für ein neues Mini-Projekt (index.html, styles.css, script.js)
- `projects/NN-thema/` — ein Ordner pro Übung, z. B. `01-intro-playground`
- `images/` — freie Unsplash-Bilder für Experimente mit z. B. Flip, Parallax, SplitText, Observer
- `favicon.svg` — von allen Seiten über relativen Pfad genutzt

## Neues Mini-Projekt starten

1. `_template/` kopieren und umbenennen:
   ```bash
   cp -r _template projects/02-mein-thema
   ```
2. In `projects/02-mein-thema/index.html` bei Bedarf weitere GSAP-Plugins per CDN ergänzen
   (z. B. `ScrollTrigger`, `Flip`, `Draggable`, `Observer`, `SplitText`) und in `script.js`
   per `gsap.registerPlugin(...)` registrieren.
3. In `script.js` loslegen.
4. Neuen Eintrag in der Root-`index.html` unter `.project-grid` ergänzen, damit das Projekt
   in der Übersicht auftaucht.
5. Lokal ansehen, z. B. mit VS Code "Live Server" oder:
   ```bash
   npx serve .
   ```

## Plugins

GSAP wird aktuell per CDN geladen:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
```

Für ScrollTrigger, Flip, Draggable, Observer, SplitText etc. das passende Script
in der jeweiligen `index.html` des Projekts ergänzen und registrieren.

## Grundsatz

`shared/` und `_template/` bleiben unverändert und generisch — projektspezifisches Styling
und Markup gehört in den jeweiligen `projects/NN-thema/`-Ordner, nicht in die geteilte Basis.
