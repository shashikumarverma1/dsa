// Development Test | Round 2
// Question 1
// IDE Submission
// Super String

// Problem Statement :

// You are given a String  s of length N  you need to print a new string t of size N formed by using characters of string s such that:

// The character of the i’th index of string “t” is the smallest lexicographical character in the given range of [0-k] inclusive and delete it from string s.

 


// Example: s=”adbc” k=2
// String t = “abcd”
// s=”adbc” smallest element within range is “a” -> String t=”a”
// s=”dbc” smallest element within range is “b”  -> String t=”ab”
// s=”dc” smallest element within range is “c”  -> String t=”abc”
// s=”d” smallest element within range is “d”  -> String t=”abcd”

 


// Input Format:

 

// First line contains input string s (consisting of only lowercase alphabets).
// Second line contains a single integer k.
 

 

// Output Format :

 

// Print the smallest lexicographical string “t” as asked in the question.
 

 

// Constraints:

 

 

// 1<= N <= 10^5
// 1<= K <= N
 

 

// Sample input:


// errichto
// 2

 

 

// Sample output:


// erichrot

 

 

 

// Things to Note for the Candidate:

 

 

// You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)
 

// Bunty and Biscuits

// Problem Statement :

 

// Bunty the dog wants to buy Biscuits from the Parle canteen and Britannia canteen. Buying X biscuits from Parle canteen will cost him A*(X*X) rupees and Buying X biscuits from Britannia will cost him B*(X*X) rupees. Please help Bunty to buy exactly N biscuits and minimize the money he pays

 

 

// Input Format :

 

// The first line contains an integer T denoting the number of test cases.
// Each of the test cases is described in a single line containing three space-separated integers N,A,B
 

 

// Output Format :

 

// For each test case, print a single line containing the answer i.e. the minimum amount of money Bunty pays.
 

 

// Constraints:

 

// 1<=T<=100000
// 1<=N,A,B<=100000
 

 

// Sample Input :

 

// 2

// 5 1 2

// 10 2 4

 

 

// Sample Output :

 

// 17

// 134  

 

 

// Explaination :

// Let's say we get the minimum cost when we buy x biscuits from Parle canteen then we will need to buy y=(n-x) biscuits from britannia canteen. 

// So our total cost becomes A*(x*x)+B*((n-x)*(n-x))

// To minimize an equation , its differentiation should be zero. So 2*A*x-2*B*(n-x) = 0. 

 

 

// Things to Note for the Candidate :

 

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)





