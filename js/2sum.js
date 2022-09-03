function tosum(A,t){
    for(let i=0;i<A.length;i++){
        if(A.includes(t-A[i])){
      let   ans=[A.indexOf(A[i]),A.indexOf(t-A[i])]
         
      
      if((t-A[i])==A[i]){
             return false 
         }else{
             return ans
         }
        }

    }
    return false;
}
let b=[1,2,3,4,5,7,8,9]
console.log(tosum(b,5))