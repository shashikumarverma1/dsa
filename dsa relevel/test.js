// function count(S , m , n )
// {
// 	// use process.stdout.write("hello") to print the output
//   	//implement your  logic here - you dont have to return anything, print the output here
// }
// // Driver program to test above function
// var n = parseInt(readline());
// var arr = readline().split(' ').map(item => parseInt(item));
// var m = arr.length;
// console.log( count(arr, m, n));2. Railway Platform

// Problem Statement

// Given the arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits. 
// We are given two arrays that represent the arrival and departure times of trains that stop.

 

// Constraint 

 

// Input should be in the time format (hours:minutes) format

 

// Input Format

//            Two arrays separated by newline and each array element separated by space

 

// Output Format

// Integer

 

// Explanation

// From the below input default 1 track should be free for train to be arrived

// 9:00 => 9:10 (default track is booked and it will be released at 9:10)
// 9:40 => 12:00 (default track is released and it is free to use the default track so far required track is 1)
// 9:50 => 11:20 (Need one more track as the default track is not free at that interval so far required track is 2)
// 11:00 => 11:30 (Need one more track as the existing track is not free at that interval so far required track is 3)
// 15:00 => 19:00 (No additional track is required since all tracks are free at that interval so far required track is 3)
// 18:00 => 20:00 (No additional track is required since all tracks are free at that interval so far required track is 3)
 

// So, the output is 3

 

// Sample Input 1 :

// 900 940 950 1100 1500 1800

// 910 1200 1120 1130 1900 2000

 

  

// output :  

// 3

 

// Sample Input 2 :

// 900 940

// 910 1200

 

// output :  

// 1

// 1. Coin Change

// 1. Coin Change

// Problem Statement

// Given a value N, if we want to make change for N cents, and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, how many ways can we make the change? The order of coins doesn’t matter.

 

// Constraint

// Input should be a number

 

// Explanation:

// From the input 4 is the total number when we add the pair of number {1, 2, 3}

// Below are the pairs

// { 1, 1, 1, 1 } => 4
// { 1, 2, 1 } => 4
// { 2, 2 } => 4
// { 1, 3 } => 4
// Total 4 pairs so the output is 4

 

// Input Format

// First line of Input should be a number N

// Second line of input should be a number separated by space

 

// Output Format

// Number of pairs as Number

 

// Sample Input 1 :

// 4

// 1 2 3

  

// output :  

// 4

 

// Sample Input 2 :

// 10

// 1 2 3 4 5 6

 

// output :  

// 35

// function count(S , m , n )
// {
// 	// use process.stdout.write("hello") to print the output
//   	//implement your  logic here - you dont have to return anything, print the output here
// }
// // Driver program to test above function
// var n = parseInt(readline());
// var arr = readline().split(' ').map(item => parseInt(item));
// var m = arr.length;
// console.log( count(arr, m, n));
// function railways (arr, dep) {
// 	let pfCount = 1;
// 		// use process.stdout.write("hello") to print the output
//   		//implement your  logic here - you dont have to return anything, print the output here
// 	Return pfCount;
// }

// let arr = readline().split(' ').map(item => parseInt(item));
// let dep = readline().split(' ').map(item => parseInt(item));
// console.log(railways(arr, dep));