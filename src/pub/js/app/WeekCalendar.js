/**=======================================================================
 * Khởi tạo giao diện
 * @param {*} calendar 
 * @param {*} element 
 ========================================================================*/
function createCalendar(calendar, element, adjuster) {
    //Nhận cài đặt từ options
    if (typeof adjuster !== 'undefined') {
        var newDate = new Date(calendar.Selected.Year, calendar.Selected.Month, calendar.Selected.DayMonth + adjuster);
        calendar = new Calendar(calendar.Model, calendar.Options, newDate);
        element.innerHTML = '';
    } else {
        for (var key in calendar.Options) {
            typeof calendar.Options[key] != 'function' && typeof calendar.Options[key] != 'object' && calendar.Options[key] ? element.className += " " + key + "-" + calendar.Options[key] : 0;
        }
    }
    var labelsList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var daysList = [];
    // ============================
    console.log(calendar);
    // ============================
    var months = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var firstDayWeek;
    var day = [ firstDayWeek, , , , , , lastDayweek];
    var lastDayweek;

    function AddDateTime() {
        var datetime = document.createElement('div');
        datetime.className += "cld-datetime";
        if (calendar.Options.NavShow && !calendar.Options.NavVertical) {
            var rwd = document.createElement('div');
            rwd.className += " cld-rwd cld-nav";
            rwd.addEventListener('click', function () { 
                calendar.Selected.DayMonth -= 7;
                console.log(calendar);
                createCalendar(calendar, element, 0);
            });
            rwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,50 75,0 75,100"></polyline></svg>';
            datetime.appendChild(rwd);
        }
        var today = document.createElement('div');
        today.className += ' today';
        
        GetWeek(calendar.Selected);
        today.innerHTML = firstDayWeek.getDate() + " " + months[firstDayWeek.getMonth()] + " - " + lastDayWeek.getDate() + " " + months[lastDayWeek.getMonth()] + " " + calendar.Selected.Year;
        datetime.appendChild(today);
        if (calendar.Options.NavShow && !calendar.Options.NavVertical) {
            var fwd = document.createElement('div');
            fwd.className += " cld-fwd cld-nav";
            fwd.addEventListener('click', function () {
                calendar.Selected.DayMonth += 7;
                console.log(calendar);
                createCalendar(calendar, element, 0);
            });
            fwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,0 75,50 0,100"></polyline></svg>';
            datetime.appendChild(fwd);
        }
        document.getElementById('datetime').innerHTML = "";
        document.getElementById('datetime').appendChild(datetime);
    }

    function GetWeek(SelectedDay){
        firstDayWeek = new Date(SelectedDay.Year, SelectedDay.Month, SelectedDay.DayMonth - SelectedDay.DayWeek + 1);
        day[2] = new Date(SelectedDay.Year, SelectedDay.Month, SelectedDay.DayMonth - SelectedDay.DayWeek + 2);
        day[3] = new Date(SelectedDay.Year, SelectedDay.Month, SelectedDay.DayMonth - SelectedDay.DayWeek + 3);
        day[4] = new Date(SelectedDay.Year, SelectedDay.Month, SelectedDay.DayMonth - SelectedDay.DayWeek + 4);
        day[5] = new Date(SelectedDay.Year, SelectedDay.Month, SelectedDay.DayMonth - SelectedDay.DayWeek + 5);
        day[6] = new Date(SelectedDay.Year, SelectedDay.Month, SelectedDay.DayMonth - SelectedDay.DayWeek + 6);
        lastDayWeek = new Date(SelectedDay.Year, SelectedDay.Month, SelectedDay.DayMonth - SelectedDay.DayWeek + 7);
    }

    function AddWeek() {
        // for (var i = calendar.Selected.DayMonth - calendar.Selected.DayWeek + 1; i <= calendar.Selected.DayMonth + 7 - calendar.Selected.DayWeek; i++) {
        //     daysList.push(i);
        // }
        for(var i = 0; i < 7; i++){
            day[i] = new Date(calendar.Selected.Year, calendar.Selected.Month, calendar.Selected.DayMonth - calendar.Selected.DayWeek + 1 + i);
        }

        var rowDay = document.createElement('div');
        rowDay.className += "row-day-info";

        var rowButton = document.createElement('div');
        rowButton.className += "row-button";

        var rowEvent = document.createElement('div');
        rowEvent.className += "row-events";

        // Add data
        for (var i = 0; i < 7; i++) {
            var days = document.createElement('div');
            days.className = "day-one-week";

            var top = document.createElement('div');
            top.className = "right-top-side";

            var bottom = document.createElement('div');
            bottom.className = "right-bottom-side";

            // Add day in month
            var dayNum = document.createElement('div');
            dayNum.className += "day-number";

            if (day[i].getDate() == calendar.Today.getDate() && calendar.Selected.Month == calendar.Today.Month && calendar.Selected.Year == calendar.Today.Year) {
                days.className += " today";
            }
            dayNum.innerHTML = day[i].getDate();
            days.appendChild(dayNum);
            // Add day in week
            var dayNo = document.createElement('div');
            dayNo.className += "day-in-week";
            dayNo.innerHTML = labelsList[i];
            top.appendChild(dayNo);

            // Add month
            var month = document.createElement('div');
            month.className += "month";
            month.innerHTML = months[day[i].getMonth()];
            bottom.appendChild(month);

            rowDay.appendChild(days);
            days.appendChild(top);
            days.appendChild(bottom);
        }
        // Add button 
        for (var i = 0; i < 7; i++) {
            var area = document.createElement('div');
            area.className += "create-task-area";
            var btnAddContent = document.createElement('div');
            btnAddContent.className += "btn-add-content";
            var btnShowJournal = document.createElement('div');
            btnShowJournal.className += "btn-show-journal";
            var iAddContent = document.createElement('div');
            iAddContent.className += "icon-add-content";
            var iShowJournal = document.createElement('div');
            iShowJournal.className += "icon-journal";

            rowButton.appendChild(area);
            area.appendChild(btnAddContent);
            area.appendChild(btnShowJournal);
            btnShowJournal.appendChild(iShowJournal);
            btnAddContent.appendChild(iAddContent);
        }
        // Add column 
        for (var i = 0; i < 7; i++) {
            var eventColumn = document.createElement('div');
            eventColumn.className += "event-list";
            rowEvent.appendChild(eventColumn);
        }
        element.appendChild(rowDay);
        element.appendChild(rowButton);
        element.appendChild(rowEvent);

    }

    // AddMonths();
    AddWeek();
    AddDateTime();
    // AddData();
    // AddDays();\
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