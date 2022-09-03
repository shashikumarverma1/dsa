function abc(A, x, n) {

    let sum = 0;
    let k = 0;
    for (let i = 0; i < n-1; i++) {
        sum = A[i] + A[i + 1];
        console.log(`${i}`,sum,A[i],A[i+1])
        //  console.log(A[i],A[i+1])
       while(sum>x){
        A[i+1]=A[i+1] -1;
        console.log("sp",A[i],A[i+1])
        sum=sum-1;
        k++;
       }
       sum=0
    } return k;

}
let b = [2, 2, 2,2,2]
console.log(abc(b, 3, b.length))

function abc(A){
    let n=A.length;
    let min=A[0];
    let ans=0;
    for(let i=1;i<A.length;i++){
      if(A[i]<min){
        min=A[i];
      }
    }
    let max=0;
    for(let i=0;i<n;i++){
    if(A[i]>max){
        max=A[i]
    }
    
    }
    return max - min
}
let b=[2 ,1 ,2,3,4]
console.log(abc(b))












