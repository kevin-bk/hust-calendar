var c = new URL(window.location.href).searchParams.get("key");
console.log(c);
fetch('/api/search/' + c)
    .then(res => res.json())
    .then(users => {
        console.log("user: " + users.length);
        const htmls = users.map(user => {
            return '<div class="user-item">'+
            '                <div class="our-team">'+
            '                    <div class="picture">'+
            `                        <img class="img-fluid" src="${user.image}" onerror=\'this.src="/img/icon/avatar-default.png"\'>`+
            '                    </div>'+
            '                    <div class="team-content">'+
            `                        <h3 class="name">${user.name}</h3>`+
            `                        <h4 class="title">${user.job}</h4>`+
            '                    </div>'+
            '                    <ul class="social">'+
            `                        <li><a href="/app/user?userId=${user._id}" aria-hidden="true">View more</a></li>`+
            '                    </ul>'+
            '                </div>'+
            '            </div>';
        })

        document.getElementById('user-list').innerHTML = htmls.join('');
    })