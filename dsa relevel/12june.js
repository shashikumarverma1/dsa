// cNew Year Gifts

// Problem Statement

 

// Every year in School during the new year time, the teacher conducts an event for the students called New year card to increase the friendship among students.

// Student roll numbers from 1 to n take part in the event total n number of students. Each Student i is assigned a different Student Si, to which Student i has to make a new year greeting card. Each student is assigned to exactly one other Student, and nobody is assigned to themselves. In other words, all Si must be distinct integers between 1 and n, and for any i, Si≠i must hold.

// Every year these assignments were done by the teacher but this year due to the covid-19 situation as the teacher was busy with other School work. All the students have been asked to whom they wish to make a card.

// Every student (ith) wishes to make a card for jth student. While i!=j , means a student cannot wish to give himself a card,and every student has to wish for exactly 1 out of the n-1 remaining students.

// Find a valid assignment S that maximizes the number of fulfilled wishes of the Students.

 

// Input format

 

// The first line of the input gives the number of test cases T to be answered. First-line integer N size of the array

// The next line contains N space-separated integers representing the wishes of the students in order 1 to n.

 

// Output format

 

// In each separate line print the maximum number of students whose wishes will be fulfilled.

 

// Constraints:

 

// 1<= T<= 1000

// 1<= N<= 10^5

// 1<= Array[i] <= N

// Sum of N over all the test cases does not exceed 10^5.

 

// SAMPLE INPUT:

 

// 1

// 7

// 6 4 6 2 4 5 6

 

// SAMPLE OUTPUT:

 

// 4

 

// EXPLANATION:

 

// In this permutation, 4 students will be happy which is the maximum there can be other permutations as well but not with more than 4 students will be happy in any order.

// One of the permutations can be [6 ,4 ,7, 2 ,3 ,5 ,1] or [3,4,6,2,1,5,7]

// Subsequence Rearrangement

// Problem Statement

 

// Antonio got an array A consisting of N positive integers as his christmas present.

// Antonio likes uniformity and does not like this array because its elements have been arranged very randomly. He will like the array if and only if it is sorted(either in ascending or descending order).

// To do so he decided to perform the below operation exactly once :

// Select a subsequence of array A of size K and rearrange the numbers in that subsequence.
// For example if A = [1 2 5 4 3], and Antonio decided to select subsequence [1 2 5 4 3], then he can rearrange it as [1 2 3 4 5] to sort array A in ascending order.
// As rearranging a very large subsequence can be a tedious task, Antonio wants to select the subsequence with minimum possible length(i.e. K should be minimised).

// As Antonio is weak in problem solving with arrays he asked you for help. Given array A, print the minimum possible value of K such that Antonio can perform the given operation on a K length subsequence and make array A sorted(either in ascending or descending order).

 

// Input Format

 

// First line of input contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
 

// Output Format

 

// Print the minimum possible value of K such that Antonio can perform the given operation on a K length subsequence and make array A sorted(either in ascending or descending order).
 

// Constraints

 

// 1<=N<=10^5
// 1<=Ai<=10^5
 

// Sample Input 1

 

// 5

// 1 2 5 4 3

 

// Sample Output 1

 

// 2

 

// Explanation of Sample 1

 

// Antonio can select the subsequence [1 2 5 4 3] and rearrange its elements as [1 2 3 4 5] to make array A sorted in ascending order.

 