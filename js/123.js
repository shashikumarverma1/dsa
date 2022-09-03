function abc(A) {
    var ans = 1;
    let b = []
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            ans =ans* A[i] * A[j];
            // b.push(ans)
        }
    }
console.log(ans)
}


let b = [1, 2, 3]

// abc(b);
function pow(n) {
    var ans = 1;
    for (let i = 1; i <=n; i++) {
        //  console.log(i,n+1-i);
        //  console.log(i,i)
        let x = (Math.pow(i, n + 1 - i))
        // let y = Math.pow(i, i);
        ans = ans * x ;
        var y=1
        for(let i=1;i<=n;i++){
              y =y*(Math.pow(i, i))
        }
    }

let ans1=ans*y;
console.log(ans1)
}
abc([1, 2, 3, 4,5,6,7,8])
pow(8);
// abc([1,2,3])
facto(3)
console.log(1*4*27*4*3)






























