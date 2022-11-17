const arr = [894,8945,845,76435,9845,7345,092384,095,-1,-923];
var newarr=[];

//1
function replacearr(num) {
    for (let i = 0; i < arr.length; i++){
        newarr[i]=num;  
    }
        console.log(newarr)
}
// replacearr(-1);


//2
function repnum(num) {
    numRep = () => {
        return newarr.push(num);
    }
    arr.map(numRep);
    console.log(newarr);
}
// repnum(1);


//3
replaceArr =(num) => {
     return arr.fill(num);
}
console.log(replaceArr(5));
