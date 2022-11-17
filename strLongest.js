const arr = ["hello","this","is","a","JavaScript","Program"];

//1
strLong = (arr) =>{
    var val=0;
    var longstr;
    
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i].length > val) {
            longstr = arr[i];
            val = arr[i].length; 
        }   
    }
    console.log(longstr);
}
strLong(arr);

//2
strL = (arr) => {
    var len=0;
    var longest;
    findLar = (str) => {
        if (str.length > len) {
            longest = str;
            len = str.length;
        }
    }
    arr.map(findLar);
    console.log(longest);
}
strL(arr);

