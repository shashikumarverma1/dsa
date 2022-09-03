function abc(n) {
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
        // console.log(ans)     

    }

       return ans;
    }
    
    console.log(abc(3))

    // process.stdin.resume(); // A Readable Stream that points to a standard input stream (stdin)
    // process.stdin.setEncoding('utf-8'); // so that the input doesn't transform

    // let inputString1 = "";
    // let inputString = "";
    // let currentLine = 0;

    // process.stdin.on('data', function (userInput) {
    //     inputString1 = inputString1 + userInput; // taking the input string
    // });

    // process.stdin.on('end', function(x) {
    //     inputString1.trim();
    //     inputString1 = inputString1.split("\n"); // end line
    //     for(let i = 0; i< inputString1.length ; i++ ) {
    //         inputString += inputString1[i].trim() + ' ';
    //     }
    //     inputString.trim();
    //     inputString = inputString.split(" ");
    //     main();
    // });

    // function readline() {
    //     let result = inputString[currentLine++];
    //     return parseInt(result); // change when you want to use strings, according to the problem
    // }
    // function main() {	
    // 		let N = readline();

    // 	 console.log(abc(N));
    //         }
    // function abc(N) {
    //    //write your logic here
    // // function abc(n){
    //     var A=[]
    //   for(let i=1;i<=N;i++){
    //    A.push(i)
    //   }
    // //   console.log(A)
    //   var ans=1;
    //     for(let i=0;i<N;i++){
    //         for(let j=i;j<N;j++){
    //             // console.log(A[i],A[j])
    //             // console.log(A[i]*A[j])
    //        ans=ans*A[i]*A[j]
    //     //    console.log(ans)     
    //         }
    //         // console.log(ans)     

    //     }
    //    return ans %(1000000000+7);
    // }




    // ct

    // Problem Statement:



    // Given an array A of length, N. Find the product of A[i] * A[j]  for all 1 <= i <= j <= N. 





    // Input Format:



    // First-line contains an integer N, length of the array,
    // The next line contains N space-separated integers, the array elements.




    // Output Format:



    // Print the product. As the product can be very large print in modulo 10^9+7.




    // Constraints:



    // 1<= N <= 5*10^5
    // 0<= A[i] <= 10^9




    // Sample Input:



    // 3
    // 1 2 3



    // Sample Output :



    // 1296




    // Explanation of Sample :



    // (1*1) * (1*2) * (1*3) * (2*2) * (2*3) * (3*3) = 1296







    // Things to Note for the Candidate:



    // You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
    // The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
    // Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
    // Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

    // function abc(A,N){
    // var B=[...A];
    // for(let i=0;i<A.length;i++){
    //    for(let j=0;j<A.length;j++){
    //        B.push(A[i]+A[j])
    //    }
    // }
    // console.log(B)
    // // B.sort()
    // return B[N-1]
    // }

    let b = ["a", "b", "c"]
    console.log(abc(b, 10))
/*  

Submission
Alphabet Addiction

Problem Statement :

 

Peter is addicted to some alphabets. These alphabets will be given to you in an Array A of size M.

He starts to form strings using these alphabets and starts arranging them in the following manner : Strings of lesser length are placed before longer ones, and in case of strings of same length he places lexicographically smaller strings before others.

 

Suppose, He is obsessed with [‘a’, ‘b’, ‘c’], so he forms a sequence like this : [“a”, “b”, “c”, “aa”, “ab”, “ac”, “ba”, “bb”, “bc”, ....] and so on.

He wonders what is the Nth term of this sequence. Your task is to find the Nth number of the sequence thus formed.

 


Constraints :

 

1 ≤ N ≤ 10⁹
2 ≤ M ≤ 26
A contains lowercase english alphabets
 


Input Format :

 

First line contains an integer M, the number of distinct alphabets he is addicted to
Second line contains M space separated alphabets
Third line contains N
 


Output Format :

 

Print the Nth string

 

 


Sample Input :

 

3
a b c
10

 


Sample Output :

 

ca

 


Explanation of Sample :

 

The first few strings are : “a”, “b”, “c”, “aa”, “ab”, “ac”, “ba”, “bb”, “bc”, “ca”, “cb” … 
The 10th string is ca

 

 

 

Things to Note for the Candidate :

 

You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

*/
























