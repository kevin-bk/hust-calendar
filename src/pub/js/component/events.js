const LIST_EVENTS = document.getElementById('list-events');

function loadEvent(url, method, text) {
    fetch('/api/event/' + url)
        .then(res => res.json())
        .then(events => {
            var htmls = events.map(event => {
                return '<ul class="event-list">' +
                    '        <li>' +
                    '            <time>' +
                    `                <span class="day">${getDay(event.date)}</span>` +
                    `                <span class="month">${getMonth(event.date)}</span>` +
                    `                <span class="year">${getYear(event.date)}</span>` +
                    '            </time>' +
                    `            <img src="${event.image}" onerror='this.src="/img/welcome.jpg"'/>` +
                    '            <div class="info">' +
                    `                <h2 class="title">${event.name}</h2>` +
                    `                <p class="desc">${event.description}</p>` +
                    '                <div class="social-icons">' +
                    '                    <div class="icon">' +
                    '                        <a href="/"><i class="fas fa-user-check"></i></a> ' +
                    `                        <h4>${count(event.followers)}</h4> ` +
                    '                        <p>Followers</p> ' +
                    '                    </div>   ' +
                    '                    <div class="nut-bam">' +
                    '                        <div>' +
                    `                            <button onclick="${method}(this)" data-event="${event._id}" id="follow-btn">${text}</button>` +
                    '                        </div>' +
                    '                    </div>' +
                    '                </div>' +
                    '            </div>' +
                    '        </li>' +
                    '    </ul>';
            })

            LIST_EVENTS.innerHTML = htmls.join('');
        })
}

function follow(elm) {
    const data = {
        eventId: elm.dataset.event
    }

    fetch('/api/event/follow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => loadEvent('get-all', 'follow', 'Follow'));

}

function unFollow(elm) {
    const data = {
        eventId: elm.dataset.event
    }

    fetch('/api/event/un-follow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => loadEvent('get-followed', 'unFollow', 'Un Follow'));
}
