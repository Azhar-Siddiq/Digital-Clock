function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var period = document.getElementById("period");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    var ampm = h >= 12 ? "PM" : "AM";

    if(h > 12){
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
}
setInterval(clock, 1000)