var str="write any string";
var newstr = "";

remCharacter =(pos) => {
    i=0;
    while (i<=str.length) {
        if (i != pos) {
        newstr += str.charAt(i);
        }
        i++;
    }
    return newstr;
}

console.log(remCharacter(0));

// remchar(pos) {
    
// }