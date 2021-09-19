function clock() {
    let d = new Date();
    let month_num = d.getMonth()
    let day_name = d.getDay();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    day=new Array("Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat");
    month=new Array("Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec");
    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    date_time = day[day_name] + " " + d.getDate() + " " + month[month_num] + " " +
    " &nbsp; "+ hours + ":" + minutes;
    if (document.layers) {
     document.layers.doc_time.document.write(date_time);
     document.layers.doc_time.document.close();
    }
    else document.getElementById("doc_time").innerHTML = date_time;
     }
   