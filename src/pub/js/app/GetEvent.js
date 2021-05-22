/**====================================================
 * Load sự kiện trong ngày 
 * @param {*} date : Ngày cần load sự kiện
 * @returns events : Danh sách event có trong ngày Date
 ======================================================*/
function GetEvent(date) {
    var eventData = [
        {
            title: "ev1",
            date: "Sun May 23 2021 00:00:00 GMT+0700 (Giờ Đông Dương)",
            timeStart: "03:38",
            timeEnd: "04:38",
        },
        {
            title: "ev2",
            date: "Sat May 01 2021 00:00:00 GMT+0700 (Giờ Đông Dương)",
            timeStart: "03:38",
            timeEnd: "04:38",
        },
        {
            title: "ev3",
            date: "Mon Apr 26 2021 00:00:00 GMT+0700 (Giờ Đông Dương)",
            timeStart: "03:38",
            timeEnd: "04:38",
        },
        {
            title: "ev4",
            date: "Sun Apr 25 2021 00:00:00 GMT+0700 (Giờ Đông Dương)",
            timeStart: "03:38",
            timeEnd: "04:38",
        },
    ];
    var events = [];
    // console.log(date);
    // console.log(eventData);
    for (var i = 0; i < eventData.length; i++) {
        // console.log(eventData[i]);
        if (date == eventData[i].date) {
            events.push(eventData[i]);
        }
    };
    // console.log(events);
    return events;
}
