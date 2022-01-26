function doDate()
{
    var days = new Array("Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var now = new Date();

    var dateNum = "";

    time = addZero(now.getHours()) +":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds())
    date = addZero(now.getDate()) + '.' + addZero(now.getMonth() + 1) + '.' + now.getFullYear();
    document.getElementById("currentTime").innerHTML = time;
    document.getElementById("currentDate").innerHTML = date;
}

setInterval(doDate, 1000);

function addZero(number) {
    if (number < 10) {
        number = "0" + number
        return number
    } else {
        return number
    }
}

function minus() {
    var date1 = new Date();
    const date2 = new Date(2021,11,7);

    var newDate = (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);

    document.getElementById("date").innerHTML = newDate;

}

setInterval(minus, 1000);