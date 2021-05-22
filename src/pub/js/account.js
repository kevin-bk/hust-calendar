fetch('/api/user/get-self-info')
    .then(res => res.json())
    .then(info => {
        document.getElementById('self-name').value = info[0].name;
        document.getElementById('self-email').value = info[0].email;
        document.getElementById('self-job').value = info[0].job;
        document.getElementById('self-company').value = info[0].company;
        document.getElementById('self-city').value = info[0].city;
        document.getElementById('self-country').value = info[0].country;
        document.getElementById('self-description').value = info[0].description;
    })
