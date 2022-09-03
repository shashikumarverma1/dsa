function abc(A,n){
  let k=0;
  for(let i=0;i<n;i++){
    if(iscool(A[i],A,n)){
      console.log(A[i],A)
      k++
    }else{
      continue;
    }
  }
  console.log(k)
}
function iscool(e,A,n){
  for(let i=00;i<n;i++){
    if(A[i]===0) return;
    if(A[i]%e===0){
      continue;
    }else{
      return false;
    }
  }return true
}
let b=[4,20,4,8,4,8,16];
let e=8
// console.log(iscool(e,b,b.length))
// abc(b,b.length)
function bcd(A,n){
  let min=A[0];
  for(let i=1;i<n-1;i++){
    if(A[i]<min){
      min=A[i]
    }
  }
  let k=0;
  for(let i=0;i<n;i++){
    if(A[i]===min){
      k++;
    }
  }
  console.log(k)
}
bcd(b,b.length)