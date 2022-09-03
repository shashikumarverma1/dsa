function fib(n){
 let a=0, b=1,c;
   var sum=0;
    for(let i=0;i<n;i++){
      
      c=a+b;
      a=b;
      b=c;
      sum+=c
     console.log(c)
    }
    // let bin=(n*(n-1))/2
    // console.log(bin)
    // console.log(sum)
    // let ans=bin + sum ;
 return c% (1000000000+7);
}
//0, 1,1,2,3,5,8,13,21,34,
console.log(fib(3))
// evelopment Test | Round 2
// Question 2
// IDE Submission
// N-Bonacci

// Problem Statement :

 

// In the Fibonacci series, the Kth number is the sum of previous two numbers (K - 1)th and (K - 2)th and the first two numbers are known to you beforehand.

 

// Your task is to find the Kth N-Bonacci number.

// The Kth N-bonacci number is the sum of the previous N numbers and the first N numbers of this series will be given in an array A in the input.

 

// Since the answer can be large, print it modulo (10⁹ + 7). (Note : Modulo refers to the “%” operator).

 

 

// Constraints :

 

// 2 ≤ N ≤ 100
// 1 ≤ K ≤ 10⁵
// 0 ≤ A[i] ≤ 10⁵
 

 

// Input Format :

 

// First line contains 2 space separated integers N and K.
// The second line contains N space separated integers, which are the first N terms of the series.
 

 

// Output Format :

 

// Print the K-th number modulo (10⁹ + 7) of the series. 
 

 

// Sample Input :

 

// 2 4
// 1 2

 

 

// Sample Output :

 

// 5


 

 

// Explanation of Sample :

 

// The first 2 numbers : 1, 2
// Third number : 1 + 2 = 3
// Fourth number : 3 + 2 = 5
// And 5 modulo (10⁹ + 7) = 5
 

 

 

 

// Things to Note for the Candidate :

 

// You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

// Problem Statement:


// A city is spread across X-axis with its co-ordinates from 1 to 10^6.

// There is a group of villains trying to attack the city. There is a group of heroes trying to defend the city. Both heroes and villains are spread across the X-axis.

// A segment of the city [L,R] is said to be SAFE if the number of heroes lying in that segment are greater than or equal to villains lying in that segment.

// You are given the X co-ordinates of heroes and villains in the form of two arrays A and B, both of size N. There are three types of queries.
         

// Queries:

// The first type of query has the character “?” at the start followed by two spaced integers L,R. If the number of heroes in the segment are greater than or equal to the number of villains then print SAFE (without quotes) or else print HELP. In both cases print the absolute difference in the number of heroes and villains lying in the segment.
// The second type of query has the character “H” at the start and then followed by  K (an X co-ordinate) where a new hero is going to join the fight at given K.
// The third type of query has the character “V” at the start and then followed by  K (an X co-ordinate) where a new villain is going to join the fight at given K .
// (Note: There can be multiple villains and heroes at a same co-ordinate)
    
// Constraints:

 

// 1 <=N <=10^5
// 1 <=A[i]  <=10^6
// 1<= B[i]  <=10^6
// 1 <=Q  <=10^5
// 1 <= L  <=R  <=10^6
 

// Input Format:

 

// First line contains a single integer N.
// Second line contains N spaced integers(Heroes array).
// Third line contains N spaced integers(Villains array).
// Fourth line contains Q the number of queries.
// Next Q lines contain queries of all the three types.
 

// Output Format:


// For every query which is of the first type, print SAFE or HELP followed by the absolute difference of heroes and villains in the segment with a space between them. Print the output in a new line for each first type of query.


// Sample Input:


// 6
// 21 16 24 18 9 11
// 4 4 20 11 14 23
// 4
// H 8
// ? 4 9
// V 9
// ? 6 20
 
// Sample Output:


// SAFE 0
// SAFE 1

 

// Explanation of Sample :


// Considering the first query we add 8 to our array A and now it becomes
// A = [21, 16, 24, 18, 9, 11, 8]

// In the second query we are asked to find the absolute difference between the number of heroes and villains in the range [4,9]. Heroes that lie in the range are [8,9] and villains [4,4]. Since the number of heroes and villains are equal we print SAFE followed by their absolute difference.

// Considering the third query we add 9 to our array B and now it becomes
// B = [4, 4, 20, 11, 14, 23, 6]

// In the fourth query we are asked to find the absolute difference between the number of heroes and villains in the range [6,20]. Heroes that lie in the range are [16,19,8,11] and villains [11,14,20]. Since the number of heroes is greater than villains we print SAFE followed by their absolute difference.

 

 

// Things to Note for the Candidate:

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to vi



