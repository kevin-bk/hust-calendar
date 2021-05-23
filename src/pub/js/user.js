var c = new URL(window.location.href).searchParams.get("userId");
console.log(c);

fetch('/api/user/get-user-info/4')
    .then(res => res.json())
    .then(info => {
        document.getElementById('self-name').value = info[0].name;
        document.getElementById('self-email').value = info[0].email;
        document.getElementById('self-job').value = info[0].job;
        document.getElementById('self-company').value = info[0].company;
        document.getElementById('self-city').value = info[0].city;
        document.getElementById('self-country').value = info[0].country;
        document.getElementById('self-description').value = info[0].description;
        document.getElementById('avatar').src = info[0].image;
        document.getElementById('self-event').innerHTML = info[2];
        document.getElementById('self-follow').innerHTML = info[0].followEvents.length;
        document.getElementById('self-following').innerHTML = info[0].followUsers.length;

        document.getElementById('acc-name').innerHTML = info[0].name;
        document.getElementById('acc-job').innerHTML = info[0].job;
        document.getElementById('acc-location').innerHTML = info[0].city + ', ' + info[0].country;
        document.getElementById('acc-company').innerHTML = info[0].company;
        document.getElementById('acc-description').innerHTML = info[0].description;
    })
