��-# CIS185 Week 2   Portfolio

This repository contains a small single-page portfolio built to satisfy the CIS185 Week 2 requirements.

Files of interest
- `CIS185_W2.html`   main HTML page (semantic markup, sections, form, projects)
- `styles.css`   external stylesheet using CSS variables, Google Font, Flexbox and Grid
- `R.png`   favicon and placeholder images used in the page

How this project meets the required elements

HTML requirements
- Semantic HTML5 elements: `header`, `nav`, `main`, `section`, `article`, and `footer` are used throughout `CIS185_W2.html`.
- Navigation menu: a `<nav>` with an unordered list links to `#about`, `#projects`, and `#contact`.
- Proper heading hierarchy: page includes `h1` (site title), `h2` for sections (About, Projects, Contact), and `h3` for individual project cards.
- Images with alt text: project images and avatar use `img` tags with `alt` attributes (see three project cards in the Projects section).
- At least one form element: a contact form is present under the Contact section with `input` (name, email) and `textarea` for message.

CSS requirements
- External stylesheet: `styles.css` is linked from the HTML head.
- CSS variables: theme variables are defined in `:root` (e.g., `--bg-start`, `--bg-end`, `--accent`) for consistent theming.
- Flexbox and Grid: Flexbox is used for header layout and the hero/form layout; CSS Grid is used for the `projects-grid` to display project cards responsively.
- Custom font: Google Fonts (Inter) is loaded and used in the stylesheet.

Content sections (implemented)
- Header: site title and tagline with navigation links (in `header > nav`).
- Hero/About: an introductory hero section with short bio and avatar image.
- Projects/Work: three project cards (`article.project-card`) with images, headings, and short descriptions.
- Contact: a contact form with name, email, and message fields.
- Footer: copyright and simple footer content.

Notes & next steps
- Images currently use `R.png` as a placeholder; replace with screenshots for each project and update the `alt` text accordingly.
- The contact form is a static form (`action="#"`)   to receive submissions you can add a form backend or use a service like Formspree or Netlify Forms.
- If you'd like the JS and CSS split into separate files (or further build tooling), I can extract or scaffold that.

Preview
- Open `CIS185_W2.html` in your browser to preview locally. Ensure `R.png` and `styles.css` remain in the same folder.

If you'd like I can also prepare a ZIP of this folder or help initialize a Git repository and push to GitHub.

