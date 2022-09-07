'use strict';

const p = console.log;
const host = 'http://54.64.209.74:20780'; //ローカルで掲示板を動かす場合の設定

const registerSubmit = document.getElementById('registerSubmit');

registerSubmit.addEventListener('click', () => {
    const d1 = {
        name: document.getElementById('registerName').value,
        bio: document.getElementById('registerBio').value,
        password: document.getElementById('registerPassword').value
    };
    if (document.getElementById('registerName').value.length <= 16 && document.getElementById('registerBio').value.length <= 128) {
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
        .catch(error => p(error.messagge));
    } 
      else {
        p('nameは16文字以内、bioは128文字以内で入力してください');
      };
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
    .catch(error => p(error.messagge));
});

const logoutSubmit = document.getElementById('logoutSubmit');

logoutSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');
    localStorage.removeItem('login_token');
try {
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
}    
catch(e) {
    p('エラー');
}
});

const usersIdGetSubmit = document.getElementById('usersIdGetSubmit');

usersIdGetSubmit.addEventListener('click', () => {

    const usersIdGet = document.getElementById('usersIdGet').value;
    const login_token = localStorage.getItem('login_token');

  if (document.getElementById('usersIdGet').value === '' || document.getElementById('usersIdGet').value === null) {
    p('対象データなし');
  }
  else {
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
    .catch(p)
  };
});

const usersGetSubmit = document.getElementById('usersGetSubmit');

usersGetSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');
    const usersGetQ = document.getElementById('usersGetQ').value;
    const usersGetPerPage = document.getElementById('usersGetPerPage').value;
    const usersGetPage = document.getElementById('usersGetPage').value;
    const url = new URL(host + '/users')
    const params = url.searchParams

  if (usersGetQ !== '' && usersGetQ !== null) {
    params.append('q', usersGetQ)
  };
  if(usersGetPerPage !== '' && usersGetPerPage !== null && usersGetPerPage > 0) {
    params.append('per_page', usersGetPerPage)
  };
  if(usersGetPage !== '' && usersGetPage !== null && usersGetPage > 0) {
    params.append('page', usersGetPage)
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

const usersDeleteSubmit = document.getElementById('usersDeleteSubmit');

usersDeleteSubmit.addEventListener('click', () => {

    const login_token = localStorage.getItem('login_token');
try {
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
}
catch(e) {
    p('エラー');
}    
});

const usersEditSubmit = document.getElementById('usersEditSubmit');

usersEditSubmit.addEventListener('click', () => {
    const d3 = {
        bio: document.getElementById('usersEditBio').value
    };

    const login_token = localStorage.getItem('login_token');

  if (document.getElementById('usersEditBio').value.length > 128) {
        p('bioは128文字以内で入力してください');
    }
　else {
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
    .catch(error => p(error.messagge));
  };
});

