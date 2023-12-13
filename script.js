const date = document.getElementById('date');
const time = document.getElementById('time');

const dateInterval = setInterval(() => {
    const newDate = new Date();
    date.innerText = newDate.getFullYear() + '-' + (newDate.getMonth() +1) + '-' + newDate.getDate();
    time.innerText = newDate.getHours() + ':' + newDate.getMinutes();
}, 100)
