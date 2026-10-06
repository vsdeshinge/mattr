# Mattr × MADS — Next.js website

A complete redesign using the supplied Mattr logo, tagline, colours, copy and original portfolio.

## Start

Requires Node.js 20.9 or later. Node.js 22 or 24 works.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

This is a Next.js App Router project. Deploy as a Next.js application, not as the previous Vite/dist project.

## Version

Next.js **16.4.0**, verified against npm's stable `latest` tag on 7 October 2026. The version is pinned in package.json and package-lock.json. React 19.2.0. No Next.js 15 dependency or route configuration.

## Design

- Your actual MATTR.png is preserved in public/brand/mattr-original.png. The navigation/footer asset trims only transparent outer margins; the artwork is unchanged.
- Tagline: Thinking made visible. Visible made available.
- Brand palette: #9c0000, #004262, #f0f0f0 and #272727. The supplied #9c000 was interpreted as #9c0000.
- Self-hosted Manrope font, oversized type, serif accents, angled project frames, editorial project layouts, blue/red sections and custom asterisk motifs.
- First-visit project montage, rotating hero projects, animated ticker, scroll reveals, hover treatments, looping video previews and expanding practice descriptions.
- Reduced-motion support, keyboard-operated dialogs, visible focus styles, skip link and mobile navigation.

## Complete portfolio

All **56 original public files** are preserved byte-for-byte, including every original video, image and client logo.

The work page showcases **45 catalogue entries**:

- 6 websites / digital projects, retaining original live project links.
- 18 branding / design pieces, including the bag and belt campaigns.
- 11 motion / film entries in the Motion & films category.
- 4 event / fabrication entries, including the Posspole 3D booth video.
- 6 concert photographs in Cinematography & photography.

The /films page brings together all **12 video entries**: six local films and six original YouTube-linked projects. The Posspole booth film is included here and in the Events & fabrication category.

The original ProRes redefine.mov is preserved, with an additional H.264 MP4 version for browser playback. All videos have posters and full-player controls. The homepage has muted, visible-on-screen preview loops.

The /photography page contains the six supplied photographs. The /events page showcases the Reon Skills booth, TiE setup, Posspole exhibition and 3D booth concept.

Original hero collage assets remain available. Two collages also appear in the rotating homepage showcase.

## Edit

- All project data: lib/portfolio.js.
- Practice descriptions and process / why-us copy: lib/content.js.
- Homepage sections: components/Sections.jsx and app/page.jsx.
- Hero and intro: components/Hero.jsx.
- Brand colours, layouts and animations: app/globals.css.
- Logo files: public/brand.
- Original films and browser-compatible conversion: public/videos.
- Photo gallery: public/photography.
- Contact details: app/contact/page.jsx.

## Contact form

The existing Firebase database integration, email address and phone number are retained. Confirm your Firebase database rules and test message delivery before launching. No live contact message was submitted during development.

## Validation

- Next.js production build passes.
- ESLint passes.
- All original public assets match the source archive byte-for-byte.
- All portfolio image and poster paths exist.
- Browser checks cover every page at 1440, 768, 390 and 320 pixels: no horizontal overflow or broken images.
- Gallery filters, image dialog, video player, mobile navigation and practice accordions checked.
- Original external links are preserved; availability on third-party websites was not independently tested.

Preview screenshots are in docs/previews. The ZIP excludes node_modules, .next and macOS metadata.
# mattr
