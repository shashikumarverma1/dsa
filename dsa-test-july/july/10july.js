// // function abc(A,n){
// //     let k=0;
// //     for(let i=0;i<n;i++){
// //        if(chequniq(A,A.length)){
        
// //         k++;
// //         console.log(A,k)
// //        }
       
// //     }
// //     let min = A[0]
// //     for(let i=1;i<A.length;i++){
// //   if(A[i]<min){
// //     min = A[i]
// //   }
// //     }
// //     console.log(A,"k",k,"min",min)
// // }


// // function chequniq (A,n){
// //     let max=A[0];

// //     let map=new Map()
// //     for(let i=0;i<n;i++){
// //      if(map.has(A[i])){
// //         max=A[i];
// //         A.splice(i,1)
// //         for(let i=0;i<A.length;i++){
// //             A[i] =A[i] - max ;
// //         }
// //         return [true,max];
// //      }else{
// //         map.set(A[i],i)
// //      }
// //     }
// //     // console.log(map)
// //     return false;

// // }
// // // 6 -1 2 6
// // // -1 2 3

// // let b=[1,2,3,4,5,4,5,-4,-4,10,10]
// // abc(b,b.length)
// // console.log(cheq(b,b.length))



// function op(A,n){
//     let k=0;
//     if(issorted(A,n) ===false ) {
//         console.log(k);
//         return 
//     };
  
//     console.log(issorted(A,n))
//     if(issorted(A,n)){
//     for(let i=0;i<n;i++){
//         // console.log(A)
      
//         if(A[i]===1 && A[i+1]===0){
//             // console.log(A[i],A[i+1])
//             [A[i],A[i+1]] =[A[i+1],A[i]]
//             k++;
//             // console.log("k",k)
//         }
//        }
//     }
//     op(A,n)
//     console.log(A)
//     //  console.log("k",k);
//      return k;
// }


// function issorted(A,n){
// //  let map=new Map();
//  for(let i=0;i<n;i++){
//    if(A[i]>A[i+1]){
//     return true;
//    }
//  }
//  return false
// }


// let b=[1 ,1,0,0,1,1,0 ,0];
// console.log(op(b,b.length))
// // console.log(issorted(b,b.length))
















// function cool(){
//     for(var i= 0;i<5;i++){
//           function coolest(i){
//               setTimeout(()=>{console.log(i)},i/1000);
//           }
//           coolest(i)
//     }
// }
// console.log(cool())
// 0,1,2,3,4
// console.log(b)
// let a=0;
// var b=10;
// console.log(a+b);
// a=20;
// console.log(a+b)
// unde ,10,30;
// const {car : mycar} ={car:ford} ;
// console.log(car)

// let a=10;
// let b,c;
// b=a++
// c=a
// console.log(a,b,c)
// 11,10,11
// let data=3+4+3*5/3-5
// console.log(data)
// function outer(f=inner()){
//     function inner(){
//         console.log("innn")
//     }
// }
// outer()
// reference console.error();
// const demo=(arr,val)=>arr.reduce((a,v)=>(v===val ? a+1 : a),0);
// console.log(demo([1,1,2,1,2,3],1))
// 3


















