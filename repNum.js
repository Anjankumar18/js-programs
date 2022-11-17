var arr = [2,3,4,6,8,4,2,-1,-1,-1,-1,6,5,5,75,3,3,5,5,5,5,8,8,8,8,-1,-1,-1,-1,0,0,0];

//1
function maxrepeat(arr) {
    var maxcount=0;
    for (let i = 0; i < arr.length; i++) {
        let num=arr[i];
        let countfreq = 0;
        for (let index = i; index < arr.length; index++) {
            if (arr[index] === num) {
                countfreq++;
            } 
         if (maxcount < countfreq) {
                maxcount=countfreq;
                var repnum=arr[i];
            }
        }
    }
    console.log(repnum);
}
maxrepeat(arr);