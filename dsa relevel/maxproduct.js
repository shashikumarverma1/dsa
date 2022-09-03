function max(A,k){
    A.sort((a,b)=>{return a-b});
    console.log(A)
    let t1=1;
    let t2=1;
    for(let i=0;i<k;i++){
       t1 =t1*A[i];
    //    console.log(t1)
    }
    for(let i=A.length-1;i>k;i--){
        t2 =t2*A[i]
        // console.log(t2)
     }
     var ans;
  if(t1>t2){
       ans=t1
  }else{
      ans=t2;
  }
  console.log(ans)
}
let b=[1,2,3,4,-1,-5,-6,-2]
max(b,4)