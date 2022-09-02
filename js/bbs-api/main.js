'use strict';

const p = console.log;
const host = 'http://localhost'; //ローカルで掲示板を動かす場合の設定

//以下にコードを書きましょう。
const threadsPostSubmit = document.getElementById('threadsPostSubmit');
 
threadsPostSubmit.addEventListener('click', () => {
    const d = {
        title: document.getElementById('threadsPostTitle').value
    };
    const login_token = localStorage.getItem('login_token');

    fetch(host + '/threads', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            'Authorization': 'Bearer ' + login_token
        },
        body: JSON.stringify(d)
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
});

const threadsGetSubmit = document.getElementById('threadsGetSubmit');

threadsGetSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');
    const threadsGetQ = document.getElementById('threadsGetQ').value;
    const threadsGetPerPage = document.getElementById('threadsGetPerPage').value;
    const threadsGetPage = document.getElementById('threadsGetPage').value;

  if (threadsGetQ && threadsGetPerPage && threadsGetPage) {
    fetch(host + '/threads?q=' + threadsGetQ + '&per_page=' + threadsGetPerPage + '&page=' + threadsGetPage , {
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
else if(threadsGetQ && threadsGetPerPage) {
    fetch(host + '/threads?q=' + threadsGetQ + '&per_page=' + threadsGetPerPage, {
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
else if(threadsGetQ && threadsGetPage) {
    fetch(host + '/threads?q=' + threadsGetQ + '&page=' + threadsGetPage, {
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
else if(threadsGetPerPage && threadsGetPage) {
    fetch(host + '/threads?per_page=' + threadsGetPerPage + '&page=' + threadsGetPage, {
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
else if(threadsGetQ) {
    fetch(host + '/threads?q=' + threadsGetQ , {
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
else if(threadsGetPerPage) {
    fetch(host + '/threads?per_page=' + threadsGetPerPage , {
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
else if(threadsGetPage) {
    fetch(host + '/threads?page=' + threadsGetPage , {
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
    fetch(host + '/threads', {
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

const threadsIdGetSubmit = document.getElementById('threadsIdGetSubmit');

threadsIdGetSubmit.addEventListener('click', () => {

    const threadsIdGet = document.getElementById('threadsIdGet').value;
    const login_token = localStorage.getItem('login_token');

    fetch(host + '/threads/' + threadsIdGet, {
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

const threadsEditSubmit = document.getElementById('threadsEditSubmit');

threadsEditSubmit.addEventListener('click', () => {
    const da = {
        title: document.getElementById('threadsEditTitle').value
    };

    const threadsEditGet = document.getElementById('threadsIdGet').value;
    const login_token = localStorage.getItem('login_token');

    fetch(host + '/threads/' + threadsEditGet , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + login_token
        },
        body: JSON.stringify(da)
    })
    .then((response) => response.json())
    .then((data) => {
        p(data);
    })
});