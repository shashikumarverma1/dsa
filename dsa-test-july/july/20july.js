// your code goes here
// function abc(A,n){
//     let min=A[0];
//     let max=A[0]
//     for(let i=0;i<n;i++){
      
//       if(A[i]<min){
//         min=A[i]
//       }
//       if(A[i]>max){
//         max=A[i]
//       }
//     }
//     // console.log(min,max)
//      return (max-min)

// }

// let tc = parseInt(readline());
// while(tc--){
// let n = parseInt(readline());
// let arr =[];
// arr = readline().split(" ").map(Number);
// console.log(abc(arr,n))
// }

// function abc(q,l,r){
//     let A=[];
//     for(let i=l;i<=r;i++){
//         A.push(i)
//     }
//     let ans=[]
//     console.log(A)
//     let sum=0;
//     for(let i=0;i<A.length;i++){
//         sum=sum+A[i];
//         ans.push(sum)
//     }
//     let sum1=0
//     for(let i=A.length-1;i>0;i--){
//         sum1=sum1+A[i];
//         ans.push(sum1)
//     }
//      console.log(ans)
//     while(q--){
//         let x=parseInt(readline())
//         let y=parseInt(readline())
//         acb(ans,x,y)
//     }
     
    
// }
// abc(2 ,1, 3)

function acb(A,x,y){
    for(let i=0;i<A.length;i++){
        if(A[i] <=y && A[i] >=x){
            // console.log(1)
            return 1
        }
    }
    // console.log(0)
    return 0
}
let b=[1,3,6,3,5]
console.log(acb(b,5,5))




































