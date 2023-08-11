function updateTimer() {
    var currentTime = new Date();
    var openingTimeET = new Date(currentTime);
    openingTimeET.setHours(16, 30, 0);
    var closingTimeET = new Date(currentTime);
    closingTimeET.setHours(23, 0, 0);
    
    var timeLeft = openingTimeET - currentTime;
    if (currentTime >= openingTimeET && currentTime < closingTimeET) {
        timeLeft = closingTimeET - currentTime;
    }
    
    var hours = Math.floor(timeLeft / 3600000);
    var minutes = Math.floor((timeLeft % 3600000) / 60000);
    var seconds = Math.floor((timeLeft % 60000) / 1000);

    document.getElementById("timer").innerHTML = "До " + (currentTime < openingTimeET ? "открытия" : "закрытия") + " NYSE & NASDAQ осталось: " + hours + " часов " + minutes + " минут " + seconds + " секунд";
}

setInterval(updateTimer, 1000);