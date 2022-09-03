function abc(A,n){
    let k=0;
  for(let i=0;i<n;i++){
    if(A[i]!=A[i+1]){
        k++;
        A.splice(i,1);

    }else{
        continue
    }
  }return k;
}
let b=[2,1,3,2,1]
console.log(abc(b,b.length))