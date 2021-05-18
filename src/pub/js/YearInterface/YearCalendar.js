/**=======================================================================
 * Khởi tạo giao diện
 * @param {*} calendar 
 * @param {*} element 
 ========================================================================*/
function createCalendar(calendar, element, adjuster) {
    //Nhận cài đặt từ options
    if (typeof adjuster !== 'undefined') {
        var newDate = new Date(calendar.Selected.Year, calendar.Selected.Month + adjuster, 1);
        calendar = new Calendar(calendar.Model, calendar.Options, newDate);
        element.innerHTML = '';
    } else {
        for (var key in calendar.Options) {
            typeof calendar.Options[key] != 'function' && typeof calendar.Options[key] != 'object' && calendar.Options[key] ? element.className += " " + key + "-" + calendar.Options[key] : 0;
        }
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Tạo thẻ + class - nghiên cứu đối tượng động html
    var mainSection = document.createElement('div');
    mainSection.className += "cld-main";

    // Tạo thẻ chuyển năm 
    function AddDateTime() {
        // clear 
        // document.getElementById('datetime').remove();

        var datetime = document.createElement('div');
        datetime.className += "cld-datetime";
        if (calendar.Options.NavShow && !calendar.Options.NavVertical) {
            var rwd = document.createElement('div');
            rwd.className += " cld-rwd cld-nav";
            rwd.addEventListener('click', function () { createCalendar(calendar, element, -12); });
            rwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,50 75,0 75,100"></polyline></svg>';
            datetime.appendChild(rwd);
        }
        var today = document.createElement('div');
        today.className += ' today';
        today.innerHTML = calendar.Selected.Year;
        datetime.appendChild(today);
        if (calendar.Options.NavShow && !calendar.Options.NavVertical) {
            var fwd = document.createElement('div');
            fwd.className += " cld-fwd cld-nav";
            fwd.addEventListener('click', function () { createCalendar(calendar, element, 12); });
            fwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,0 75,50 0,100"></polyline></svg>';
            datetime.appendChild(fwd);
        }
        document.getElementById('datetime').innerHTML = "";
        document.getElementById('datetime').appendChild(datetime);
    }
    // Tạo thẻ các tháng trong năm
    function AddMonths() {
        for (var i = 0; i < months.length; i++) {
            var month = document.createElement('div');
            month.className += "month-in-year";
            month.id += i;
            month.innerHTML = months[i];
            mainSection.appendChild(month);
            AddLabels(month.id);
            AddDays(month.id);
        }
        document.getElementById('year-view').appendChild(mainSection);
    }

    // Tạo thẻ các thứ trong tuần
    function AddLabels(id) {
        var labels = document.createElement('ul');
        labels.className = 'cld-labels';
        var labelsList = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        for (var i = 0; i < labelsList.length; i++) {
            var label = document.createElement('li');
            label.className += "cld-label";
            label.innerHTML = labelsList[i];
            labels.appendChild(label);
        }
        document.getElementById(id).appendChild(labels);
    }

    // Tạo các ngày trong tháng
    function AddDays(month) {
        var newDate = new Date(calendar.Selected.Year, month, 1);
        calendar = new Calendar(calendar.Model, calendar.Options, newDate);
        // element.innerHTML = '';

        // Create Number Element
        function DayNumber(n) {
            var number = document.createElement('p');
            number.className += "cld-number";
            number.innerHTML += n;
            return number;
        }
        var days = document.createElement('ul');
        days.className += "cld-days";

        // ===============
        // Previous Month's Days
        for (var i = 0; i < (calendar.Selected.FirstDay); i++) {
            var day = document.createElement('li');
            day.className += "cld-day prevMonth";


            var number = DayNumber((calendar.Prev.Days - calendar.Selected.FirstDay) + (i + 1));
            day.appendChild(number);

            days.appendChild(day);
        }
        // =================================
        // Current Month's Days
        for (var i = 0; i < calendar.Selected.Days; i++) {
            var day = document.createElement('li');
            day.className += "cld-day currMonth";

            var number = DayNumber(i + 1);
            // Check Date against Event Dates
            for (var n = 0; n < calendar.Model.length; n++) {
                var evDate = calendar.Model[n].Date;
                var toDate = new Date(calendar.Selected.Year, calendar.Selected.Month, (i + 1));
                if (evDate.getTime() == toDate.getTime()) {
                    number.className += " eventday";
                    var title = document.createElement('span');
                    title.className += "cld-title";
                    if (typeof calendar.Model[n].Link == 'function' || calendar.Options.EventClick) {
                        var a = document.createElement('a');
                        a.setAttribute('href', '#');
                        a.innerHTML += calendar.Model[n].Title;
                        if (calendar.Options.EventClick) {
                            var z = calendar.Model[n].Link;
                            if (typeof calendar.Model[n].Link != 'string') {
                                a.addEventListener('click', calendar.Options.EventClick.bind.apply(calendar.Options.EventClick, [null].concat(z)));
                                if (calendar.Options.EventTargetWholeDay) {
                                    day.className += " clickable";
                                    day.addEventListener('click', calendar.Options.EventClick.bind.apply(calendar.Options.EventClick, [null].concat(z)));
                                }
                            } else {
                                a.addEventListener('click', calendar.Options.EventClick.bind(null, z));
                                if (calendar.Options.EventTargetWholeDay) {
                                    day.className += " clickable";
                                    day.addEventListener('click', calendar.Options.EventClick.bind(null, z));
                                }
                            }
                        } else {
                            a.addEventListener('click', calendar.Model[n].Link);
                            if (calendar.Options.EventTargetWholeDay) {
                                day.className += " clickable";
                                day.addEventListener('click', calendar.Model[n].Link);
                            }
                        }
                        title.appendChild(a);
                    } else {
                        title.innerHTML += '<a href="' + calendar.Model[n].Link + '">' + calendar.Model[n].Title + '</a>';
                    }
                    number.appendChild(title);
                }
            }
            day.appendChild(number);
            // If Today..
            if ((i + 1) == calendar.Today.getDate() && calendar.Selected.Month == calendar.Today.Month && calendar.Selected.Year == calendar.Today.Year) {
                day.className += " today";
            }
            days.appendChild(day);
        }
        // ====================
        // Next Month's Days
        // Always same amount of days in calander
        var extraDays = 13;
        if (days.children.length > 35) { extraDays = 6; }
        else if (days.children.length < 29) { extraDays = 20; }

        for (var i = 0; i < (extraDays - calendar.Selected.LastDay); i++) {
            var day = document.createElement('li');
            day.className += "cld-day nextMonth";

            var number = DayNumber(i + 1);
            day.appendChild(number);

            days.appendChild(day);
        }
        // ================ 
        document.getElementById(month).appendChild(days);
    }
    // ==========================================
    if (calendar.Options.Color) {
        mainSection.innerHTML += '<style>.cld-main{color:' + calendar.Options.Color + ';}</style>';
    }
    element.appendChild(mainSection);

    if (calendar.Options.NavShow && calendar.Options.NavVertical) {
        AddSidebar();
    }

    if (calendar.Options.DateTimeShow) {
        AddDateTime();
    }
    AddMonths();
}




/**=============================================
 * Khởi tạo calendar
 * @param {*} el 
 * @param {*} data 
 * @param {*} settings 
 ==============================================*/
function initCalendar(el, data, settings) {
    // hàm Calendar không nhập date để hệ thống tự lấy ngày hiện tại
    var obj = new Calendar(data, settings);
    createCalendar(obj, el);
}