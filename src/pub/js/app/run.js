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
const REFRESH_BUTTON = document.getElementById('refresh');

// Link css for week, month, year view
const WEEK_CSS = "/css/theme-calendar/week.css";
const MONTH_CSS = "/css/theme-calendar/month.css";
const YEAR_CSS = "/css/theme-calendar/year.css";

const WEEK_JS = '/js/app/WeekCalendar.js';
const MONTH_JS = '/js/app/MonthCalendar.js';
const YEAR_JS = '/js/app/YearCalendar.js';
const EVENT_JS = '/js/app/GetEvent.js';

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
var currentInterface = WEEK_BUTTON_SELECTOR;
function updateCalendar(element, cssLink, jsLink) {
    clearCalendar();
    // change css style
    CSS_SELECTOR.href = cssLink;
    // change js source
    script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', jsLink);

    script2 = document.createElement('script');
    script2.setAttribute('type', 'text/javascript');
    script2.setAttribute('src', EVENT_JS);

    script.onload = function () {
        initCalendar(element, events, settings);
    };

    JS_SELECTOR.innerHTML = '';
    JS_SELECTOR.appendChild(script);
    JS_SELECTOR.innerHTML = '';
    JS_SELECTOR.appendChild(script2);



    JS_SELECTOR.appendChild(script2);
}

// init and add event to DOM
WEEK_BUTTON_SELECTOR.onclick = function () {
    updateCalendar(WEEK_SELECTOR, WEEK_CSS, WEEK_JS);
    WEEK_BUTTON_SELECTOR.classList.add('btn-active');
    currentInterface = WEEK_BUTTON_SELECTOR;
}
MONTH_BUTTON_SELECTOR.onclick = function () {
    updateCalendar(MONTH_SELECTOR, MONTH_CSS, MONTH_JS);
    MONTH_BUTTON_SELECTOR.classList.add('btn-active');
    currentInterface = MONTH_BUTTON_SELECTOR;
}
YEAR_BUTTON_SELECTOR.onclick = function () {
    updateCalendar(YEAR_SELECTOR, YEAR_CSS, YEAR_JS);
    YEAR_BUTTON_SELECTOR.classList.add('btn-active');
    currentInterface = YEAR_BUTTON_SELECTOR;
}
TODAY_BUTTON_SELECTOR.onclick = function () {
    WEEK_BUTTON_SELECTOR.click();
}
REFRESH_BUTTON.onclick = function() {
    reloadInterface();
}

// Add event button. Display add event form when click, send data and reload page when submit and hide when cancel
ADD_EVENT_BUTTON.onclick = function () {
    document.getElementById('form-modal').style.display = 'block';
    document.getElementById('cancel-add-event').onclick = function (event) {
        event.preventDefault();
        document.getElementById('form-modal').style.display = 'none';
    }

    document.getElementById('submit-add-event').onclick = function (event) {
        event.preventDefault();
        if (!validateForm()) return;
        else {
            const data = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                date: document.getElementById('date').value,
                timeStart: document.getElementById('time-Start').value,
                timeEnd: document.getElementById('time-End').value,
                location: document.getElementById('location').value,
                private: document.getElementById('public').checked,
                done: document.getElementById('done').checked
            }
            fetch('/api/event/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    document.getElementById('form-modal').style.display = 'none';
                    showNotify();
                    reloadInterface();
                })
        }
    }
}

var selfEvents;

async function getSelfEvents() {
    let res;
    await fetch('/api/event/get-self')
        .then(res => res.json())
        .then(data => {
            res = data;
        })
    selfEvents = res.map(e => {
        let event = {};
        event.id = e._id;
        event.title = e.name;
        event.timeStart = e.timeStart;
        event.timeEnd = e.timeEnd;
        event.done = e.done;
        event.day = e.date;
        event.description = e.description;
        event.private = e.private;
        event.location = e.location;
        event.date = dateToString(e.date);
        return event;
    })
}

async function reloadInterface() {
    await getSelfEvents();
    currentInterface.click();
}

async function run() {
    await getSelfEvents();
    WEEK_BUTTON_SELECTOR.click();
}

run();

function showEditModal(elm) {
    document.getElementById('form-modal').style.display = 'block';
    document.getElementById('cancel-add-event').onclick = function (event) {
        event.preventDefault();
        document.getElementById('form-modal').style.display = 'none';
    }

    document.getElementById('name').value = elm.dataset.name;
    var d = new Date(elm.dataset.date);
    document.getElementById('date').value = d.toISOString().substring(0,10);;
    document.getElementById('description').value = elm.dataset.description;
    document.getElementById('time-Start').value = elm.dataset.timestart;
    document.getElementById('time-End').value = elm.dataset.timeend;
    document.getElementById('location').value = elm.dataset.location;
    document.getElementById('public').checked = elm.dataset.public == 'true' ? true : false;
    document.getElementById('done').checked = elm.dataset.done == 'true' ? true : false;

    document.getElementById('submit-add-event').onclick = function (event) {
        event.preventDefault();
        if (!validateForm()) return;
        else {
            const data = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                date: document.getElementById('date').value,
                timeStart: document.getElementById('time-Start').value,
                timeEnd: document.getElementById('time-End').value,
                location: document.getElementById('location').value,
                private: document.getElementById('public').checked,
                done: document.getElementById('done').checked
            }
            fetch('/api/event/edit/' + elm.dataset.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    document.getElementById('form-modal').style.display = 'none';
                    showNotify();
                    reloadInterface();
                })
        }
    }
}