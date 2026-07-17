# GSAP Boilerplate

Persönliches Ausgangs-Setup für kleine GSAP-Lernprojekte. Einmal sauber halten, für jedes neue Experiment als Template-Repo verwenden ("Use this template" auf GitHub) statt hier direkt weiterzuarbeiten.

## Struktur

- `index.html` — Grundgerüst mit vier Demo-Sections (Hero-Tween, Timeline, ScrollTrigger, Notizblock)
- `styles.css` — Basisstyling, CSS-Variablen für Farben
- `script.js` — registrierte Plugins + Beispiel-Snippets für Tween/Timeline/ScrollTrigger
- `images/` — freie Unsplash-Bilder für Experimente mit z. B. Flip, Parallax, SplitText, Observer

## Plugins

Aktuell per CDN geladen:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js"></script>
```

Für ein neues Lernthema einfach das passende Plugin-Script ergänzen und in `script.js` per `gsap.registerPlugin(...)` registrieren, z. B. `Flip`, `Draggable`, `Observer`, `SplitText`.

## Neues Lernprojekt starten

1. Auf GitHub "Use this template" klicken (oder Ordner kopieren)
2. In `script.js` unter "Deine Experimente kommen hierhin" weiterarbeiten
3. Boilerplate selbst unverändert lassen, damit es wiederverwendbar bleibt
