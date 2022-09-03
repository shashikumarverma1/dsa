function cntcool(A,n){
    let max=0;
for(let i=0;i<n;i++){
    // console.log(A[i])
if(A[i] >max){
    max=A[i];
}
}


let i=1
 let map=new Map()
 while(3*i+2*i+i <= max){
    // console.log(3*i+2*i+i)
    map.set((3*i+2*i+1),i)
    i++
 }
// console.log(map)
let ans=[]
for(let i=1;i<=n;i++){
    if(map.has(A[i])){
        ans.push(i)
    }
}
// console.log(ans,ans.length)
return ans.length;
    }

// console.log(ans)


// let b=[1,2,3,4,5,6,6,6,60]
let b=[3 ,6 ,2 ,4 ,6]
console.log(cntcool(b,b.length))

// iscol(5)































// function abc(A,n){
//     let k=0;
//     if(n===0) return 0;
//     if(n===1 && A[0] % 2 ===1) return 1;
//     if(n===1 && A[0] % 2 ===0) return 0;
//     for(let i=0;i<n;i++){
//         if(A[i] % 2 ===1){
//           let x=  A.splice(i,1)
//             // console.log(x)
//             A.unshift(x[0])
//         }
//     }
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum +=A[i];
//         if(sum % 2===1){
//             k++;
           
//         }
//     }
//    return k
    
// }
// let b=[4,3,6];
// console.log(abc(b,b.length))





























