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