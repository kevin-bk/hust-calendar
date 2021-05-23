function dateToString(d) {
    const date = new Date(d);
    return ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + 
    '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) +
    '-' + date.getFullYear();
}

function getDay(d) {
    const date = new Date(d);
    return (date.getDate() > 9) ? date.getDate() : ('0' + date.getDate());
}

function getMonth(d) {
    const date = new Date(d);
    const MONTH = [0, 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const m = (date.getMonth() > 8) ? (date.getMonth() + 1) : ((date.getMonth() + 1));
    return MONTH[m];
}

function getYear(d) {
    const date = new Date(d);
    return date.getFullYear();
}

function count(arr) {
    return arr.length;
}
