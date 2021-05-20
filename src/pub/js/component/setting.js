function show_settings() {
    var element = document.getElementById('modal-setting');
    if (element.style.display == 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function open_profile() {
    document.getElementById('modal-profile').style.display = 'block';
    document.getElementById('modal-setting').style.display = 'none';
}

//profile
function myTimeFormat() {
    var x = document.getElementById("time");
    if (x.className.indexOf("g26-show") == -1) {
        x.className += " g26-show";
    } else {
        x.className = x.className.replace("g26-show", "");
    }
}

function setTimeFormat(id) {
    document.getElementById('time-format').innerText = id;
    document.getElementById("time").className =
    document.getElementById("time").className.replace("g26-show", "");
}

function myDateFormat() {
    var x = document.getElementById("date");
    if (x.className.indexOf("g26-show") == -1) {
        x.className += " g26-show";
    } else {
        x.className = x.className.replace("g26-show", "");
    }
}

function setDateFormat(id) {
    document.getElementById('date-format').innerText = id;
    document.getElementById("date").className =
    document.getElementById("date").className.replace("g26-show", "");
}

function myWeekFormat() {
    var x = document.getElementById("week");
    if (x.className.indexOf("g26-show") == -1) {
        x.className += " g26-show";
    } else {
        x.className = x.className.replace("g26-show", "");
    }
}

function setWeekFormat(id) {
    document.getElementById('week-format').innerText = id;
    document.getElementById("week").className =
    document.getElementById("week").className.replace("g26-show", "");
}

function close_profile() {
    document.getElementById('modal-profile').style.display = 'none';
  }
