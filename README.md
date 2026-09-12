# Altitude Robotics — complete HTML website

This export preserves the current website's design, wording and media. Each page contains its full content in its own HTML file, with normal links between pages. No build system, package installation, server-side rendering or Sites account is needed to run it. The original live site has not been modified.

## Open locally

Unzip the archive, then open `index.html` in your browser. Keep the HTML files, `style.css`, `app.js` and `assets` folder together. You can also open any other HTML file directly.

For a local HTTP preview, run `python3 -m http.server 8000` from the extracted folder and open `http://localhost:8000`.

## GitHub → Vercel

1. Create your GitHub repository and upload the **contents** of this folder. `index.html` and `vercel.json` should be at the repository root, alongside `assets/`.
2. Import that repository into Vercel.
3. Use the **Other** framework preset, an empty Build Command, and `.` as the Output Directory. The included `vercel.json` supplies these settings. No environment variables or dependency installation are required.
4. Deploy. Each HTML file has its own URL, such as `/commercial.html` and `/company.html`.

If you upload this entire folder inside another repository folder, set Vercel's Root Directory to the folder containing `index.html`.

The package does not use a single-page-app fallback or a rewrite that redirects every request to the homepage. Keep the `.html` links intact. Relative paths also allow hosting in a GitHub Pages project subdirectory.

Configuration reference: [Vercel static build settings](https://vercel.com/docs/builds/configure-a-build#skip-build-step) and [vercel.json settings](https://vercel.com/docs/project-configuration/vercel-json).

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `commercial.html` | Façade / high-rise service |
| `industrial.html` | Industrial service |
| `residential.html` | Commercial / low-rise service (filename retained for compatibility) |
| `solar-panels.html` | Solar panel service |
| `company.html` | Company |
| `safety-permits.html` | Compliance and permits (main Resources navigation) |
| `resources.html` | Cleaning guides |
| `pure-water.html` | Pure water guide |
| `site-preparation.html` | Site preparation guide |
| `get-a-quote.html` | Quote enquiry preview |
| `request-a-demo.html` | Demo enquiry preview |
| `cleaning-video.html` | Reference cleaning film |

## Editing

- Edit the relevant HTML file to update a page's content.
- `style.css` controls the shared appearance. The colour remains `#39FF14`.
- `app.js` handles dropdowns, the mobile menu, video controls and enquiry previews. Navigation uses ordinary HTML links.
- Header and footer markup is included in each HTML file; apply shared navigation changes to all pages.
- Images and the current MP4 are bundled in `assets/`. Each image/video has a real `src` in the HTML. Replace a media file using the same filename to update every page that uses it, or update the relevant `src` and `poster` attributes.
- The existing Inter and Poppins fonts still load from Google Fonts; offline viewing uses the existing system-font fallbacks.
- Core content and links remain available with JavaScript disabled. Video buttons and menu toggles use JavaScript; the footer provides direct service links.

## Existing preview features preserved

The quote and demo forms are **preview only**. They validate fields and display the existing local confirmation, but do not send email or save leads. Service-specific quote links preselect the service. Connect a form endpoint before collecting real enquiries; no backend has been added by this export.

Client logos, feedback and the permit document remain placeholders. Commercial and homepage footage remains the existing reference video; industrial, residential and solar hero sections retain their current image placeholders. Reference labels and image credits are preserved. See `ASSET-CREDITS.md` and `asset-sources.json`.

The original `noindex,nofollow` meta tags remain in each page, preserving the draft's search-indexing setting. Remove those tags from the HTML files when you deliberately launch an indexable website.

No source-repository credentials, deployment credentials, private hosting metadata or unrelated project files are included.
