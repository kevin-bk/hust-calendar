function show_search(){            
    var search_box = document.querySelector('#modal-search');
    if(search_box.style.display == 'none'){
        search_box.style.display = 'block';
    } else {
        search_box.style.display = 'none';
    }
}
// function dateConvert(date) {
//     Date d = new Date(date);
//     var s = d.getDay() +" ";
//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
//     s += weekday[d.getDay()] +" ";
//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
//     s += month[d.getMonth()];
//     return s;
// }

var search = document.querySelector('#searching');
function startSearch(e){
    var httpReq = new XMLHttpRequest();
    if(httpReq) {
        httpReq.onreadystatechange = function(){
            if(httpReq.readyState == 4 && httpReq.status == 200) {
                var events = JSON.parse(httpReq.response);
                var q = search.value;
                let result_search = [];
                for(let i = 0; i < events.length; i++){
                    if( events[i].name.toLowerCase().indexOf(q.toLowerCase()) != -1) {
                        result_search.push(events[i])
                    }
                }
                var div = document.getElementById('result-search');
                var ul = document.getElementById('lists');
                div.removeChild(ul);
                ul = document.createElement('UL');
                ul.id = 'lists';
                var li, n;
                console.log(result_search);
                for(let i = 0; i < result_search.length; i++){
                    const n = `<div class="row">
                                    <div class="col3" >${result_search[i].date}</div>
                                    <div class="col9" >
                                        <div class="time">${result_search[i].timeStart}-${result_search[i].timeEnd}</div> <div>${result_search[i].name}</div>
                                    </div>
                                </div>`;
                    li = document.createElement('LI');
                    li.classList.add('item');
                    li.innerHTML = n;
                    ul.appendChild(li);
                }
                div.appendChild(ul);
            }
        }
        httpReq.open('GET', 'http://localhost:3000/api/searchName', true);
        httpReq.send();
    }
}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('modal-search');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('modal-setting');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('modal-profile');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});