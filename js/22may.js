// function subArraySum(arr,n,sum)
// {
//     let curr_sum = arr[0], start = 0, i;

//     // Pick a starting point
//     for (i = 1; i <= n; i++) {
//         // If curr_sum exceeds the sum,
//         // then remove the starting elements
//         while (curr_sum > sum && start < i - 1) {
//             curr_sum = curr_sum - arr[start];
//             start++;
//         }

//         // If curr_sum becomes equal to sum,
//         // then return true
//         if (curr_sum == sum) {
//             let p = i - 1;
//             document.write(
//                 "Sum found between indexes " + start
//                 + " and " + p+"<br>");
//             return 1;
//         }

//         // Add this element to curr_sum
//         if (i < n)
//             curr_sum = curr_sum + arr[i];
//     }

//     document.write("No subarray found");
//     return 0;
// }
// function abc(A,k){
//     var map=new Map();
//     for(let i=0;i<A.length;i++){
//         map.set(A[i],i)
//     }
//     console.log(map)
// for(let j=0;j<A.length;j++){
//     if(map.has(A[j]+k)){
//         return [A[j],A[j]+k]
//     }else{
//         return "sory"
//     }
    
// }


// }
// let b=[90, 70, 20, 80, 50];
// console.log(b.indexOf(5))
// console.log(abc(b,45))

// function abc(A,B){
//     let c=[]
//     let n=A.length;
//     for(var i=0;i<n;i++){
//       c[B[i]]=A[i]
//         console.log(c)
//     }
   
//     console.log(A);
//     console.log(B)
    
// }
// let b=[50, 40, 70, 60, 90];
// let d=[3,  0,  4,  1,  2]
// abc(b,d)
// // 40, 60, 90, 50, 70




























