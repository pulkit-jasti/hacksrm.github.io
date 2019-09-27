const second = 1000,
      minute = second * 60,
      hour = minute * 60,

let countDown = new Date('Sep 28, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = 0 // countDown - now;

        
        document.getElementById('hours').innerText = 0//Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = 0 //Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = 0//Math.floor((distance % (minute)) / second),
        document.getElementById('days').innerText = 0//Math.floor(distance / (day)),      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)