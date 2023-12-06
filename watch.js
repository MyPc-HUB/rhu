function watch(){
    var date = new Date();
    var hr = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
        min = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()),
        sec = (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()),
        AmPm = (date.getHours() >= 12 ? "PM" : "AM");

    if(date.getHours() == 0){
           hr = 12; 
    }
    else if(date.getHours() > 12){
            hr =date.getHours() - 12;
    }
    else{
            date.getHours();
    }

    var time = hr +":" + min +":"+sec +" " + AmPm;
    document.getElementsByClassName("time")[0].innerHTML = time;
    
    var weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"],
        month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
        dateday = date.getDate();
    
    var currentDate = weekday[date.getDay()] + "," + dateday + "," + month[date.getMonth()] + ","+ date.getFullYear();
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
}
watch();
setInterval(function(){
    watch();
}, 1000)