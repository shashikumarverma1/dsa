// Number of Arrays
// Question Name: Number of Arrays



// Problem Statement



// Alice has an integer Array A of N size. Now he challenges Bob to find the number of arrays B, satisfying the given conditions:

// The length of array B = length of array A
// 1 <= B[i] <= A[i] (1<= i <= N)
// B[i] != B[j] (1 <= i < j <= N)
// Since the answer can be very large, print the answer modulo 109 + 7.

// https://screen-recorder-bucket.s3.ap-south-1.amazonaws.com/ScreenRecorder_2022-06-30_9d64db72-ff64-4149-8362-b44cecc80977.mp4

// Input Format



// First line contains one integer N.
// Second line contains N integers, denoting the array A.


// Output Format



// Output the number of arrays B modulo 109 + 7.


// Constraints



// 1 <= N <= 2*105
// 1 <= A[i] <= 109


// Sample Input 1



// 2

// 2 3



// Sample Output 1



// 4



// Explanation of Sample 1



// The 4 Arrays, are as follows:

// B = [1,2]

// B = [1,3]

// B = [2,3]

// B = [2,1]



// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly



// Un Special Numbers
// UN SPECIAL NUMBERS



// Problem Statement



// You are given an array A of N integers. You are also given M unspecial integers. You have to tell the longest possible length of a subarray of array A which contains at most K unspecial integers.

// Note :

// Each occurrence of a unspecial integer is counted separately.
// See sample test case for more clarity on the question.


// Input Format



// First line contains three space separated integers denoting N, M and K.
// Next line contains N space separated integers denoting elements of array A.
// Next line contains M space separated integers denoting the unspecial integers.


// Output Format



// Print the longest possible length of a subarray of array A which contains at most K unspecial integers.


// Constraints



// 1<=N,M<=105
// 1<=K<=N
// 1<=Ai<=109
// 1<=Unspecial integers<=109
// All unspecial integers are distinct from each other.


// Sample Input 1



// 5 2 2

// 1 2 3 2 5

// 3 2



// Sample Output 1



// 3



// Explanation of Sample 1



// Take Subarray A3..5 = [3,2,5]

// It has 2 unspecial integers 3 and 2.

// Note that we cannot take the entire array as there are two occurrences of 2 in it and one occurrence of 3. Hence the count of unspecial integers in the entire array = 2+1 = 3.



// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)