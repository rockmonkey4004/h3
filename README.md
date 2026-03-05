# H3 with Laura

Modern Next.js site for Health, Healing, and Hope (H3), including blog posts, tag pages, search, and static marketing pages.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Markdown/MDX content in `src/content/posts`

## Requirements

- Node.js 20+
- npm 10+

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint checks
npm run typecheck  # TypeScript checks
```

## Content Model

- Source posts live in `src/content/posts/*.mdx`
- Frontmatter used by the app:
  - `title`
  - `date`
  - `description`
  - `tags`
  - `image`

## Key Routes

- `/`
- `/blog`
- `/blog/[slug]`
- `/tags/[tag]`
- `/about`
- `/contact`
- `/christmas`
- `/recommended-items`

## Legacy Directory

`legacy/` contains historical Jekyll-era artifacts and migration references. It is excluded from modern linting/build flows.

## Deployment

Netlify config is in `netlify.toml` and builds with:

```bash
npm run build
```
