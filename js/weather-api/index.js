window.addEventListener('DOMContentLoaded', () => {
const placeSelect = document.querySelector('#place');
    placeSelect.options[0].selected = true;
    placeSelect.addEventListener('change', function() {
        const cities = event.currentTarget.value;
       
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=4b5774e9f3d2a07b84f0f2f88e486224&units=metric&lang=ja&q='+cities)
    .then(response => response.json())
    .then(data => {

        const temp = document.getElementById('temp');
        temp.innerHTML = data['main']['temp'] + '℃';

        const humi = document.getElementById('humi');
        humi.innerHTML = data['main']['humidity'] + '%';

        const press = document.getElementById('press');
        press.innerHTML = data['main']['pressure'] + 'hPa';

        const situation = document.getElementById('situation');
        situation.innerHTML = data['weather'][0]['description'];
    })
    });
});

  window.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=4b5774e9f3d2a07b84f0f2f88e486224&units=metric&lang=ja&q=london')
    .then(response => response.json())
    .then(data => {

        const temp = document.getElementById('temp');
        temp.innerHTML = data['main']['temp'] + '℃';

        const humi = document.getElementById('humi');
        humi.innerHTML = data['main']['humidity'] + '%';

        const press = document.getElementById('press');
        press.innerHTML = data['main']['pressure'] + 'hPa';

        const situation = document.getElementById('situation');
        situation.innerHTML = data['weather'][0]['description'];
    })
    
    });