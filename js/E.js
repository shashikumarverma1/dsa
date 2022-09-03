


// function search(A,k){
//        if(A.length === 1){
//            if(k===A[0]) return 0;
           
//           else return -1;
//        }
//            let s=0;e=A.length -1;
//         //    let mid=Math.floor((s+e)/2);
//            while(s<=e){
//             let mid=Math.floor((s+e)/2);

//                if(k===A[mid]){
//                    return mid ;
//                }else if(k<A[mid]){
//                    e=mid-1;
//                }else{
//                    s=mid+1;
               
//            }
//        }

// return s;

// }



// function tosum(A,k){
//     let s=0,e=A.length-1;
//     while(s<=e){
//         let mid=((s+e)/2);
//       if(A[s]+A[e]===k){
//           return [s,e]
//       }else if(A[s]+A[e]<k){
//           s=s+1
//       }else{
//           e=e-1;
//       }
//     }
//     return [-1];
// }

// // let b=[1,3,5,7,9]
// // b.reverse()
// // console.log(tosum(b,41))

// function movezero(A){
//   let zero=[];
//   let nonzero=[];
//   for(let i=0;i<A.length;i++){
//       if(A[i]==0){
//           zero.push(A[i])
//       }else{
//           nonzero.push(A[i])
//       }
//   }
//   return [...nonzero,...zero]
    
// }
// let b=[0,1,0,3,12]

// console.log(movezero(b))


function   isPerfectSquare (num) {
    if(num===1) true;
    let s=1,e=num;
    while(s<=e){
        let mid=((s+e)/2);
        if(mid*mid===num){
            return true ;
        }else if(mid*mid<num){
            s=mid+1;
        }else{
            e=mid-1
        }
    }
    return false
};
console.log(isPerfectSquare(25))


































