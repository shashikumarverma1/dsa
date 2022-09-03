// function abc(A,n,m){
//     let flg1=false;
//     let flg2=false;
//     let ans1=0;
//     let ans2=0;
//     let m1=m
//     let m2=m
//     while(!flg1){
//         if(A.includes(m)){
//             m=m+1;
            
//         }else{
           
//             ans1= m;
//             // console.log(ans1)
//             flg1 =true;
//         }
//     }
   
//     while(!flg2){
//         if(A.includes(m1)){
//             m1=m1-1;
            
//         }else{
           
//             ans2= m1;
//             // console.log(ans2)
//             flg2 =true;
//         }
//     }
//     console.log(ans1,ans2)
// // console.log(Math.abs(m2-ans1),Math.abs(m2-ans2))
// let res=Math.abs(m2-ans1) > Math.abs(m2-ans2) ? ans1 :ans2
// return res
  
// }
// let b=[-5,-6,-4,-3,-7 ]

// console.log(abc(b,b.length,-5))

function abc(A,n,o,z) {
    let k=0;
    n=4
    let s=(n+9)%n
     console.log(n,s)
    for(let i=0;i<o;i++){
        if(A[i] !=1){
            A[i]=1;
            k++;
        }
    }
    for(let i=o;i<o+z;i++){
       if(n<o+s){
        n=s;
        if(A[i] !=0){
            A[i]=0
            k++;
           }
       }
    }

console.log(A)
return k
    
}
let b=[1 ,1 ,1 ,1]
console.log(abc(b,b.length,2,3))































