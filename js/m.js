function abc(a,b){
   let ans1=a%2 
   let ans2=b%2;
   if(ans1===ans2){
      var discomfort = 0
   }else{
       if(a>b){
         discomfort=a-b;  
    }else{
        discomfort=b-a
    }
      
    
   }
   return discomfort;
    
}
console.log(abc(25,14))
// t Test | Round 2
// Question 1
// IDE Submission
// Minimize Discomfort

// Problem Statement :

 

// You are given 2N integers each having a type 1 or 2.

 

// Using these integers, you need to form N pairs of 2 integers each such that the total discomfort is minimized.

 

// The discomfort of a pair can be defined as follows :-

// If the type of both the integers on the pair are same, the discomfort is zero.
 

// If the type is different, then the discomfort is the difference between the greater element and smaller element.
 

 

// Input Format :

 

// First line contains a single integer T, the number of test cases.
// First line of each test case contains a single integer N.
// Each of the following 2N lines contain two integers, X_i and type of X_i.
 

 

// Output Format :

 

// For each of the T test cases print a single line containing an integer, minimum possible discomfort.
 

 

// Constraints :

 

// 1 <= T <= 100
// 1 <= N <= 10^5
// 0 <= Xi <= 10^9
// 1 <= type <= 2
 

 

// Note :- Sum of N over all test cases will not exceed 5*10^5.

 

 

// Sample Input :

 

// 1

// 2

// 4  2

// 5  1

// 9  2

// 13  2

 

 

// Sample Output :

 

// 1

 

 

 

// Explanation :

 

// You can make pairs as follows : {9, 13}, {4, 5}. Since 9 and 13 are of the same type their discomfort is 0.

// Pair {4, 5} are of different types, so their discomfort is (5 - 4) = 1. So, the total discomfort is 1.

 

 

 

// Things to Note for the Candidate :

 

// You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

// Problem Statement :

 

// Alice has two arrays A and B of the same size N. She want to count the pairs which follow the following conditions

// Choose two indices i and j such that 1<= i <= j<= N
// (A_i - B_j) <= (B_i - A_j) 
// Alice is not good at programming so she asked you to count such pairs which follow the described conditions. Since the count can be very large so you have to print count modulo 998244353.

 

// Constraints :

 

// 1 <=t <=10^3 
// 1 <=N <=10^5
// -10^9 <=A[i], B[i] <=10^9
 

// Input Format :

 

// First-line contains a single integer t, the number of test cases.
// The first line of each test case contains a single integer N, the size of arrays A and B.
// The second line of each test case contains N integers, i.e the array A.
// The third line of each test case contains N integers, i.e the array B.
// The sum of N over all test cases doesn’t exceed 2*10^5
 

// Output Format :

 


// For each test case, output a single line— The number of pairs that follow the described condition modulo 998244353.

 

// Sample Input :

 

// 3
// 3
// 18 4 15 
// 7 3 17 
// 5
// 13 3 1 1 8 
// 6 6 8 13 2 
// 4
// 20 15 9 8 
// 10 12 10 14 

 

 

// Sample Output :

 

// 1
// 7
// 2
 

// Note: Sample explanation is not given since the problem is quite simple to comprehend. 

 

 

 

// Things to Note for the Candidate :

 

// You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)


