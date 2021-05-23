function onReady(callback) {
    var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 3000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'flex' : 'none';
}

function showLoading() {
    onReady(function () {
        setVisible('.content', true);
        setVisible('.loader-wrapper', false);
    });
}