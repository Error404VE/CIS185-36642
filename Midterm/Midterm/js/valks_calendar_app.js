/*
 * Calender_Math.js
 * Gregorian → Valks calendar conversion logic
 * 
 * Original algorithm and structure written with assistance from ChatGPT
 * (prompts: "help me convert Gregorian dates to a custom 13-month calendar with specific rules")
 * All code reviewed, tested, and modified by Brodie Roberts to fit project requirements.
 * 
 * Purpose: Convert year/month/day → Valks year, month name, and day number
 * Handles leap-year rules and correct month/day offsets
 */

/* ──────────────────────────────────────────────────────────────
   1. Set today's date as default in the input field
   ────────────────────────────────────────────────────────────── */
function setTodayInput() {
    const input = document.getElementById('gdate');
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    input.value = `${yyyy}-${mm}-${dd}`;
}

/* ──────────────────────────────────────────────────────────────
   2. Parse input date and run the actual conversion
   ────────────────────────────────────────────────────────────── */
function parseAndConvert(dateValue) {
    if (!dateValue) return null;
    const [y, m, d] = dateValue.split('-').map(Number);
    if (!y || !m || !d) return null;
    try {
        const result = gregorianToValks(y, m, d);  // main conversion function
        return { result, year: y, month: m, day: d };
    } catch (e) {
        return { error: e.message };
    }
}

/* ──────────────────────────────────────────────────────────────
   3. Display the result (converted date + holiday info)
   ────────────────────────────────────────────────────────────── */
function renderResult(out) {
    const resultEl = document.getElementById('result');
    const breakdown = document.getElementById('breakdown');
    const holidayInfo = document.getElementById('holidayInfo');

    if (!out || out.error) {
        resultEl.innerHTML = out?.error 
            ? `<p class="text-danger">Error: ${out.error}</p>`
            : '<p class="text-muted">No date selected yet.</p>';
        breakdown.textContent = '';
        if (holidayInfo) holidayInfo.textContent = '';
        return;
    }

    resultEl.innerHTML = `<p class="fw-semibold monospace">${out.result}</p>`;
    breakdown.textContent = `Input: ${out.year}-${String(out.month).padStart(2,'0')}-${String(out.day).padStart(2,'0')}`;

    // Check for holidays asynchronously
    const dateStr = `${out.year}-${String(out.month).padStart(2,'0')}-${String(out.day).padStart(2,'0')}`;
    checkHolidayForDate(dateStr).then(h => {
        if (!holidayInfo) return;
        if (h) {
            holidayInfo.innerHTML = `<div class="alert alert-warning p-2 mb-0">Holiday: <strong>${escapeHtml(h.localName || h.name)}</strong> (${h.countryCode})</div>`;
        } else {
            holidayInfo.textContent = '';
        }
    }).catch(() => {
        if (holidayInfo) holidayInfo.textContent = '';
    });
}

/* ──────────────────────────────────────────────────────────────
   4. Holiday API – simple cache + fetch from Nager.Date
   ────────────────────────────────────────────────────────────── */
const holidayCache = {}; // Prevents repeated requests for the same year/country

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, m => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
}

async function fetchHolidays(year, country) {
    const key = `${year}|${country}`;
    if (holidayCache[key] !== undefined) return holidayCache[key];

    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`;
    try {
        const res = await fetch(url);
        const data = res.ok ? await res.json() : null;
        holidayCache[key] = data;
        return data;
    } catch (e) {
        holidayCache[key] = null;
        return null;
    }
}

async function checkHolidayForDate(dateStr) {
    const country = document.getElementById('countrySelect')?.value || 'US';
    const year = dateStr.split('-')[0];
    const holidays = await fetchHolidays(year, country);
    return holidays?.find(h => h.date === dateStr) || null;
}

/* ──────────────────────────────────────────────────────────────
   5. Page load – wire up buttons and auto-run on today’s date
   ────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    const dateInput = document.getElementById('gdate');
    const btnConvert = document.getElementById('btnConvert');
    const btnToday = document.getElementById('btnToday');
    const btnSample = document.getElementById('btnSample');

    setTodayInput();                          // Show today by default

    btnConvert.addEventListener('click', () => renderResult(parseAndConvert(dateInput.value)));
    dateInput.addEventListener('change', () => renderResult(parseAndConvert(dateInput.value))); // Mobile-friendly auto-convert

    btnToday.addEventListener('click', () => {
        setTodayInput();
        renderResult(parseAndConvert(dateInput.value));
    });

    btnSample.addEventListener('click', () => {
        dateInput.value = '1915-12-31';
        renderResult(parseAndConvert('1915-12-31'));
    });

    // Initial conversion when page loads
    renderResult(parseAndConvert(dateInput.value));
});