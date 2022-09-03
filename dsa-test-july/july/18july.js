function abc(A,n,k){
    let res=[]
   for(let i=0;i<n;i++){
    let ans=[];
    for(let j=0;j<k;j++){
        ans.push(A[i])
    }
    
    console.log(ans)
 if(ans.length===k){
   res.push(ans)
   ans=[];
   i=k;
 }
}
   console.log(res)
}
let b=[1,2,3,4,5,6]
abc(b,b.length,2)