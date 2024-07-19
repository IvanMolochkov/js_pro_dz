const getYear = new Date();
const newYear = new Date(new Date(`${getYear.getFullYear() + 1}/01/01`).getTime() - 1);

const getMonth = getYear.getMonth();
const getDay = getYear.getDate();
const getHours = getYear.getHours();
const getMinutes = getYear.getMinutes();
const getSeconds = getYear.getSeconds();

const newMonth = newYear.getMonth();
const newDay = newYear.getDate();
const newHours = newYear.getHours();
const newMinutes = newYear.getMinutes();
const newSeconds = newYear.getSeconds();

setInterval(() => {
    document.getElementById("seconds").innerText = `${newSeconds - getSeconds} секунд`;
    document.getElementById("minutes").innerText = `${newMinutes - getMinutes} минут`;
    document.getElementById("hours").innerText = `${newHours - getHours} часов`;
    document.getElementById("day").innerText = `${newDay - getDay} дней`;
    document.getElementById("month").innerText = `${newMonth - getMonth} месяцев`;
    location.reload();
}, 950);