const SEARCH_PAGE = '/search';
const APP_PAGE = '/app';
const EVENT_PAGE = '/app/events';
const TODO_PAGE = '/app/todo-list';
const FOLLOW_PAGE = '/app/followed/events';
const USER_PAGE = '/app/followed/users';

var path = location.pathname;
var active = document.getElementsByClassName('sub-item');
switch (path) {
    case SEARCH_PAGE: active[0].classList.add('item-active'); break;
    case APP_PAGE: active[1].classList.add('item-active'); break;
    case EVENT_PAGE: active[2].classList.add('item-active'); break;
    case TODO_PAGE: active[3].classList.add('item-active'); break;
    case FOLLOW_PAGE: active[4].classList.add('item-active'); break;
    case USER_PAGE: active[5].classList.add('item-active'); break;
}
