//1
let num=34;

diffOrabsDouble =() =>{
    if (num <= 13)
        return (13-num);
    else 
        return Math.abs(13-num)*2;
}

// console.log(diffOrabsDouble());

//2
diffOrabsDouble = (n) =>{
    switch (n <= 13) {
        case true:
            return (13-n);
            break;
        case false:
            return (13-n)*(-2);   
            break; 
        default:
            return 0;
            break;
    }
};

console.log(diffOrabsDouble(2));
