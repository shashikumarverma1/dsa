// function abc(A,t){
//   for(let i='a'.charCodeAt();i<='z'.charCodeAt();i++){
//   if(`${t}`.charCodeAt()===i){
//   console.log(String.fromCharCode(i))
//   }
//   }
// }

// let b=['a','b','c']
// b.includes()

// abc(b,'n')
// function abc(A,n){
//  let res=[]
//  for(let i=0;i<n;i++){
//  let ans= islesstan(A,A[i])
// //  console.log(ans)
//  res.push(ans)
// }
// return res;
// }
// // let b=[6,5,4,8]
// // console.log(abc(b,b.length))

// function islesstan(A,e){
//   let k=0
//   for(let i=0;i<A.length;i++){
//     if(A[i]<e){
//       k++
//     }
//   }
//   return k
// }

// function abc(A,n){
//   let min =0;
//   for(let i=0;i<n;i++){
//     if((A[i+1]-A[i])<min){
//       min =A[i+1]-A[i]
//     }
//   }
//   console.log(min)
//   for(let i=0;i<n;i++){
//     for(let j=i+1;j<n;j++){
//       if(Math.abs((A[i]-A[j]) )===min){
//         console.log(A[i],A[j])
//       }
//     }
//   }
// }
// let b=[4,2,1,3]


// abc(b,b.length)

// function abc(A, n) {
//   let map = new Map();
//   for (let i = 0; i < n; i++) {
//     if (map.has(A[i])) {
//       let k = map.get(A[i]);
//       map.set(A[i], k + 1)
//     } else {
//       map.set(A[i], 1)
//     }
//   }
//   // console.log(map)
//   let ans=[]
//    map.forEach((v,k)=>{
//     // console.log(k,v)
//    if(k===v){
//     // console.log(k,v)
//     ans.push(k)
//    }
//    })
  
//   //  console.log(ans);
//    let res=-1
//    for(let i=0;i<ans.length;i++){
//      res=Math.max(res,ans[i])
//    }
//    console.log(res)
// }















// function abc(A,n){
//   let k=0;
//   for(let i=0;i<n;i++){
//     let ans="" +A[i];
//     if(ans.length % 2 ===0){
//       k++;
//     }else{
//       continue;
//     }
//   }
//   // console.log(k)
//   return k
// }

// function abc(A,n){
//   let k=0;
//   for(let i=0;i<n;i++){
//     for(let j=i+1;j<n;j++){
//       if(A[i]===A[j]){
//         // console.log(A[i],A[j])
//         k++
//       }
//     }
//   }
//   return k;
// }

function abc(A,n){
  let map =new Map();
  for(let i=0;i<n;i++){
    if(map.has(A[i])){
     let k=map.get(A[i])
     map.set(A[i],k+1)
    }else{
      map.set(A[i],1)
    }
  }
  console.log(map)
  let ans=[]
  map.forEach((v,k)=>{
    // console.log(v)
    ans.push(v)
  })
  console.log(ans)
  ans.sort((a,b)=>{return a-b})
  console.log(ans)
let x=map.get(3)
    console.log(x)
  
}
let b =[1,2,3,1,1,3]
abc(b, b.length)



































































