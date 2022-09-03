function abc(q, l, r, x, y) {
    let ans = []
    let A = [];
    while (r--) {
        A.push(l)
        l = l + 1;
    }
    console.log(A)
    let sumarr = [];
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        sumarr.push(sum)
    }
    console.log(sumarr)
    while (q--) {
        let x = 6; let y = 7;
         let res=check(sumarr, x, y)
       ans.push(res)

    }
    console.log("ans",ans)
}
function check(sumarr, x, y) {
    var res=0
  for(let i=0;i<sumarr.length;i++){
    if(sumarr[i] >=x && sumarr[i] <=y){
        // console.log(sumarr[i])
        res=1;
    }
  }
  return res;
}
abc(1,1,3)
// 1
// 2 1 3
// 6 7
// 9 9