function uniq(A){

    let ans;
 for(let i=0;i<A.length;i++){
    ans=A[i]^A[i+1];
    // console.log(ans)
 }
 return ans
}
let b=[1,1,2,1,2,1,3]


console.log(uniq(b))
function sum(n){
    let sum=0;
while(n>9){
     sum=sum+n%10;
    // console.log(n);
    n=Math.floor(n/10)
    // console.log(sum,n);
}
let ans=sum+n;
n=ans;
// console.log(n);
return n

}
function add(){
  if(sum(n)>9){
    ans=
  }
}


