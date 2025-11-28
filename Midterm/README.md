markdown

# Project Name: Brodie Roberts — Portfolio & Valks Calendar Demo
## CIS 185 - Midterm Project
## Author: Brodie Roberts
## Date: 20-Nov-2025

---

## 1. Project Description
This is my personal portfolio website built for the CIS 185 midterm. It shows off everything I’ve learned this semester: clean HTML, responsive CSS with Bootstrap, and interactive vanilla JavaScript. The main interactive feature is a custom “Valks Calendar” date converter plus a holiday lookup using a public API.

## 2. Target Audience
- Main audience: future employers and hiring managers who want to see real, working code from a junior web developer.  
- Secondary audience: my instructor and classmates checking the project for grading.

The site is set up so anyone reviewing it can quickly see organized code, good accessibility, and working features — exactly what employers look for in an entry-level candidate.

## 3. Main Features
- Fully responsive portfolio homepage with project cards  
- Interactive Valks calendar converter (Gregorian → custom Valks calendar)  
- Holiday lookup using the free Nager.Date API  
- Contact form with proper labels and validation  
- Decorative falling-snow canvas effect on every page  
- Clean multi-page layout (Home, Valks Calendar, Contact, Design Plan)

## 4. Technologies Used
- HTML5 (semantic tags, accessible forms)  
- CSS3 + Bootstrap 5 (grid, utilities, responsive breakpoints)  
- Custom CSS in `css/style.css` and `css/responsive.css`  
- Vanilla JavaScript (date math, API calls, DOM updates)  
- HTML Canvas (snow effect)  
- External CDN: Bootstrap 5  

## 5. File Structure

index.html              → Homepage / portfolio
valks_calendar.html     → Valks calendar converter + holidays
contact.html            → Contact form
design-plan.html        → Wireframes and planning page
css/
   style.css            → Main styling and theme
   responsive.css       → Mobile/tablet fixes
js/
   Calender_Math.js     → Gregorian → Valks conversion logic
   valks_calendar_app.js→ UI + holiday fetch
   snow.js              → Falling snow canvas
   script.js            → Small shared scripts
images/                 → All photos and previews

## 6. Challenges Faced
The hardest part was writing the date-conversion math for the Valks calendar — figuring out leap years and month offsets took a lot of testing. I also spent time making sure the holiday API worked reliably on handful of dates. Both issues were solved with careful step-by-step debugging.

## 7. AI Tools Used
- ChatGPT: Helped me write the calendar conversion math in `Calender_Math.js`  
- ChatGPT: Gave ideas and cleaned up the confirmation + canvas logic for the “Browser Crasher” page  
- GitHub Copilot: Suggested some CSS hover effects and the snow canvas code structure  
All final code was reviewed and edited by me.

## 8. Future Improvements 
- Write unit tests for the calendar math  
- A SQL database for logging in
- Restricted pages for certain login credentials 


## 9. Credits
- Hero/background images:  
  https://images6.alphacoders.com/676/676694.jpg  
  https://media.gettyimages.com/id/1004567278/photo/calendar.jpg  
  https://thumbs.dreamstime.com/b/tv-glitch-psychedelic-noise-background-old-vhs-screen-error-digital-pixel-noise-abstract-design-computer-bug-television-signal-tv-228965490.jpg  
  https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg  
- Snow effect: guided with Copilot suggestions and polished by Brodie Roberts
- Calendar conversion logic: heavily assisted by ChatGPT

Thanks for checking out my project!


