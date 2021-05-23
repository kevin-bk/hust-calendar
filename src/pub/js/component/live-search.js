function show_search(){            
    var search_box = document.querySelector('#modal-search');
    if(search_box.style.display == 'none'){
        search_box.style.display = 'block';
    } else {
        search_box.style.display = 'none';
    }
}
var search = document.querySelector('#searching');
function startSearch(e){
    var httpReq = new XMLHttpRequest();
    if(httpReq) {
        httpReq.onreadystatechange = function(){
            if(httpReq.readyState == 4 && httpReq.status == 200) {
                var events = JSON.parse(httpReq.responseText);
                console.log(events);
                // var events = httpReq.responseText;
                var div = document.getElementById('result-search');
                var ul = document.getElementById('lists');
                div.removeChild(ul);
                ul = document.createElement('UL');
                ul.id = 'lists';
                var li, n;
                for(let i = 0; i < events.length; i++){
                    const n = `<div class="row">
                                    <div class="col3" >${events[i].day}</div>
                                    <div class="col9" >
                                        <div class="time">${events[i].start}-${events[i].end}</div> <div>${events[i].event}</div>
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
        httpReq.open('GET', 'http://localhost:8888/search?q='+search.value, true);
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