        function updateTimer() {
            var currentTime = moment();
            var openingTimeET = moment().set({hour: 9, minute: 30, second: 0}); 
            var closingTimeET = moment().set({hour: 16, minute: 0, second: 0}); 
            
            var nextOpeningDay = currentTime.day() === 6 ? 2 : 1;
            openingTimeET.add(nextOpeningDay, 'days');
            closingTimeET.add(nextOpeningDay, 'days');
            
            var timeLeft = openingTimeET - currentTime;
            if (currentTime >= openingTimeET && currentTime < closingTimeET) {
                timeLeft = closingTimeET - currentTime;
            }
            
            var duration = moment.duration(timeLeft);
            
            var timerMessage = "";

            if (currentTime.day() === 0 || (currentTime.day() === 6 && currentTime.hour() >= 0 && currentTime.minute() === 0)) {
                timerMessage = "Рынки закрыты. Прекрасное время сделать перерыв!";
            } else {
                timerMessage = "До " + (currentTime < openingTimeET ? "открытия" : "закрытия") + " рынков осталось: " + duration.hours() + " часов " + duration.minutes() + " минут " + duration.seconds() + " секунд";
                
                if (currentTime >= openingTimeET && currentTime < closingTimeET) {
                    var audio = new Audio("nyse.mp3");
                    audio.play();
                }
            }

            document.getElementById("timer").innerHTML = timerMessage;
        }

        setInterval(updateTimer, 1000);
