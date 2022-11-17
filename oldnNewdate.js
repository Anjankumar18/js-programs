oldnNewdate = () =>{
    var prevmonth = new Date().getMonth()-1;
    var date1 = new Date().setMonth(prevmonth);
    var oldDate = new Date(date1).toDateString();
    console.log("Date before One Month :"+oldDate);



    var nextmonth = new Date().getMonth()+1;
    var date2 = new Date().setMonth(nextmonth);
    var nextm = new Date(date2).toDateString();
    console.log("Date After one month :" + nextm);



    var nextyear = new Date().getUTCFullYear()+1;
    var date2 = new Date().setUTCFullYear(nextyear);;
    var nexty = new Date(nextyear).toDateString();
    console.log("Date After 1 year :" + nexty);
}

oldnNewdate();