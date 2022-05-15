const daysDiv = document.getElementById('days')
const hoursDiv = document.getElementById('hours')
const minutesDiv = document.getElementById('minutes')
const secondsDiv = document.getElementById('seconds')
const newYearDayDiv = `1 Jan ${new Date().getFullYear()+1}`

function clock(){
    const newYear = new Date(newYearDayDiv);
    const currentDate = new Date();
    const totalSeconds = (newYear - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = format(hours);
    minutesDiv.innerHTML = format(minutes);
    secondsDiv.innerHTML = format(seconds);
}

function format(time){
    return time < 10 ? `0${time}` : time;
}

clock();
setInterval(clock, 1000);