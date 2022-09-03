// function abc(n,k){
//     const demo = n=> [...`${n}`].map(i=>parseInt(i))
//     let A=(demo(n))
//     // console.log(sA)
//     if(A[0]==1){
//         for(let i=1;i<=k;i++){
      
//             A[i]=0
//          //    console.log(i)
//          }
//     }else{
//         for(let i=1;i<k;i++){
      
//             A[i]=0
//          //    console.log(i)
//          }
//     }
    
//     // console.log(A)
//     let ans=""
//     for(let i=0;i<A.length ;i++){
//         ans=ans+A[i]
//     }
//     return parseInt(ans)
// }
// let b=2099
// console.log(abc(b,1))















function abc(A,n){
    let x=0;let y=0;
    
    for(let i=0;i<=n+1;i++){
        for(let j=i;j<n;j++){
          let ans=A[i]*A[j]
          console.log(ans,i,j)
          if(ans>0){
            x++;
          }else{
            y++
          }
        }
    }
    return [x,y]
}

let b=[2, -2, 1, 4 ,-2];
console.log(abc(b,b.length))


