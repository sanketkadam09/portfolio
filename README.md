# Sanket Kadam — Developer Portfolio

React 18 + Vite portfolio. Only two runtime dependencies besides React: `lucide-react` (icons) and nothing else.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

## Resume

`public/resume.pdf` is already your resume (copied from the file you provided). To update it, replace that file, keeping the name `resume.pdf`. The navbar and hero buttons point to `/resume.pdf`.

## Updating content

Everything lives in `src/data/portfolioData.js`:

- **Contact details:** `profile` (email, phone, phoneHref, location)
- **Profile links:** `social` (GitHub, LinkedIn, LeetCode)
- **Skills, experience, education, achievements:** `skillGroups`, `experience`, `education`, `achievements`, `certifications`
- **Projects:** the `projects` array. Each project has `repo`, `tech`, `features`, and `filters` (`ai`, `backend`, `fullstack`).
- **Live demos:** add `demoUrl: 'https://…'` to a project. A "Live Demo" button appears only when this field exists. None are set today because no real deployments were provided.

Project visuals are CSS-built illustrations (`src/components/ProjectPreview.jsx`), labelled as previews, not screenshots. To use real screenshots, add images to `src/assets/` and swap them in.

## Contact form

By default the form validates input and opens the visitor's email app via `mailto:` (it says plainly that nothing has been sent yet).

To send directly from the site with EmailJS:

1. Create an EmailJS account, an Email Service, and a Template.
2. Template variables used: `from_name`, `from_email`, `subject`, `message`, `to_email`.
3. Create `.env` in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart the dev server / rebuild. Success is shown only if EmailJS returns OK.

## Deploying

`npm run build`, then upload `dist/` to Netlify, Vercel, GitHub Pages or any static host.
