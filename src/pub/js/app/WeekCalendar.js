/**=================================================================
 * Khởi tạo dữ liệu, lấy data ngày tháng năm
 * @param {*} model : ????
 * @param {cài đặt} options : Các giá trị cài đặt cho dữ liệu
 * @param {today} date : nhập vào giá trị date muốn hiện lịch
 ==================================================================*/
 var Calendar = function (model, options, date) {
    // Khai báo các giá trị mặc định 
    this.Options = {
        // Màu chữ
        Color: '',
        // Hiển thị arrow chuyển ngày, tháng, năm 
        NavShow: true,
        // Hiển thị danh sách tháng - khi enable thì NavShow = false
        NavVertical: false,
        // Hiển thị thẻ ngày, tháng, năm + 2 arrow
        DateTimeShow: true,
        // Định dạng ngày -- không hoạt động ??? 
        DateTimeFormat: 'mmm, yyyy',
        // Danh sách ngày bị disable
        DisableDays: [],
        // I don't know what it is !!! 
        // ModelChange: model

    }
    // Thay đổi các giá trị mặc định (Options)
    for (var key in options) {
        this.Options[key] = typeof options[key] == 'string' ? options[key].toLowerCase() : options[key];
    }

    // ??????
    model ? this.Model = model : this.Model = {};

    // Lấy ngày hnay
    this.Today = new Date();

    this.Selected = this.Today;
    this.Today.Month = this.Today.getMonth();
    this.Today.Year = this.Today.getFullYear();
    this.Today.DayWeek = this.Today.getDay();
    this.Today.DayMonth = this.Today.getDate();
    // Nếu nhập date thì gán giá trị select cho date 
    if (date) {
        this.Selected = date
    }
    this.Selected.Month = this.Selected.getMonth();
    this.Selected.Year = this.Selected.getFullYear();
    this.Selected.DayWeek = this.Selected.getDay();
    this.Selected.DayMonth = this.Selected.getDate();

    // Lấy số ngày trong tháng
    this.Selected.Days = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDate();
    // Lấy thứ đầu của tháng
    this.Selected.FirstDay = new Date(this.Selected.Year, (this.Selected.Month), 1).getDay();
    // Lấy thứ cuối của tháng
    this.Selected.LastDay = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDay();
    // Lấy thứ đầu của tuần


    // Lấy thứ cuối của tuần

    // Tháng trước
    this.Prev = new Date(this.Selected.Year, (this.Selected.Month + 1), 1);
    // Nếu là tháng 1 thì tháng trước = lùi năm 
    if (this.Selected.Month == 0) {
        this.Prev = new Date(this.Selected.Year - 1, 11, 1)
    }
    // Lấy số ngày của tháng trước
    this.Prev.Days = new Date(this.Prev.getFullYear(), (this.Prev.getMonth() + 1), 0).getDate();
}
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
    // console.log(calendar);
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
                // console.log(calendar);
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
                // console.log(calendar);
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