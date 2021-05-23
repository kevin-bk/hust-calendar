
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function solar2Lunar() {
    const sDay = document.getElementById('solar2lunar-btn').value;
    if (sDay) {
        var res = convertSolar2Lunar(parseInt(sDay.slice(8, 10)), parseInt(sDay.slice(5, 7)), parseInt(sDay.slice(0, 4)), 7.0)
        let now = new Date(sDay);
        document.getElementById('solar2lunar').innerHTML = weekDays[now.getDay()] + ', ' + res[2] + '-' + res[1] + '-' + res[0];
    }
}

function lunar2solar() {
    const sDay = document.getElementById('lunar2solar-btn').value;
    if (sDay) {
        var res = convertLunar2Solar(parseInt(sDay.slice(8, 10)), parseInt(sDay.slice(5, 7)), parseInt(sDay.slice(0, 4)), leapYear(parseInt(sDay.slice(0, 4))) ,7.0)
        let now = new Date('' + res[0] + '-' + res[1] + '-' + res[2]);
        document.getElementById('lunar2solar').innerHTML = weekDays[now.getDay()] + ', ' + res[2] + '-' + res[1] + '-' + res[0];
    }
}