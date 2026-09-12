# Altitude Robotics service-page update

This package keeps the existing static-site structure and asset paths. It updates the four service categories to:

1. Façade / High-rise (`commercial.html`)
2. Solar (`solar-panels.html`)
3. Industrial (`industrial.html`)
4. Commercial / Low-rise (`residential.html`, filename retained so existing links do not break)

It also updates `company.html` with a two-person team section and adds the solar ROI calculator.

## Deploy

Copy these files over the matching files in your existing GitHub repository and keep your existing `assets/` folder. The uploaded source set did not include the binary assets folder, so it is intentionally not duplicated here. `index.html`, `style.css` and `app.js` should remain at repository root beside `assets/`. Vercel can deploy the site as a static project with no build step.

## Claims

The new comparison blocks intentionally do not invent S$/m², wind, standoff, productivity or height figures. Those fields are described as site-validated until approved operating data exists.

## Readability pass
- Increased contrast and visual separation across all four service pages.
- Added alternating section backgrounds, bordered content blocks and clearer table hierarchy.
- Made Scope / Operating Limits visually distinct.
- Turned process steps into individual cards and highlighted the digital deliverable section with a dark treatment.
- No service wording or page structure changed in this pass.
