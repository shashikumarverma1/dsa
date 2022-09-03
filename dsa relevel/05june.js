
// Problem Statement:


// You are given a recursive formula to generate elements of the array.


// First element of the array is “1”.


// Second element of the array is “6”.


// Array[i] = ( (Array[i-1] + 2)*2 - Array[i-2] ) for i > 2.
// You need to print the Nth element of the array.

 

 

// Input Format:

 

// The input starts with T, the number of Test Cases.
 

// Next T lines contain integer N.
 

 

// Output Format:

 

// For each test case print the answer on a single line.
 

// As the answer can be very large, output it modulo 10^9+7
 

 

// Constraints:

 

// 1<= T <=10^5
 

// 1<= N <= 10^18
 

 

// Sample Input:


// 2
// 2
// 3

 

 

// Sample Output:


// 6

// 15

 


// Explanation:


// For the second test case :
// Array[3] = ( (Array[2] + 2)*2 - Array[1] )
//               = (6+2)*2 - 1
//               = 15

//               Problem Statement :

 

//               This time Alice came with an integer array A of size N.
              
//               She likes XOR operation so much that she called a subarray lovely if the sum of all elements of that subarray is equal to the XOR sum of all elements of that subarray,
              
//               i.e a subarray from l to r (1 <= l <= r <= N) is lovely if A_l + A_l+1 + A_l+2 + ... + A_r = Al xor A_l+1 xor A_l+2 xor ... xor A_r.
              
               
              
//               Alice is not so good at programming so she asked you to count the number of lovely subarrays of array A.
              
//               The number of lovely subarrays can be large so you have to report count modulo 998244353.
              
//               Note:- A subarray is a contiguous part of an array
              
               
              
               
              
//               Constraints :
              
               
              
//               1 <= N <= 2*10^5
//               0 <= A[i] <= 2^30
               
              
               
              
               
              
//               Input Format :
              
               
              
//               The first line of each test case contains a single integer N, the number of elements in array A.
//               The second line of each test case contains N positive integers.
               
              
               
              
//               Output Format :
              
               
              
//               For each test case, output a single line— the number of lovely subarrays of array A modulo 998244353.
               
              
               
              
//               Sample Input :
              
               
              
//               6
              
//               4 7 10 7 6 9
              
               
              
               
              
//               Sample Output :
              
               
              
//               7
              
               
              
               
              
//               Explanation of Sample :
              
               
              
//               Following are the 7 lovely subarray [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [5, 6]
              
//               Note:- Here [l, r] means the subarray which starts at index l and ends at index r is lovely.
              
               
              
               
              
//               Things to Note for the Candidate :
 