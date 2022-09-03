


function abc(n){
  if(n==1) return 1;
    if(n==2) return 6;
 let A=[];
 A.push(1);
 A.push(6);
 for(let i=2;i<n;i++){
    A[i]=(A[i-1] +2)*2 -A[i-2]; 
    A.push(A[i]);
    // console.log(A[i])
 }
// console.log(A);
A.pop()
// console.log(A[n-1])
 return (A[n-1]%1000000007)
}
let tc=parseInt(readline());

while(tc--){
    let n=parseInt(readline());
    // let n=2
    abc(n)
}
