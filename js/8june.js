// Question Name: K divison

// Problem Statement

// Klaus thinks that he is a genius. Antonio wants to test Klaus’s IQ for that he asked him a problem.

// Given an array A of size N and an integer, K. Antonio asked Klaus to divide array A into K nonempty subsequence. Such that each element of the array should be part of exactly one subsequence. Now the Goodness of this division will be equal to

// Example:- For array A {2,4,3,6,1} dividing this array into two subsequence {2,4,1} and {3,6} the the Goodness of this division will be =(4-1)+(6-3)= 6.

// Now Antonion wants the goodness of the division to be the maximum possible.

// You have to help Klaus So that he remains a genius in front of Antonio.

// Your task is to determine the Maximum value of Goodness of the division.

// Note:-

// A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements.
// Input Format

// The first line contains two space-separated integers N and K.
// The second line contains N space-separated integers, the array A.
// Output Format

// Print the maximum value of Goodness of the division.
// Constraints

// 1<=K<=N<=10^5
// 1<=A[i]<=10^9
// Sample Input 1

// 6 2

// 2 4 3 6 1 3

// Sample Output 1

// 7

// Explanation of Sample 1

// For test case 1

// For getting maximum goodness one of the possible division is {2,4,3}, {6,1,3}

// And goodness = (4-2)+(6-1)=7



// Question Name: Equal halves

// Problem Statement

// Antonio recently bought an array A consisting of N positive integers. He decided to gift this array to his girlfriend Teena, but Teena likes only a very specific type of array.

// She likes an array if and only if :

// The array has an even length.
// The elements of the array lie in the range 0 to K(both inclusive).
// The sum of elements in the first half of the array equals the sum of elements in the second half of the array.
// For example, Teena likes arrays [2,2], [1,3,2,2] etc. but does not like arrays [1,2,3], [1,3,2,3] etc.
// Antonio did not know this likeliness of Teena while buying the array and now wants to change a few elements of his array so that Teena likes it.

// To do so he can perform the below operation on the array :

// Select some element of the array and replace it with some other integer.
// Given array A and integer K, Print the minimum number of operations Antonio needs to perform on his array so that his girlfriend Teena likes the final array.

// Input Format

// First line contains two space separated integers denoting N and K.
// The next line contains N space-separated integers denoting the elements of array A.
// Output Format

// Print the minimum number of operations Antonio needs to perform on his array so that his girlfriend Teena likes the final array.
// Constraints

// 1<=N<=10^5. N is guaranteed to be even.
// 0<=K<=10^9
// 0<=Ai<=K
// Sample Input 1

// 6 4

// 1 2 0 3 4 4

// Sample Output 1

// 2

// Explanation of Sample 1

// Antonio can perform the operations as :

// Operation 1 :
// Change the 3rd element of the array to 4. Array becomes = [1 2 4 3 4 4].
// Operation 2 :
// Change the 6th element of the array to 0. Array becomes = [1 2 4 3 4 0].
// Now in the final array [1 2 4 3 4 0] :

// The array is of length 6. Which is even.
// All elements lie in the range 0 to 4.
// Sum of first half of array = 1+2+4 = 7, and sum of second half of the array = 3+4+0 = 7 are equal.
// Hence Teena loves the final array.

 

 