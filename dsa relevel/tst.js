function abc(A,m,n){
    let cnt=0;
    m=A.length;
  for(let i=0;i<m;i++){
      if(n%i===0){
          cnt++
      }
  }
  console.log(cnt)
  let sum=0;
  for(let i=0;i<m;i++){
     sum=sum+A[i]
  }
  for(let i=0;i<m;i++){
      if(n%sum===0){
          cnt++
      }else{
          sum=sum-A[i];
          console.log(sum)
      }
  }
  console.log(cnt)
  return cnt
}
let b=[1 ,2 ,3 ,4 ,5 ,6]
console.log(abc(b,6,10))