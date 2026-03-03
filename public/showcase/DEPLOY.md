# Showcase Site Deployment

This folder is now self-contained and can be deployed as static hosting.

## Option A: Vercel (recommended)
1. Push this `showcase_site` folder to a GitHub repo.
2. In Vercel: New Project -> Import repo.
3. Framework preset: `Other` (Static Site).
4. Root directory: `showcase_site`.
5. Deploy.

## Option B: Cloudflare Pages
1. Connect repo.
2. Build command: leave empty.
3. Output directory: `showcase_site`.
4. Deploy.

## Option C: GitHub Pages
1. Put files in repo root (or `docs/`).
2. Enable Pages from branch.
3. Access via `https://<user>.github.io/<repo>/`.

## Notes
- Markdown docs are rendered by `md-viewer.html`.
- Content is in `content/md/`.
- No backend required.
