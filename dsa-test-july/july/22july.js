function abc(A,n){
    if(n==1 && A[0] % 2 ===0){
        return A[0]
    }
    let ans=[]
    let sum=A[0]
for(let i=1;i<n;i++){
      sum=sum +A[i];
    //   ans.push(sum)
      if(sum % 2 ===0){
        ans.push(sum)
      }
}

let sum1=0;
for(let i=n-1;i>0;i--){
    // console.log(A[i])
    sum1=sum1 +A[i]
    if(sum1 % 2===0){
        ans.push(sum1)
    }
}
console.log(ans)
let max=0
for(let i=0;i<ans.length;i++){
    if(max<ans[i]){
        max=ans[i]
    }
}
return max ;
}
let b=[-10,-1-1];
console.log(abc(b,b.length))



// let n = parseInt(readline());
// let arr =[];
// arr = readline().split(" ").map(Number);
// console.log(abc(arr,n))

// function abc(s,n){
//     let res=[]
//     for(let i=0;i<n;i++){
//         ans=''
      
//     for(let j=0;j<n;j++){
//        if(i!=j){
//         ans = ans+ s[j]
//        }
       
//     }
 
//     res.push(ans)
//     }

//     let k=0;
//     for(let i=0;i<res.length;i++){
//         for(let j=i+1;j<res.length;j++){
//             if(res[i]===res[j]){
//                 // console.log(i,j)
//                 k++
//             }
//         }
//     }
//     // console.log(res)
//     return k
// }
let s='abbacc';
// console.log(s.suring(3))
console.log(abc(s,s.length))
// [“bbacc” , “abacc” , “abacc” , “abbcc” , “abbac” , “abbac” ].






































