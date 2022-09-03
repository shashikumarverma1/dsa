// function abc(A){
//     let k=0;
//     for(let i=0;i<A.length;i+=1){
//         // let k=0;
//         if(A[i]>A[i+1]){
//             [A[i],A[i+1]]=[A[i+1],A[i]];
//             k++;
//         }
//     }
//     return k;
// }
// let tc=readline();

// while(tc--){
//     let n=readline();
//     let arr=readline().split();
//     abc(arr)
// }



// let b=[0,1]
// abc(b)
// Sorting Machine

// Problem Statement

 

// You are given an array A of N elements composed only of 1s and 0s.

// There is a machine that does the following operations on the array in one second:

// · Swap Ai and Ai+1 for i (1<=i<N) such that Ai = 1 and Ai+1 = 0

// For, example, if A = [ 0, 1, 0, 0, 1 ,0, 1, 0] and N= 8 then in one second the machine will convert the array into A = [0, 0, 1, 0, 0 ,1, 0, 1]. (Here i = 2, 5, 7)

// Find the minimum time required to sort the array using the machine.

 

// Constraints

 

// 1 <= T <= 10
// 1 <= N <= 10^5
// 0 <= Ai <= 1
// All input values are integers.
 

// Input Format

 

// First-line contains T.
// First line of each test case consists of a single integer N.
// Second line of each test case consists of N space separated integers denoting the array A.
 

// Output Format

 

// Print in a newline for each test case a single integer denoting the minimum time required to sort the array using the machine.
 

// Sample Input 1

 

// 2

// 3

// 1 0 0

// 2

// 0 1

 

// Sample Output 1

 

// 2

// 0

 

// Explanation of Sample 1

 

// For the 1st test case,

// A = [1, 0, 0]

// In first second machine converts array to A = [ 0, 1, 0]

// In next second machine converts array to A = [ 0, 0, 1]

// Array has become sorted.

// For 2nd test case, array is already sorted.
// Uniqueness

// Problem Statement

 

// You are given an array A, of N integers. In one operation you can:

// · Selects the maximum element, MX, of the array, if there are multiple such elements the she can select any one of them.

// · Then she removes the selected element and subtracts MX from each of the remaining element of the array.

// After each operation size of the array decreases by 1. Find the minimum number of operations, K, required to make all the elements of array unique. Also find the minimum element of the array after exactly K operations.

// You are given T independent test cases.

 

// Constraints

 

// 1 <= T <= 10
// 1 <= N <= 10^5
// -109 <= Ai <= 10^9
// All input values are integers.
 

// Input Format

 

// First-line contains T.
// First line of each test case consists of a single integer N.
// Second line of each test case consists of N space separated integers denoting the array A.
 

// Output Format

 

// Print in a newline for each test case two space integers denoting the minimum number of operations, K, required to make all the elements of array unique and the minimum element of the array after exactly K operations.

 

// Sample Input 1

 

// 2

// 4

// 6 -1 2 6

// 3

// -1 2 3

 

// Sample Output 1

 

// 1 -7

// 0 -1

 

// Explanation of Sample 1

 

// For 1st test case, she chooses MX = 6 and, So, array becomes: A = [-1-6, 2-6,6-6] = [ -7, -4, 0]. All the elements of array are unique and minimum element of the array is -7.

// In 2nd test case, all elements are already unique.

 

// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)