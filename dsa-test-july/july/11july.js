function issorted(A,n){
//  let map=new Map();
 for(let i=0;i<n;i++){
   if(A[i]>A[i+1]){
    return false;
   }
 }
 return true
}
let b=[1,2,4,3,3];
console.log(issorted(b,b.length))