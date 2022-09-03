const demo = n=> [...`${n}`].map(i=>parseInt(i))
function abc(n=BigInt(n),k){
    if(n<k) return n;
    if(n<10 && k ===1)  return 1;
    
    if(n>9 && n<100 && k==2) return 10;
    if(n>99 && n<10000 && k==3 ) return 1000
    var j=n;
    
    if(n>0){
var A=demo(n)
// console.log(A)
    }else{
        n=-n;
        var A=demo(n)
    }
    console.log(A)
if(j>0){
    if(k==1){
        A[0]=1;
       
    }else if(k>1){
        A[0]=1
        for(let i=1;i<k;i++){
           A[i]=0;
        }
    }
}else{
    if(k==1){
        A[0]=9;
        // console.log(A)
    }else if(k>1){
        
        for(let i=0;i<k;i++){
           A[i]=9;
        }
    }

}
// console.log(A)
let l=A.length;
let sum=""
for(let i=0;i<l;i++){
 sum=sum+A[i]
}

sum=parseInt(sum)
if(j<0){
 sum=-sum;
}
return sum ;
}
console.log(abc(99999999999999,3))