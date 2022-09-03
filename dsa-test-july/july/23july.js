function abc(A,n,m,k){
//    let k1=A[k-1];
//    console.log(k1)
   let midi;
   A.sort((a,b)=>{return a-b })
   console.log(A)
   let mid =Math.floor(n/2)
//    console.log(mid)
  if(n%2===0){
     midi=(A[mid] + A[mid-1])/2
    //  console.log(midi)
  }else{
    midi=A[mid]
    
  }
  console.log(midi)
//   console.log(k1)
if(midi <= m){
    return Math.floor(midi);
}else{
    return m
}

}
let b=[5 ,1, 3,15,50,70]
console.log(abc(b,b.length,6,2))

// function abc(A,n){
//     let ans=0
//     let map=new Map()
//     for(let i=0;i<n;i+=1){
//     if(map.has(A[i])){
//         // ans++
//         let k=map.get(A[i]);
       
//         map.set(A[i],k+1)
       
//      }else{
//         map.set(A[i],1)
//      }
//     }
//     // console.log(map)
//     map.forEach((e)=>{
       
//         ans+=Math.floor(e/2)
//         // console.log(e,ans)
//     })
        
    
//     return ans

// }

// let b=[2 ,1 ,3 ,2 ,1,1,1,1]
// console.log(abc(b,b.length))
// // 1,4,2,5


























