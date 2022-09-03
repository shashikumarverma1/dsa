// function abc(A, n) {
//     let k=0;
//     // let nop=Math.floor(n/2);
//    if(n%2===0){
//     for (let i = 0; i < n; i++) {
//         if(A[i]!=A[i+1]){
//         //  console.log(A[i],A[i+1])
//         i=i+1;
//         k++;
//         }
//      }
//    }else{
//     for (let i = 0; i < n-1; i++) {
//         if(A[i]!=A[i+1]){
//         //  console.log(A[i],A[i+1])
//         i=i+1;
//         k++;
//         }
//      }
//    }
//    return k;
// }
// let b = [2, 1, 3, 2,1,2]
// // b.splice(0,1)
// // console.log(b)
// abc(b, b.length)

function abc(arr,n){
  
  
    for(let  i=1;i<n;i++)
    {
        if(arr[i-1]>arr[i] )
         return i-1;
        if(arr[i-1]<arr[i] && arr[i+1]<arr[i])
        return i;
        if(arr[i+1]>arr[i])
            return i+1;
    } 
  }
 

let b=[5 ,15 ,14 ,1 ,1 ,13 ,11 ,14, 2, 15 ,12]
console.log(abc(b,b.length))


































