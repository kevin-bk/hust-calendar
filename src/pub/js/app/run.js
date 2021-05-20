// Calendar selector
const WEEK_SELECTOR = document.getElementById('week-view');
const MONTH_SELECTOR = document.getElementById('month-view');
const YEAR_SELECTOR = document.getElementById('year-view');
const CSS_SELECTOR = document.getElementById('calendar-css');
const JS_SELECTOR = document.getElementById('calendar-js');
const WEEK_BUTTON_SELECTOR = document.getElementById('view-week');
const MONTH_BUTTON_SELECTOR = document.getElementById('view-month');
const YEAR_BUTTON_SELECTOR = document.getElementById('view-year');
const TODAY_BUTTON_SELECTOR = document.getElementById('view-today');
const ADD_EVENT_BUTTON = document.getElementById('add-event');

// Link css for week, month, year view
const WEEK_CSS = "/css/theme-calendar/week.css";
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
    WEEK_BUTTON_SELECTOR.classList.remove('btn-active');
    MONTH_BUTTON_SELECTOR.classList.remove('btn-active');
    YEAR_BUTTON_SELECTOR.classList.remove('btn-active');
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
WEEK_BUTTON_SELECTOR.onclick = function() {
    updateCalendar(WEEK_SELECTOR, WEEK_CSS, WEEK_JS);
    WEEK_BUTTON_SELECTOR.classList.add('btn-active');
}
MONTH_BUTTON_SELECTOR.onclick = function() {
    updateCalendar(MONTH_SELECTOR, MONTH_CSS, MONTH_JS);
    MONTH_BUTTON_SELECTOR.classList.add('btn-active');
}
YEAR_BUTTON_SELECTOR.onclick = function() {
    updateCalendar(YEAR_SELECTOR, YEAR_CSS, YEAR_JS);
    YEAR_BUTTON_SELECTOR.classList.add('btn-active');
}
TODAY_BUTTON_SELECTOR.onclick = function() {
    WEEK_BUTTON_SELECTOR.click();
}
// Go to today
TODAY_BUTTON_SELECTOR.click();

// Add event button. Display add event form when click, and hide when cancel
ADD_EVENT_BUTTON.onclick = function() {
    document.getElementById('form-modal').style.display = 'block';
    document.getElementById('cancel-add-event').onclick = function() {
        document.getElementById('form-modal').style.display = 'none';
    }
}
