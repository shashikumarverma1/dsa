function abc(s,k){
    if(k===0) return 0;
    if(s.length===0) return 0;
    if(k===1) return s;
    var ans=""
 if(s.length<=0){
     return s;
   
 }else{
    while(s.length>1){
     
        let t=s.slice(0,k);
        let u=s.slice(k,s.length)
        console.log("t===",t)
        console.log("u===",u)
        let arr=[]
        for(let i=0;i<k;i++){
        arr.push(t[i])
        }
        console.log(arr)
        arr.sort();
        console.log(arr)
        ans=ans+arr[0];
        console.log("ans=--",ans)
        let d=add(arr)
      s=d+u;
        console.log(s);
        // console.log("d===",d)
        console.log("S===",s)
    }
    ans=ans+s;
 }
 
 return ans;
 
}
function add(A){
    let sum="";
    for(let i=1;i<A.length;i++){
        if(A[i]===undefined){
            return sum;
        }else{
            sum=sum+A[i]
        }
    }return sum;
}
let s="errichto";
// erichrot
console.log(abc(s,3))









