var hrs = '14:00';

changeformat = (hrs) => {
    const hrarr = hrs.split(':');
    if (hrarr[0] > 12 && hrarr[0] < 24) {
        var formatch = hrarr[0]-(12);
        return formatch + ":" + hrarr[1]+ " PM";
    }else if (hrarr[0] == 12) {
        return hrs + " PM"
    }else if(hrarr[0] < 12){
        return hrs + " AM";
    }
}

// console.log(changeformat(hrs));

function format12hr(hrs) {
    const hrarr = hrs.split(':');
    if (hrarr[0] > 12 && hrarr[0] < 24) {
        const to12=hrarr[0] % 12;
        return to12 + ":"+ hrarr[1] + " PM"; 
    } else if(hrarr[0] == 12) {
        return hrs +" PM";
    }else if ((hrarr[0] < 12)){
        return hrs + " AM";
    }
}
console.log(format12hr(hrs));


