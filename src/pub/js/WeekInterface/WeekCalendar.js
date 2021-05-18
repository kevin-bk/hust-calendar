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
    var labelsList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var daysList = [];
    // ============================
    console.log(calendar);
    // ============================


    function AddWeek() {
        for (var i = calendar.Selected.DayMonth - calendar.Selected.DayWeek + 1; i <= calendar.Selected.DayMonth + 7 - calendar.Selected.DayWeek; i++) {


            daysList.push(i);

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

            if (daysList[i] == calendar.Today.getDate() && calendar.Selected.Month == calendar.Today.Month && calendar.Selected.Year == calendar.Today.Year) {
                days.className += " today";
            }
            dayNum.innerHTML = daysList[i];
            days.appendChild(dayNum);
            // Add day in week
            var dayNo = document.createElement('div');
            dayNo.className += "day-in-week";
            dayNo.innerHTML = labelsList[i];
            top.appendChild(dayNo);

            // Add month
            var month = document.createElement('div');
            month.className += "month";
            month.innerHTML = "May";
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