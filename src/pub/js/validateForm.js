function validateForm() {
    return true;
    var name, date, start, end;
    var nameText, dateText, startText, endText;

    // Get the value of the input field with id="name" and validate
    name = document.getElementById("name").value;
    if (!isNaN(name)) {
        nameText = "Title can not be empty";
        document.getElementById("vld-name").innerHTML = nameText;
        return false;
    } else {
        nameText = "";
    }
    document.getElementById("vld-name").innerHTML = nameText;

    // Get the value of the input field with id="date" and validate
    date = document.getElementById("date").value;
    if (!isNaN(date)) {
        dateText = "Date can not be empty";
        document.getElementById("vld-date").innerHTML = dateText;
        return false;
    } else {
        dateText = "";
    }
    document.getElementById("vld-date").innerHTML = dateText;
    // Get the value of the input field with id="date" and validate
    start = document.getElementById("timeStart").value;
    if (!isNaN(start)) {
        startText = "Time start can not be empty";
        document.getElementById("vld-time-start").innerHTML = startText;
        return false;
    } else {
        startText = "";
    }
    document.getElementById("vld-time-start").innerHTML = startText;
    // Get the value of the input field with id="date" and validate
    end = document.getElementById("timeEnd").value;
    if (!isNaN(end)) {
        endText = "Time end can not be empty";
        document.getElementById("vld-time-end").innerHTML = endText;
        return false;
    } else {
        endText = "";
    }
    document.getElementById("vld-time-end").innerHTML = endText;

    return true;
}
