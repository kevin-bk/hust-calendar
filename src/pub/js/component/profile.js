function renderInfo() {
    fetch('/api/user/get-self-info')
        .then(res => res.json())
        .then(info => {
            document.getElementById('self-name').innerHTML = info[0].name;
            document.getElementById('user-name').innerHTML = info[0].name;
            document.getElementById('self-email').innerHTML = info[0].email;
            document.getElementById('self-event').innerHTML = info[2];
            document.getElementById('self-follow').innerHTML = info[0].followEvents.length;
            document.getElementById('self-following').innerHTML = info[0].followUsers.length;
            document.getElementById('avatar').src = info[0].avatar;
        });

}

renderInfo();
