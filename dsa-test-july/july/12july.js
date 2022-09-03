function abc(A, n,k=0) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += A[i];
    }
    console.log(A)
    if(sum%2===1){
        console.log(k+1)
        }
    if (sum % 2 === 0) {
        k++
        // console.log("k",k)
        
        if (hasodd(A, n)) {
            
            for (let i = 0; i < n; i++) {
                if (A[i] % 2 === 1) {
                    A.splice(i, 1)
                    abc(A, n - 1,k)

                    break;
                }
                console.log(A,sum)
            }
        } else {
            for(let i=0;i<n;i++){
                A[i]=A[i]/2
            }
          
            abc(A,n,k)
        }
}

}
function hasodd(A, n) {
    for (let i = 0; i < n; i++) {
        if (A[i] % 2 === 1) {
            return true;
        }
    }
    return false
}
let b = [16,16,16,16];
// console.log(hasodd(b,b.length))
console.log( abc(b, b.length))
// console.log(hasodd(b,b.length))