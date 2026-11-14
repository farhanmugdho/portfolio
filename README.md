# Farhan Intesar Mugdho — Portfolio

Single-page personal portfolio for **Farhan Intesar Mugdho**, CSE undergraduate at MIST.

Built as one self-contained `index.html` (no build step, no dependencies). All certificate and
gallery images are embedded as base64, so the page works offline and on any static host. The CV is
served from `cv.pdf` and opens in an in-page viewer (with a download button).

## Structure

```
.
├── index.html      # the whole site
├── cv.pdf          # opened by the "CV" nav link
├── .nojekyll       # tells GitHub Pages to serve files as-is
├── .gitignore
└── README.md
```

## Preview locally

Just open `index.html` in a browser. For a local server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish on GitHub Pages

1. Repository: <https://github.com/farhanmugdho/portfolio>
2. On GitHub: **Settings → Pages → Build and deployment**.
   - **Source:** Deploy from a branch
   - **Branch:** `main` · **Folder:** `/ (root)`
   - Save.

The site goes live at `https://farhanmugdho.github.io/portfolio/` in a minute or two.

> Tip: if you rename the repository to `farhanmugdho.github.io`, the site is served at
> `https://farhanmugdho.github.io/` with no sub-path.

## Custom domain (optional)

Add a `CNAME` file containing your domain (e.g. `farhanmugdho.com`), then point the DNS records to
GitHub Pages.

## Notes

- To update the CV, replace `cv.pdf` — no HTML changes needed.
- The site respects `prefers-color-scheme` (dark/light) and `prefers-reduced-motion`.
- Project cards are driven by the `P` array near the bottom of `index.html`; edit that list to add or
  change projects.
