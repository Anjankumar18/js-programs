var hrs = new Date().getHours();
// var hrs = 24;

changeformat = (hrs) => {
    if (hrs > 12 && hrs < 24) {
        var formatch = hrs-(12);
        return formatch+"pm";
    }else if (hrs === 12) {
        return hrs + "pm"
    }else if (hrs === 24 ) {
        return (hrs-12) + "am";
    }
    return hrs+"am";
}

console.log( changeformat(hrs));

