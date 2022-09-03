// function majorityelm(A) {
//     var map = new Map();
//     // console.log(map)
//   for(let i=0;i<A.length;i++){
   
//     if(map.has(A[i])){
//         var k=map.get(A[i]);
//         k++
//         // console.log(k);
//         map.set(A[i],k)

//     }else{
//         var k=1;
//         map.set(A[i],k)
//     }
  
// //   console.log(map)
//   }
//   return map
// }

// function getmjority(A){
//     let map=majorityelm(A);
//     console.log(map);
//     var ans=0;
//     for(let i=0;i<A.length;i++){
//         let k=map.get(A[i]);
//         if(k>ans){
//             ans=k;
//         }
//         // console.log(ans)
//     }
// //     console.log(ans)
// // }

// // let b = [1,1,1,2,1,2,2,1,1,1,3,3,3,3,3,3,3,2,2,3,2,1,3]
// // getmjority(b)

// function givensum(A,k){
//     var cursum=0;let s=0;
//       for(var i=0;i<A.length;i++){
//        cursum=cursum+A[i]
//       console.log(cursum);
//        if(cursum===k){
//            console.log(cursum);
//            console.log(0,i)
//            return;
//        }
//       while(cursum>k && s<A.length){
//           cursum=cursum-A[s];
//           if(cursum===k){
//               console.log(cursum);
//               console.log(A[s+1],A[i])
//               return;
//           }
//           s++;
//       }
      

//       }
//       if(cursum !=k){
//           console.log("f");
//           return;
//       }
//     }
// let b=[1,2,3,4,5,6];
// givensum(b,100)



