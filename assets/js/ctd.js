function ShowTime(){
        var date=new Date();
        var day=date.getDay();
        var hr=date.getHours();
        var min=date.getMinutes();
        var sec=date.getSeconds();

        if(day<10){
          day='0'+day;
        }
        
        
        if(hr<10){
          hr='0'+hr;
        }
        if(min<10){
          min='0'+min;
        }
        if(sec<10){
          sec='0'+sec;
        }

        var time = day + ":" + hr + ':' + min + ':' + sec;
        document.getElementById('clockdiv').innerText=time;
        document.getElementById('clockdiv').textContent=time;
        setTimeout(ShowTime,1000);
      }
      ShowTime();
      //setInterval(ShowTime,1000);