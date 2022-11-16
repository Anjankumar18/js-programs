//1
let num=34;

diffOrabsDouble =() =>{
    if (num <= 13) {
        return (13-num);
    }else {
        var absDouble=Math.abs(13-num)*2;
        return (absDouble);
    }
}

// console.log(diffOrabsDouble());

//2
diffOrabsDouble = (n) =>{
    switch (n <= 13) {
        case true:
            return (13-n);
            break;
        case false:
            return absDble = (13-n)*(-2);   
            break; 
        default:
            return 0;
            break;
    }
};

console.log(diffOrabsDouble(17));
