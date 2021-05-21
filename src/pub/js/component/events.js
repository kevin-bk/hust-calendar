const LIST_EVENTS = document.getElementById('list-events');

fetch('/api/event/get-all')
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
                `                            <button data-event="${event._id}" id="follow-btn">Follow us</button>` +
                '                        </div>' +
                '                    </div>' +
                '                </div>' +
                '            </div>' +
                '        </li>' +
                '    </ul>';
        })

        var eventList = document.createElement('div');
        eventList.innerHTML = htmls.join('');
        LIST_EVENTS.appendChild(eventList);
    })
