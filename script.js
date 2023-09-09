function calculateElapsedTime() {
        future = Date.parse("oct 31, 2000 01:30:00");
     now = new Date();
     diff = now - future;
    years = Math.floor (diff / (31556952000));
     days = Math.floor(diff / (1000 * 60 * 60 * 24));
     hours = Math.floor(diff / (1000 * 60 * 60));
     mins = Math.floor(diff / (1000 * 60));
     secs = Math.floor(diff / 1000);
    
     y = years;
     d = days - years * 365;
     h = hours - days * 24;
     m = mins - hours * 60;
     s = secs - mins * 60;

  
    const elapsedTimeElement = document.getElementById('elapsed-time');  
    elapsedTimeElement.innerHTML = `
         ${y} Years<br>
         ${d} Days<br>
         ${h} Hours<br>
         ${m} Minutes<br>
         ${s} Seconds<br>
    `;    
    setInterval('calculateElapsedTime()', 1000);

 } 
   

function displayElapsedTime() {
   calculateElapsedTime()
    const writingElement = document.getElementById('writing');
    const writing1Element = document.getElementById('writing1');

    
    writing1Element.innerHTML = "It Has Been:"

    writingElement.innerHTML = "Since All Americans Massacre Hasn't Been Released"

    
}



displayElapsedTime();
setInterval(displayElapsedTime, 1000);
