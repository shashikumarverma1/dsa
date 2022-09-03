function abc(A,n){
    let res=[]
    let k=0;
    for(let i=0;i<n;i++){
      
        if(A[i]==0 && A[i+1]==1 && A[i+2]==0){
       res.push(i+1)

        }
        // console.log(A)
    }
    console.log(res)
    let ans=0
    for(let i=0;i<res.length-1;i++){
    //    console.log(res[i+1] - res[i])
       ans=ans+ res[i+1] - res[i] -1
    }
    console.log(ans)
    return ans
}
let b=[0,0,0,0,1,1,1,1,1,0,1,0]    ;
console.log(abc(b,b.length))
























// function abc(A,n,m,k){
//     let res=[]
//     let ans=0;
//    for(let i=0;i<n;i++){
//     console.log(A[i])
//       if(m.includes(A[i])){
//         ans++;
//      if(ans==k && m.includes(A[i])){
//         console.log(A[i])
//         console.log(ans,m.includes(A[i]))
//      }
//       }
//    }
//    console.log(res)
// }


// let b=[1 ,2 ,3 ,1,1,1,2 ,5]
// // b.includes()
// let bm=[3, 2]
// console.log(abc(b,b.length,bm,2))






























