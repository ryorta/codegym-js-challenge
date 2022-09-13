'use strict';

const p = console.log;
const host = 'http://52.194.222.207:20780'; //ローカルで掲示板を動かす場合の設定

//以下にコードを書きましょう。
const threadsPostSubmit = document.querySelector('#threadsPostSubmit');
 
threadsPostSubmit.addEventListener('click', () => {
    const d = {
        title: document.querySelector('#threadsPostTitle').value
    };

    const login_token = localStorage.getItem('login_token');

    if (d.title === '') {
        p('titleを入力してください');
        return;
    }
    if (document.querySelector('#threadsPostTitle').value.length > 64) {
        p('titleは64文字以内で入力してください');
    }
    else {
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
    };
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

const threadsIdGetSubmit = document.querySelector('#threadsIdGetSubmit');

threadsIdGetSubmit.addEventListener('click', () => {

    const threadsIdGet = document.querySelector('#threadsIdGet').value;
    const login_token = localStorage.getItem('login_token');

  if (document.querySelector('#threadsIdGet').value === '' || document.querySelector('#threadsIdGet').value === null) {
    p('対象データなし');
  }
  else {
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
    .catch(p)
  };
});

const threadsEditSubmit = document.querySelector('#threadsEditSubmit');

threadsEditSubmit.addEventListener('click', () => {
    const da = {
        title: document.querySelector('#threadsEditTitle').value
    };

    const threadsEditGet = document.querySelector('#threadsEditGet').value;
    const login_token = localStorage.getItem('login_token');

if (document.querySelector('#threadsEditGet').value === '' && da.title === '') {
    p('id,titleを入力してください');
    return;
}
if (document.querySelector('#threadsEditGet').value === '') {
    p('idを入力してください');
    return;
}
if (da.title === '') {
    p('titleを入力してください');
    return;
}
if (da.title.length > 64) {
    p('titleは64文字以内で入力してください');
}
else {
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
}    
});
