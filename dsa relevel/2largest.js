function largest(A,n){
    let t1=0,t2=t1;
   for(let i=0;i<n;i++){
     if(t1<A[i]){
       t2=t1;
       t1=A[i];
       console.log(t1,t2)
     }else if(t2<A[i]){
         t2=A[i]
     }
   }
   console.log(t1,t2)
}
let b=[5,7,9,3,6,6,9,2,5,1,4]
largest(b,7)
console.log(b.sort((a,b)=>{return a-b}))