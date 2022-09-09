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

const threadsGetSubmit = document.querySelector('#threadsGetSubmit');

threadsGetSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');
    const threadsGetQ = document.querySelector('#threadsGetQ').value;
    const threadsGetPerPage = document.querySelector('#threadsGetPerPage').value;
    const threadsGetPage = document.querySelector('#threadsGetPage').value;
    const url = new URL(host + '/threads')
    const params = url.searchParams

  if (threadsGetQ !== '' && threadsGetQ !== null) {
    params.append('q', threadsGetQ)
  };
  if(threadsGetPerPage !== '' && threadsGetPerPage !== null && threadsGetPerPage > 0) {
    params.append('per_page', threadsGetPerPage)
  };
  if(threadsGetPage !== '' && threadsGetPage !== null && threadsGetPage > 0) {
    params.append('page', threadsGetPage)
  };

  p(url.toString());

fetch(url.toString() , {
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