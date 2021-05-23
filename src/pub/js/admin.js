fetch('/api/getAllUsersWithDel')
    .then(res => res.json())
    .then(users => {
        const htmls = users.map(user => {
            return '<tr>'+
            `            <td>${user.name}</td>`+
            `            <td>${user.email}</td>`+
            `            <td>${user.deleted ? "locked" : "active"}</td>`+
            `            <td><a href="${user.deleted ? ('/admin/unlock-user/' + user._id) : ('/admin/lock-user/' + user._id)}">${user.deleted ? 'Un Lock' : 'Lock'}</a></td>`+
            '        </tr>';
        })
        document.getElementById('data').innerHTML = htmls.join('');
    })