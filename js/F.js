// function abc(n){
    
//   let s=1,e=n;
//   while(s<=e){
//       let mid=Math.floor((s+e)/2);
//       var i=mid*mid ;
//      if(i>n){
//          e=mid-1
//         //  console.log(e)
//      }else if(i<n){
//          s=mid+1;
//      }else{
//          return mid
//      }
//   }
//   return -1
    
// }
// let b=[1,2,3,4,6,7,8]
// console.log(abc(b,5))
console.log(abc(10))
var mySqrt = function (x) {
    let leftPointer = 1;
    let rightPointer = leftPointer * 2;
  
    while (rightPointer * rightPointer <= x) {
      leftPointer = rightPointer;
      rightPointer = leftPointer * 2;
    }
  
    while (leftPointer < rightPointer) {
      const mid = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
      if (mid * mid === x) {
        return mid;
      } else if (mid * mid < x) {
        leftPointer = mid + 1;
      } else {
        rightPointer = mid;
      }
    }
    return leftPointer - 1;
  };