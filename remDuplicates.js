const arr1=[1,2,3,4,5,6,5,6];
const arr2=[3,4,5,6,9,10];


function remDup(arr1,arr2) {
    var finalArr = new Set(arr1.concat(arr2));
    console.log(Array.from(finalArr));
}
// remDup(arr1,arr2);



//2
remDuplicate = (arr1,arr2) => {

    let newarr = arr1.concat(arr2);
    let OriginalArr = [];
    newarr.forEach((n)=>{ 
        if(!OriginalArr.includes(n)) 
        OriginalArr.push(n)});
    return OriginalArr;                       
}
console.log(remDuplicate(arr1,arr2));
