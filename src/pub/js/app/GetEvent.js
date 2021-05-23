/**====================================================
 * Load sự kiện trong ngày 
 * @param {*} date : Ngày cần load sự kiện
 * @returns events : Danh sách event có trong ngày Date
 ======================================================*/
function GetEvent(date) {
    var eventData = selfEvents.filter(e => {
        if (e.date == dateToString(date)) return e;
    })
    return eventData;
}
