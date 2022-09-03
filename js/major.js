function abc(N,A,B,ans){
    let x=0;
     while(ans !=0 ){
         ans=2*A*x*x+2*B*(N-x);
         console.log(ans)
         x++;
         
     }
}
abc(5,1,2)