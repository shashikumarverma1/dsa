// function abc(A){
//    var k=0;
//    var b=[]
//    for(let i=0;i<A.length;i++){
//        if(A[i]<A[i+1]){
//            k++;
//            console.log(A[i],A[i+1])
//            console.log(k);
//        }
//            b.push(k)
       
//        console.log(b)
//    }
    
// }
// let c=[11, 6, 7, 5, 11, 11];
// abc(c)































// // [ 5, 6, 7, 11, 11, 11 ]

// // Problem Statement :

 

// // There are N people standing in a queue. They are numbered from 1 to N from left to right. You have been given an array A of size N, where A[i] denotes the height of the i-th person. A person i can see another person j, if i and j follows the following rules :

// // i < j
// // The height of every person between i and j should be less than the height of j-th person, i.e for every k(i < k < j), A[k]<A[j].
// // You have to print N integers, where i-th integer will denote the number of people i-th person can see.

 

// // Constraints :

 

// // 1 <= t  <= 10^3 
// // 1  <=N <= 10^5
// // 1  <=A[i]  <= 10^6
 

 

// // Input Format :

 

// // First-line contains a single integer t, the number of test cases.
// // The first line of each test case contains a single integer N, the number of people standing in the queue.
// // The second line of each test case contains N positive integers, i.e the height of people.
// // The sum of N over all test cases doesn’t exceed 4*10^5
 

 

// // Output Format :

 

// // For each test case, output a single line, and each line should contain N integers— Where i-th integer denotes the number of people the i-th person can see.
 

 

// // Sample Input :

 

// // 1
// // 6
// // 11 6 7 5 11 11

 

// // Sample Output :

 

// // 3 2 2 1 1 0 


 

// // Explanation of Sample :

 

// // 1st person can see the person standing at positions 2, 3, and 5.
// // 2nd person can see the person standing at positions 3 and 5.
// // 3rd person can see only the person standing at position 5.
// // 4th person can see only the person standing at position 5.
// // 5th person can see only the person standing at position 6.
// // No person standing in front of 6th person.
 

// ya and Manya

// Problem Statement: 

 


// Aanya and Manya are playing a game. Aanya loves mathematics so she challenges Manya that if she can answer her puzzle, she will take her to Starbucks for a free cup of coffee.

 

// Aanya takes K empty tiles and places them in front of Manya.

 

// Then she gives her infinite number of small cards that can be placed inside the tiles.

 

// Each card has a number ranging from 1-9 written on it. Manya can place any card on any of the tiles.

 

// She asks Manya to arrange the cards in the tiles in such a way that when she calculates the sum of the numbers placed in tiles it must be less than or equal to the product of the numbers placed in tiles. 

 

// Aanya knows this will be a very easy problem for Manya so she places a constraint that when she is done with placing the cards, the number thus formed by reading the digits from left to right must be the smallest number possible.

 


// Input format :

 

// The first line contains an integer T  denoting the number of test cases.
 

// For each test case:

//  The first line contains an integer K, the number of empty tiles.
 

 

 

// Output format :


 

// For each test case in a new line, print the smallest number that satisfies the given condition.
 

 

// Constraints: 

 

 

// 1 <= T <= 10^5
// 1 <= K <= 5 * 10^5
 

 

// Sample Input: 

 


// 2
// 1
// 3

 

// Sample Output: 

 


// 1
// 123

 

 

// Explaination:

 

// For the first test case, 1 is the smallest number which has a product of digits i.e. 1 greater than or equal to sum of digits i.e. 1.
// For the second test case, 123 is the smallest number which has a product of digits i.e. 6 greater than or equal to sum of digits i.e. 6
 

 

 

 

// Things to Note for the Candidate :

 

// You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sa