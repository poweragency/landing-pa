# PowerAgency — landing principale

> Fonte di verità del progetto, committata nel repo. Tienila concisa.

## ⚠️ Cos'è questo progetto
- È la landing PowerAgency **reale**, servita su **`www.poweragency.it`** (l'apex `poweragency.it` fa 307 → www). Single-locale IT.
- Vercel project **`landing-poweragency`** · repo **`poweragency/landing-poweragency`** · **deploy automatico a ogni push su `main`**.
- Il vecchio progetto `poweragency-web` è stato **eliminato** (2026-06): NON cercare il HUB altrove. Pagine: `/`, `/ecosistema`, `/software`, `/crm`, `/prop`, `/ecommerce` + legali (privacy/termini/cookie con dati fiscali reali da `lib/content.ts`).
- **Lead capture (2026-06-09):** il form contatti fa POST a **`/api/lead`** (`app/api/lead/route.ts`): valida nome/email/telefono, poi inoltra best-effort (mai bloccante per l'utente) a (1) `LEAD_WEBHOOK_URL` se configurata (Zapier/Make/...) e (2) **Power Hub** come lead `web_form` con `source: "poweragency.it"` — env su Vercel: `POWERHUB_WEBFORM_SECRET` (= `WEBFORM_WEBHOOK_SECRET` lato Power Hub) e `POWERHUB_WEBFORM_URL` (default `https://crm.poweragency.it/api/webhooks/web-form`). Il secret resta server-side.

## Comandi
- `npm run dev` — sviluppo
- `npm run build` — build (Turbopack; lento/instabile su questa share SMB)
- `npm run lint` — lint
- **Deploy = `git push origin main`** → Vercel builda e pubblica. La build di Vercel è il gate vero di typecheck/build.

## Gotcha (non ovvi)
- **Git su share SMB:** "dubious ownership" → prima di operare: `git config --global --add safe.directory "<path>"`.
- **`tsc`/build locale lentissimi su SMB:** non aspettarli all'infinito, pusha e lascia il check a Vercel.
- **Next.js 16:** `params` di pagine/route è una `Promise` (va `await`). Doc offline in `node_modules/next/dist/docs/`.
- Alias `@/*` → root del progetto (niente `src/`): tutto in `app/`, `components/`, `lib/`. `three` va in `transpilePackages`.

## Convenzioni (IMPORTANT, segui per coerenza)
- **Contenuti SEMPRE in `lib/content.ts`** (NAV_LINKS, STATS, SOFTWARE, CRM, ECOSISTEMA, `*_FAQ`, CONTACT…). Mai hardcodare copy sparso nelle pagine.
- **SEO per pagina:** `export const metadata = pageMeta({ title, description, path })` da `lib/seo.ts` → canonical self-ref + OG + Twitter. La home usa i default in `app/layout.tsx`. Host canonico = `www.poweragency.it`.
- **Structured data:** `<JsonLd data={...} />` coi builder di `lib/structured-data.ts`. `Organization` è site-wide (nel layout); le pagine aggiungono `Service`/`FAQPage`/`WebSite`.
- **Immagine OG:** generata da `app/og/route.tsx`, referenziata come `/og` (NON via convenzione file `opengraph-image`, altrimenti gli override per-pagina la perdono).
- **Le pagine sono server component** (esportano `metadata`): NON usare `motion`/hook direttamente → wrappa in `Reveal`/`TiltCard` (client).
- **Pattern pagina-servizio (asciutto):** `PageHero` → 1-2 sezioni (`SectionHead` + griglia `TiltCard`) → `Faq` → `CTA`. **Niente contenuti duplicati tra pagine** (es. `CaseStudy` sta solo su `/crm`).

## Regole di contenuto (YOU MUST)
- **Mai esporre prezzi in pagina:** rimanda alle landing dei prodotti; sito/CRM = "preventivo dopo audit / range in call".
- **Bundling:** PowerLeads e PowerSocial = SaaS in abbonamento (self-service); sito (PowerLanding) e CRM = servizi su misura.
- **Solo numeri reali:** 10.000€/day ecom, 120+ account prop, case carrozzeria 60+ lead / 5 clienti / 15.000€. **Non inventarne altri.**
- Il case carrozzeria resta **anonimo** (mai nome/città). Carrozzerie/dentisti/edili NON sono verticali da spingere come pagine dedicate.

## Brand
Email `info@poweragency.it` · IG `@_poweragency_` · logo `public/brand/logo.png` · palette: base scuro `#0a0606`, accento arancio `#ff6a1a` (gradient amber→red), font Space Grotesk (`font-head`) + Inter.

## Icone e manifest (12/06/2026)

Set generato dal logo tondo (`public/brand/logo.png`): `public/icon-192.png`, `icon-512.png`,
`icon-maskable-512.png` (su sfondo nero opaco) + `app/icon.png` (favicon via convention,
sostituisce il vecchio `icons:{}` esplicito nel metadata) e `app/apple-icon.png` (180, su nero).
`app/manifest.ts` è **light** (display `browser`): sito vetrina, niente PWA standalone/sw.js.
Pattern: `Z:\SECOND-BRAIN\sources\stack\pattern-icone-pwa-progetto.md`.
