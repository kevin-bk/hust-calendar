/**====================================================
 * Load sự kiện trong ngày 
 * @param {*} date : Ngày cần load sự kiện
 * @returns events : Danh sách event có trong ngày Date
 ======================================================*/
async function GetEvent(date) {
    let res = false;
    await fetch('/api/event/get-in-date?date=' + dateToString(date))
        .then(res => res.json())
        .then(events => {
            if (events) res = events;
            else res = false;
        });

    var eventData = res.map(e => {
        let event = {};
        event.title = e.name;
        event.timeStart = e.timeStart;
        event.timeEnd = e.timeEnd;
        return event;
    })
    return eventData;
}
