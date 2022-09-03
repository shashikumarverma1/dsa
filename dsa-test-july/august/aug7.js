// function abc(A,n,k){
//     let B=[...A]
//  for(let i=0;i<n;i++){
//     if(A[i]+A[i+1]===k){
//         continue;
//     }else{
//     //   console.log(A)
//     //   console.log(k-A[i])
//       A[i+1]=k-A[i]

//     }
    
//  }
// //  console.log(A)
// //  console.log(B)
//  let ans=0
//  for(let i=0;i<n;i++){

//     // console.log(B[i],A[i],B[i]-A[i])
//     ans=ans +B[i]-A[i]
//  }

// //  console.log(ans)
//  return ans
// }
// let b=[2,2,2]
// console.log(abc(b,b.length,3))
function abc(A,n){
    // n can be any value like 10000000000000000
    let res=new Map()
    let max=A[0];
    for(let i=1;i<n;i++){
        if(max<A[i]){
            max=A[i]
        }
    }
    console.log(max)
    let sum;
    for(let i=1;i<n;i++){
        for(let j=1;j<n;j++){
         sum=3*i*j+2*i*j+j;
         if(sum<=max){
            res.set(sum,1)
         }else{
            break;
         }
         
        }
    }
    console.log(res)
    let cnt=0;
    for(let i=0;i<n;i++){
      if(res.has(A[i])){
        cnt++
      }
    }
    console.log(cnt)
    // console.log(Math.max())
}

let b=[1,5,4,2,6,6,6,1,91]
abc(b,10010)



function abc(A,n){
    let k=0
 

    for(let i=0;i<n;i++){
        for(let  j=i+1;j<n;j++){
            if((A[i]&A[j])===0){
                k++;
            }else{
                // k=0
                break
            }
        }
    }
    console.log(k)
    return k;
}
let b=[6,2, 4, 1 ,7]
abc(b,b.length)
// console.log(2&6)