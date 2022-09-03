function abc(A,n){
  let res=[]
  let k=0;
  let l=Math.pow(2,n)
 for(let i=0;i<l;i++){
  console.log(A[i],A[i+1])
  if((A[i]+A[i+1]) % 2===0){
    // console.log("ans",A[i],A[i+1],k)
    k++;
    i=i+1;
    // console.log(k)
    if(k===n){
      return 'YES'
    }

  }else{
    // res.push(A[i])
    continue;
  }
 }
//  console.log(res)
//  abc(res,Math.sqrt())
  return "NO"
}
let b=[1,1,1 ,4 ,1 ,3];
// let b=[10 ,12 ,2 ,3]
console.log(abc(b,2))
function abc(A, n) {
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    sum += A[i];
    if (sum % 2 === 0) {
      // console.log(sum)
      if(sum >ans){
        ans=sum
        // console.log(ans)
      }
    }
  }
  let sum2=0
  for(let i=n-1;i>=0;i--){
    sum2 += A[i]
    if(sum2 % 2===0){
      // console.log(sum2)
      if(ans<sum2){
        ans=sum2;
        // console.log(ans)
      }
    }
  }
  
 
return ans ;
}
let b=[7, 3 ,2 ,9 ,2];
console.log(abc(b,b.length))

































