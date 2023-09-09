function calculateElapsedTime() {
    const releaseDate = new Date('2000-10-31');
    const currentDate = new Date();

    const elapsedMilliseconds = currentDate - releaseDate;

    // Constants for time units in milliseconds
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Approximate number of milliseconds in a year
    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // Approximate number of milliseconds in a month
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7; // Milliseconds in a week
    const millisecondsPerDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    const millisecondsPerMinute = 1000 * 60; // Milliseconds in a minute

    // Calculate elapsed time in different units
    const yearsElapsed = Math.floor(elapsedMilliseconds / millisecondsPerYear);
    const monthsElapsed = Math.floor(elapsedMilliseconds / millisecondsPerMonth);
    const weeksElapsed = Math.floor(elapsedMilliseconds / millisecondsPerWeek);
    const daysElapsed = Math.floor(elapsedMilliseconds / millisecondsPerDay);
    const secondsElapsed = Math.floor(elapsedMilliseconds / 1000);
    const minutesElapsed = Math.floor(elapsedMilliseconds / millisecondsPerMinute);


    return {
        years: yearsElapsed,
        months: monthsElapsed,
        weeks: weeksElapsed,
        days: daysElapsed,
        minutes: minutesElapsed,
        seconds: secondsElapsed
    };
}

function displayElapsedTime() {
    const { years, months, weeks, days, minutes, seconds } = calculateElapsedTime();
    const elapsedTimeElement = document.getElementById('elapsed-time');
    const writingElement = document.getElementById('writing');
    const writing1Element = document.getElementById('writing1');


    elapsedTimeElement.innerHTML = `
         ${years} Years<br>
          ${months} Months<br>
         ${weeks} Weeks<br>
         ${days} Days<br>
         ${minutes} Minutes<br>
        ${seconds} Seconds
    `;
    writing1Element.innerHTML = "It Has Been:"

    writingElement.innerHTML = "Since All Americans Massacre Hasn't Been Released"
}

// Run the function immediately to display the initial elapsed time
displayElapsedTime();
setInterval(displayElapsedTime, 1000);
