# We Buy St Pete Houses

Next.js marketing site for webuystpetehouses.com, built with the design system in `refrence/design_system.html` and homepage layout from `refrence/index.html`.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- Fonts: Manrope + DM Serif Display (design system)

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, SEO, JSON-LD
│   ├── page.tsx        # Homepage (composes sections)
│   └── globals.css     # Design tokens + base styles
├── components/
│   ├── layout/         # TopBar, Header, Footer, MobileCallBar
│   ├── home/           # One component per homepage section
│   └── ui/             # Button, SectionHead, Reveal, BrandLogo
└── lib/
    ├── constants.ts    # Site copy, nav, FAQ, steps data
    └── fonts.ts
```

## Commands

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
```

## Reference files

- Design tokens & components: `refrence/design_system.html`
- Homepage content & sections: `refrence/index.html`
