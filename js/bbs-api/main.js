'use strict';

const p = console.log;
const host = 'http://54.65.34.48:20780'; //ローカルで掲示板を動かす場合の設定

const registerSubmit = document.getElementById('registerSubmit');
 
registerSubmit.addEventListener('click', () => {
    const d1 = {
        name: document.getElementById('registerName').value,
        bio: document.getElementById('registerBio').value,
        password: document.getElementById('registerPassword').value
    };

    fetch(host + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(d1)
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
});

const loginSubmit = document.getElementById('loginSubmit');
 
loginSubmit.addEventListener('click', () => {
    const d2 = {
        name: document.getElementById('loginName').value,
        password: document.getElementById('loginPassword').value
    };
    
    fetch(host + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(d2)
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
        localStorage.setItem('login_token' , data['token']);
        p(localStorage);
    })
});

const logoutSubmit = document.getElementById('logoutSubmit');

logoutSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');
    
    fetch(host + '/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
});

const usersIdGetSubmit = document.getElementById('usersIdGetSubmit');

usersIdGetSubmit.addEventListener('click', () => {

    const usersIdGet = document.getElementById('usersIdGet').value;
    const login_token = localStorage.getItem('login_token');

    fetch(host + '/users/' + usersIdGet, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
});

const usersGetSubmit = document.getElementById('usersGetSubmit');

usersGetSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');
    const usersGetQ = document.getElementById('usersGetQ').value;
    const usersGetPerPage = document.getElementById('usersGetPerPage').value;
    const usersGetPage = document.getElementById('usersGetPage').value;

  if (usersGetQ && usersGetPerPage && usersGetPage) {
    fetch(host + '/users?q=' + usersGetQ + '&per_page=' + usersGetPerPage + '&page=' + usersGetPage , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
}
else if(usersGetQ && usersGetPerPage) {
    fetch(host + '/users?q=' + usersGetQ + '&per_page=' + usersGetPerPage, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
    return;
}
else if(usersGetQ && usersGetPage) {
    fetch(host + '/users?q=' + usersGetQ + '&page=' + usersGetPage, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
    return;
}
else if(usersGetPerPage && usersGetPage) {
    fetch(host + '/users?per_page=' + usersGetPerPage + '&page=' + usersGetPage, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
    return;
}
else if(usersGetQ) {
    fetch(host + '/users?q=' + usersGetQ , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
    return;
}
else if(usersGetPerPage) {
    fetch(host + '/users?per_page=' + usersGetPerPage , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
    return;
}
else if(usersGetPage) {
    fetch(host + '/users?page=' + usersGetPage , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
    return;
}
else {
    fetch(host + '/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
    return;
}
});

const usersDeleteSubmit = document.getElementById('usersDeleteSubmit');

usersDeleteSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');

    fetch(host + '/users', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
});

const usersEditSubmit = document.getElementById('usersEditSubmit');

usersEditSubmit.addEventListener('click', () => {
    const d3 = {
        bio: document.getElementById('usersEditBio').value
    };

    const login_token = localStorage.getItem('login_token');

    fetch(host + '/users', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
        body: JSON.stringify(d3)
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
});