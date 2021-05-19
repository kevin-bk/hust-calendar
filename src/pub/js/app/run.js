// Calendar selector
const WEEK_SELECTOR = document.getElementById('week-view');
const MONTH_SELECTOR = document.getElementById('month-view');
const YEAR_SELECTOR = document.getElementById('year-view');
const CSS_SELECTOR = document.getElementById('calendar-css');
const JS_SELECTOR = document.getElementById('calendar-js');
const WEEK_BUTTON_SELECTOR = document.getElementById('view-week');
const MONTH_BUTTON_SELECTOR = document.getElementById('view-month');
const YEAR_BUTTON_SELECTOR = document.getElementById('view-year');

// Link css for week, month, year view
const WEEK_CSS = "/css/theme-calendar/content-weekly.css";
const MONTH_CSS = "/css/theme-calendar/month.css";
const YEAR_CSS = "/css/theme-calendar/year.css";

const WEEK_JS = '/js/app/WeekCalendar.js';
const MONTH_JS = '/js/app/MonthCalendar.js';
const YEAR_JS = '/js/app/YearCalendar.js';

var events = [];
var settings = {};

// Clear view
function clearCalendar() {
    WEEK_SELECTOR.innerHTML = '';
    MONTH_SELECTOR.innerHTML = '';
    YEAR_SELECTOR.innerHTML = '';
}

// Update lại data trong calendar
var weekCache = false;
function updateCalendar(element, cssLink, jsLink) {
    clearCalendar();
    // change css style
    CSS_SELECTOR.href = cssLink;
    // change js source
    script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', jsLink);
    script.onload = function(){
        initCalendar(element, events, settings);
      };
    JS_SELECTOR.innerHTML = '';
    JS_SELECTOR.appendChild(script);
}

// init and add event to DOM
updateCalendar(WEEK_SELECTOR, WEEK_CSS, WEEK_JS);
WEEK_BUTTON_SELECTOR.onclick = function() {
    updateCalendar(WEEK_SELECTOR, WEEK_CSS, WEEK_JS);
}
MONTH_BUTTON_SELECTOR.onclick = function() {
    updateCalendar(MONTH_SELECTOR, MONTH_CSS, MONTH_JS);
}
YEAR_BUTTON_SELECTOR.onclick = function() {
    updateCalendar(YEAR_SELECTOR, YEAR_CSS, YEAR_JS);
}
