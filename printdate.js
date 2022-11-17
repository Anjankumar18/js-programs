//1
printdate = () =>{
    var date = new Date();
    console.log( " Date : " + date.toDateString() );
}
printdate();



//2
printdate = () =>{
    var date = new Date();
    var day =date.getDay();
    switch (day) {
        case 1:
            day='Sunday';
            break;
        case 2:
            day='Monday';
            break;
        case 3:
            day='Tuesday';
            break;
        case 4:
            day='Wednesday';
            break;
        case 5:
            day='Thursday';
            break;
        case 6:
            day='Friday';
            break;
        case 7:
            day='Saturday';
            break;
        default:
            break;
    }

    console.log( " Date : " + date.getDate() + "  day : " + day +
     "  Month : " + date.getMonth() + "  Year : " + date.getFullYear());
}
printdate();