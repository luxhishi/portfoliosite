# Isaiah Palma | Developer

A responsive static portfolio for Isaiah Palma, showcasing selected work, technical experience, education, and contact information.

## Pages

- `/` — Home page with introduction, services, selected projects, and contact section
- `/projects/` — Filterable project directory
- `/projects/stylex/` — Stylex project details
- `/projects/safetyfirst-vr/` — SafetyFirst VR project details
- `/projects/ireply-internal-recruitment-platform/` — IReply internal recruitment platform details
- `/projects/devmax/` — DevMax project details
- `/about/` — Biography, work experience, and education
- `/contact/` — Contact form and direct email link

## Projects

- Stylex — Flutter digital wardrobe application with Supabase and image recognition
- SafetyFirst VR — Unity safety training experience for Meta VR headsets
- IReply Internal Recruitment Platform — Self-hosted applicant tracking platform
- DevMax — Django and Tailwind CSS coding forum platform

## Run locally

From the project folder, start a local static server:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Customize

- Update page content in the HTML files.
- Add or replace project images in `Images/`.
- Add or replace biography images in `Images/Biography/`.
- Adjust the site-wide colors in `styles.css` and `theme-overrides.css`.
- The primary accent color is `#FD3DB5`.
- Contact email: `palmaisaiah.d@gmail.com`.

## Deploy to Vercel

This is a static HTML, CSS, and JavaScript site. Import the project into Vercel and leave the build command empty. Use the project root as the root directory.

Vercel will provide a free `.vercel.app` address after deployment. A custom domain such as `isaiahpalma.site` can be connected later by registering the domain and configuring its DNS records in Vercel.
