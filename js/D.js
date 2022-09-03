// Road Necessary

// Problem Statement

// There are N cities in Crossland connected by M unidirectional roads. The king of Crossland was a very wise man so he decided to inform all the citizens about the shortest path between any particular pair of cities.
        
// He particularly wants to know that for all ordered pairs of cities (i,j) that are directly connected by a road, is there any shorter path between (i,j) going through some other set of cities.

 

// Input Format:

 

//  First line contains two space separated integers N and M
//  Next M lines contain three space separated integers u, v, w, meaning there is a road from u to v of length w units.(u!=v and only a single road exists between u and v).
 

 

// Output Format :

 

//  In the first line print T, the total number of unordered pairs of cities such that there is a road from u to v but there is a shorter path between a and b passing through some set of cities.
// In the next T lines print the values of u and v, sorted in increasing order of u first and then v.
 

 

// Constraints:

 

// 1<N<=100
// 1<M<=(N^2-N)
// 1<u,v<=N
// 1<=w<=1e9
 

 

// Sample Input :

 

// 3 5

// 2 3 5

// 3 2 3

// 2 1 2

// 1 3 7

// 1 2 25

 

 

 

// Sample Output :

 

// 1

// 1 2

 

 

 

// Explanation :

 


// For the 5th direct road, (1->2) we can use another path (1->3->2) whose length is 10

 

 

 

// Things to Note for the Candidate :

 

// You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)




// // 2.
// Knockout Spree

// Problem Statement :

 

// Jay is playing a game with his friends. There are 1 to N spots in a circle (i.e. next spot after N is 1).

 

// The person having the magic wand can knockout the next person standing from the game.

 

// Currently, the person standing on spot 1 has the wand. He will knock out the 2nd person and pass the wand to the (X+1)th person, where X is the total number of people that have been knocked out till now.

 

// The last person standing is the winner. Find out the spot, standing on which leads to the win.

 

// Note:- Knock out means being removed from the sequence.

 

 

// Input Format :

 

// First-line contains a single integer T, the number of test cases.
// The first line of each test case contains a single integer N.
 

 

// Output Format :

 

// For each of the T test cases: Print a single line containing an integer, the winning spot.
 

 

// Constraints :

 

// 1 <= T <= 100
// 1 <= N <= 10^4
// Note:- Sum of N over all test cases does not exceed 10^4.
 

 

// Sample Input :

 

// 2

// 10

// 2

 

 

// Sample Output :

 

// 10

// 1

 

 

// Explanation :

 

// In the 1st testcase, there are 10 spots. The order of people getting knocked out is : { 2, 5, 9, 6, 4, 8, 7, 3, 1}.

// In starting, 1 will knock out 2, then pass the wand to 4 who will knock out 5 and then he will pass the wand to 8 and the process continues and the last person standing will be 10.

 

 

 

// Things to Note for the Candidate:

 

// You can use your own IDE like Visual Studio Code, Eclipse or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

// Code in your favorite IDE and paste in the above widget
