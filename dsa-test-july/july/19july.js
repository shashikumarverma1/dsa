function abc(A,n,k){
    let z,ans=0;
    let y=[]
    for(let i=0;i<n;i++){
    //   console.log((A[i] % k) , (k-(A[i]%k)))
      z=(A[i] % k)
     y.push(z)
      
    }
    console.log(y)
    for(let i=0;i<y.length;i++){
        if(y[i]===0){
            continue;
        }else if( y[i] ===y[i+1]){
            continue
        }else{
            ans++
        }
    }
    return ans
}


// function abc(A,n,k){
    


// }

let b=[4 ,3 ,6 ,2 ,5]
console.log(abc(b,b.length,3))







// function acb(A,n,m){
//     let sum=0;
//     for(let i=0;i<n;i++){
//     sum +=A[i]
//     }
//     // console.log(sum)
//     sum=sum+m;
    
//    return (  Math.ceil(sum/n))

// }
// let c=[1 ,2 ,3];
// console.log(acb(c,c.length,4))