function abc(A,n){
    let B=[...A]
    B.sort((a,b)=>{return b-a});
   let k=0;
   let max1=B[0];
   let max2=B[1];
   for(let i=0;i<n;i++){
    if((A[i] +B.length -1) >max1 && (A[i] +B.length -1) >max2){
        k++;
        B.splice(0,1)
        // console.log(A,B)
    }
   }

return k;
}
// let b=[5 ,1, 4, 3 ,2]
// abc(b,b.length)







 function abc(A,n){
    let ans=""
  for(let i=n-1;i>=0;i--){
    ans +=A[i]
  }
  if(A===ans){
    return 0
  }
 }
 let b="aba"
 console.log(abc(b,b.length))
 console.log(b.reverce)





















