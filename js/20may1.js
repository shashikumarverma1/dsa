// No need to change the code below
//------------------------------------------------
 
process.stdin.resume(); // A Readable Stream that points to a standard input stream (stdin)
process.stdin.setEncoding('utf-8'); // so that the input doesn't transform
 
let inputString1 = "";
let inputString = "";
let currentLine = 0;
 
process.stdin.on('data', function (userInput) {
    inputString1 = inputString1 + userInput; // taking the input string
});
 
process.stdin.on('end', function(x) {
    inputString1.trim();
    inputString1 = inputString1.split("\n"); // end line
    for(let i = 0; i< inputString1.length ; i++ ) {
        inputString += inputString1[i].trim() + ' ';
    }
    inputString.trim();
    inputString = inputString.split(" ");
    main();
});
 
function readline() {
    let result = inputString[currentLine++];
    return parseInt (result); // change when you want to use strings, according to the problem
}
 
// ---------------------------------------------
 
 
// use readline() to read individual integers/strings
function main() {
	let tc=parseInt(readline());
    for(let i=0;i<tc;i++){
        process.stdout.write(`${i} `);
    }
    var A = []
    for (let i = 1; i <= n; i++) {
        A.push(i)
    }
    //   console.log(A)
    var ans = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // console.log(A[i],A[j])
            // console.log(A[i]*A[j])
            ans = ans * A[i] * A[j]
            //    console.log(ans)     
        }
        return ans     

    }


}