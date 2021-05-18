var events = []
var settings = {}
var element = document.getElementById('week-view');

initCalendar(element, events, settings);


// function AddWeek() {
//     var rowDay = document.createElement('div');
//     rowDay.className += "row-day-info";

//     var rowButton = document.createElement('div');
//     rowButton.className += "row-button";

//     var rowEvent = document.createElement('div');
//     rowEvent.className += "row-events";

//     var labelsList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     var daysList = [11, 12, 13, 14, 15, 16, 17];
//     for (var i = 0; i < 7; i++) {
//         var days = document.createElement('div');
//         days.className = "day-one-week";

//         var top = document.createElement('div');
//         top.className = "right-top-side";

//         var bottom = document.createElement('div');
//         bottom.className = "right-bottom-side";

//         // Add day in month
//         var dayNum = document.createElement('div');
//         dayNum.className += "day-number";
//         dayNum.innerHTML = daysList[i];
//         days.appendChild(dayNum);
//         // Add day in week
//         var dayNo = document.createElement('div');
//         dayNo.className += "day-in-week";
//         dayNo.innerHTML = labelsList[i];
//         top.appendChild(dayNo);
//         // Add month
//         var month = document.createElement('div');
//         month.className += "month";
//         month.innerHTML = "May";
//         bottom.appendChild(month);

//         rowDay.appendChild(days);
//         days.appendChild(top);
//         days.appendChild(bottom);
//     }
//     for(var i = 0; i < 7; i++){
//         var area = document.createElement('div');
//         area.className += "create-task-area";
//         var btnAddContent = document.createElement('div');
//         btnAddContent.className += "btn-add-content";
//         var btnShowJournal = document.createElement('div');
//         btnShowJournal.className += "btn-show-journal";
//         var iAddContent = document.createElement('div');
//         iAddContent.className += "icon-add-content";
//         var iShowJournal = document.createElement('div');
//         iShowJournal.className += "icon-journal";

//         rowButton.appendChild(area);
//         area.appendChild(btnAddContent);
//         area.appendChild(btnShowJournal);
//         btnShowJournal.appendChild(iShowJournal);
//         btnAddContent.appendChild(iAddContent);
//     }

//     for(var i = 0; i < 7; i++){
//         var eventColumn = document.createElement('div');
//         eventColumn.className += "event-list";
//         rowEvent.appendChild(eventColumn);
//     }
//     document.getElementById('week-view').appendChild(rowDay);
//     document.getElementById('week-view').appendChild(rowButton);
//     document.getElementById('week-view').appendChild(rowEvent);
    
// }

// AddWeek();