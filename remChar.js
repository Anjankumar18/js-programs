var str="write any string";

//1
var newstr = "";

remCharacter = (pos) => {
    var i=0;
    while (i<=str.length) {
        if (i != pos) {
        newstr += str.charAt(i);
        }
        i++;
    }
    return newstr;
}
console.log(remCharacter(1));


//2
function remChar(pos) {
    return str.substring(0,pos)+str.substring(pos+1,str.length);
}
console.log(remChar(15));


//3
function remCh(pos) {
    return (str.replace(str.charAt(pos),""));
}
console.log(remCh(2));


//4
function remCharact(pos) {
    return str.slice(0,pos)+str.slice(pos+1,str.length);
}
console.log(remCharact(10));