// function abc(A, n, m, k) {
//     let map = new Map();
//     for (let i = 0; i < m.length; i++) {
//         map.set(m[i], i)
//     }
//     // console.log(map)
//     let cnt = 0;
//     for (let i = 0; i < n; i++) {
//         var ans = A.slice(i, n)
//         // let cnt = 0;
//         for (let i = 0; i < ans.length; i++) {
//             if (map.has(ans[i])) {
//                 cnt++
//             }
//             // console.log(cnt)
//         }
//         // console.log(cnt);
//         if(k==cnt){
//             console.log(ans)
//             // console.log(ans.length);
//             return ans.length;
//         }
//     }
   

// }
// let A = [1,2 ,3 ,2 ,5];
// let m=[3,2]
// console.log(abc(A, A.length,m,3))



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     wow
//     // your code goes here
// function abc(A, n, m, k) {
//     let map = new Map();
//     for (let i = 0; i < m.length; i++) {
//         map.set(m[i], i)
//     }
//     // console.log(map)
//     let cnt = 0;
//     for (let i = 0; i < n; i++) {
//         var ans = A.slice(i, n)
//         // let cnt = 0;
//         for (let i = 0; i < ans.length; i++) {
//             if (map.has(ans[i])) {
//                 cnt++
//             }
//             // console.log(cnt)
//         }
//         // console.log(cnt);
//         if(k==cnt){
//             console.log(ans)
//             // console.log(ans.length);
//             return ans.length;
//         }
//     }
   

// }
// let nmk=readline().split();
// let n=parseInt(nmk[0]);
// let m_length=parseInt(nmk[1]);
// let k=parseInt(nmk[2]);
// let m=[];
// for(let i=0;i<m_length;i++){
// 	var x=parseInt(readline())
// 	m.push(x);
// }

// let A=[];
// for(let i=0;i<n;i++){
// 	var y=parseInt(readline());
// 	A.push(y)
// }
// console.log(abc(A,n,m,k))
//     <script src="14may.js"></script>
// </body>
// </html>
// Tomato, Carrot,Beetroot
// Your current stamina is 1 you have N days to increase the stamina, You are given 3 arrays T[i](1<=i<=N), C[i](1<=i<=N) and B[i](1<=i<N)

// If you eat carrot on ith day your stamina will be multiplied by C[i], if you eat Tomato on ith day, your stamina will get multiplied by T[i] and if you eat Beetroot on ith day your stamina is multiplied by C[i]

// You need to eat exactly one of carrot, beetroot, and tomato each day. And you can not eat the same vegetable on consecutive days (i.e if you eat tomato on ith day you have to eat either beetroot or carrot on i+1th day)

// If you make poor choices and your stamina is minimum of what could have been obtained, what is your stamina



// Input Format



// The first line contains an integer X denoting the number of test cases

// The first line of each test case contains an integer denoting N

// The Next N lines contain 3 space-separated integers denoting T[i], C[i] and B[i] (1<=i<=N) respectively



// Output Format



// Print an integer denoting the minimum stamina you can obtain.



// Constraints



// 1<=X<=1000

// 1<=N<=30

// -4<=T[i],B[i],C[i]<=4



// Sample Input



// 1

// 2

// -1 4 -3

// -1 1 2



// Sample Output



// -4



// Explanation



// Eat carrot on day 1 so your stamina becomes 1*4=4

// Eat tomato on day 2 so your stamina becomes 4*-1 = -4



// stion 2
// IDE Submission
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

