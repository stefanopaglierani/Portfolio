# Stefano Paglierani | Portfolio

Source of my personal portfolio: who I am, what I've built, and how I work.

I trained as an industrial automation technician and today I build software as product owner and technical lead, directing AI coding agents (Claude Code and Claude Cowork) from the first brief to the release. I'm based in Italy, relocating to Northern Colorado, and seeking H-1B sponsorship (open to O-1 and other visa routes).

## Featured projects

| Project | What it is | Links |
|---|---|---|
| **Nitro Underground** | 3D street-racing game for Android in Godot 4: hand-written vehicle physics checked by a test bench, circuits written as text maps, 26 playable versions in 13 days | [Case study](project-nitro-underground.html) · [Source](https://github.com/stefanopaglierani/nitro-underground) |
| **XPLORE Parkour app** | Members app and website for a 400-member parkour school: bookings, instalment memberships, Italian tax receipts, community; one rules engine for server, browser and tests | [Case study](project-xplore-parkour.html) · [Source](https://github.com/stefanopaglierani/xplore-parkour-app) |
| **Cozy Ambience** | Zero-cost pipeline on GitHub Actions that animates still images with depth-aware effects, layers ambient sound and uploads to YouTube on a schedule | [Case study](project-cozy-ambience.html) · [YouTube](https://www.youtube.com/@relaxing-video-b1k) · [Source](https://github.com/stefanopaglierani/cozy-ambience) |
| **Universal Game Tools** | Game-agnostic tools for Godot; first module: a deterministic procedural island generator designed through decision records | [Case study](project-universal-game-tools.html) · [Source](https://github.com/stefanopaglierani/universal-game-tools) |
| **Edge Sentinel** | Python Windows service that monitors the backup battery of industrial PCs | [Case study](project-edge-sentinel.html) · [Source](https://github.com/stefanopaglierani/Edge-sentinel) |

Also on the site: my industrial automation background (CESCOT certification, SCM Group), the Mars Survival Simulation in Luau, the Da Vinci Glamping concept, a résumé and technical articles.

## How the site is built

Plain HTML and CSS, no framework and no build step: every page is a static file that opens directly in a browser.

```
index.html                  home: production log, selected work, background
project-*.html              one case study per project
resume.html                 résumé (print-friendly: "Print or save as PDF")
articles.html, article-*.html   technical writing
assets/css/site.css         the whole visual system (colours, type scale, layouts)
assets/js/site.js           one small script: plays the production log once
assets/fonts/               Archivo variable font, self-hosted (SIL Open Font License)
assets/img/                 screenshots from each project's repository
```

Design notes: a light "machine enamel" background, ink-blue type, signal yellow used only for nameplates, and a single typeface (Archivo) whose width axis does the work: wide for names, normal for reading, condensed for data. Pages are responsive, keyboard-accessible, and respect reduced-motion settings.

---

*For professional inquiries: [LinkedIn](https://www.linkedin.com/in/stefano-paglierani-a4067a398/) · stefano.paglierani83@gmail.com*
