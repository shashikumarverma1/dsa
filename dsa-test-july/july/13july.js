function abc(A,n,k=0){
    if( !chequniq(A)){
        console.log(k)
        return k
    }
    if(chequniq(A)){
        let max=A[0]
      for(let i=1;i<n;i++){
         if(max<A[i]){
            max=A[i];
         }
        }
      
        console.log(A)
        console.log('max',max)
        for(let i=0;i<n;i++){
            if(A[i]===max){
                A.splice(i,1)
            }
        }
        for(i=0;i<n-1;i++){
            A[i]=A[i] - max ;
        }
       
        k++;
         abc(A,n-1,k)


    }else{
        // console.log('ans',k)
        // return k
    }

}


function chequniq(A){
    let n=A.length;
    let map=new Map();
    for(let i=0;i<n;i++){
      if(map.has(A[i])){
       return true;
      }else{map.set(A[i],i)}
    }
    return false
}
let b=[1,2,2,3,6,6]
console.log(abc(b,b.length))