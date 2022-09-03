// 100% run 
// function abc(A,n){
//     let k=0;
//     let min=A[0]
//     for(let i=1;i<n;i++){
//        if(A[i]<min){
//         min=A[i]
//        }
//     }
//     console.log(min)
//     let flg=false;
//     let cnt=0
//     for(let i=0;i<n;i++){
//         if(A[i]%min ===0){
//             cnt++
//         }
//     }
//     console.log(cnt)
//     if(cnt===n){
//         for(let i=0;i<n;i++){
//             if(A[i]===min){
//                 k++
//             }
//         }
//     }
//     return k
// }
// let b=[2,2,4]
// console.log(abc(b,b.length))

// function abc(A,n){
//     let max=0;
//     for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             for(let k=j+1;k<n;k++){
//                 // console.log(A[k])
//                 // console.log(A,A[i],A[j],A[k])
//                 // console.log((Math.abs(A[i]-A[j]))*A[k])
//                 if(max<(Math.abs(A[i]-A[j]))*A[k]){
//                     max=(Math.abs(A[i]-A[j]))*A[k]
//                 }
//             }
//         }
//     }
//     return max
// } 
// 25 % run 

let b = [1, 2, 4, 3, 1, 1, 1, 1]
console.log(abc(b, b.length))











































