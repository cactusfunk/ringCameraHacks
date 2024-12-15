INTERVAL = 5    // seconds
STOP_AFTER = 15 // seconds

// Open the same link in the new tab
win1 = window.open(location.href);

// At every 5 seconds, reload the page
timer1 = setInterval(() => {
    win1.location.reload();
    console.log("Refreshed");
},INTERVAL*1000)

// Stop reloading after 15 seconds
setTimeout(() => clearInterval(timer1), STOP_AFTER*1000)
