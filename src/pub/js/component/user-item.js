fetch('/api/getAllUsers')
    .then(res => res.json())
    .then(users => {
        const htmls = users.map(user => {
            return '<div class="user-item">'+
            '        <div class="wrapper2">'+
            '            <div class="profile">'+
            `                <img src="${user.image}" class="thumbnail" onerror=\'this.src="/img/icon/avatar-default.png"\'>`+
            '                <div class="check"><i class="fas fa-check"></i></div>'+
            `                <h3 class="name">${user.name}</h3>`+
            `                <p class="title">${user.email}</p>`+
            `                <a href="/app/user?userId=${user._id}"><button type="button" class="btn">See More</button></a>`+
            '            </div>'+
            '        <div class="user-info">'+
            `            <p>Job: ${user.job ? user.job : '---'}</p>`+
            `            <p>Country: ${user.city + ', ' + user.country}</p>`+
            `            <p><i>"${user.description ? user.description : 'Let\'s see my page.'}"</i></p>`+
            '        </div>'+
            '        </div>'+
            '    </div>';
        })

        document.getElementById('user-list').innerHTML = htmls.join('');
    })