var arr = ["hello","this","is","a","JavaScript","Program"];
var val=0;
var longstr;

for (let i = 0; i < arr.length ; i++) {
    if (arr[i].length > val) {
        longstr = arr[i];
        val = arr[i].length; 
    }   
}
console.log(longstr)
