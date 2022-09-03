function abc(A,n){
    let k=0;
    let ans=false;
    console.log(ans)
   while(ans != true){
    for(let i=0;i<n;i++){
        if(A[i]>A[i+1]){
            [A[i],A[i+1]] =[A[i+1],A[i]];
            k++;
            ans=issorted(A,n)
            // console.log(A
                
            // console.log(ans)
        }
   }
   }
   return k;
}



function issorted(A,n){
    for(let i=0;i<n;i++){
        if(A[i]<=A[i+1]){
            return true;
        }else{
            return false;
        }
    }
}

let b=[1, 1 ,0,0]
console.log(b)
console.log(abc(b,b.length))
