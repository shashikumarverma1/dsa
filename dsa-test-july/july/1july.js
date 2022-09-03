function prefix(A,n) {
    
    let sum = 0;
    let prefixarr = []
    for (let i = 0; i < n; i++) {
        sum = sum + A[i]
        console.log(sum,A[i])
        if(sum % 2 !=0){
            prefixarr.push(A[i])
        }
    }
prefixarr.sort((a,b)=>{return a-b})
return prefixarr.length
}
let b=[3,4,6]
console.log(prefix(b))

Problem Statement



Antonio has an array A consisting of N integers.

An array B is a prefix of array A if B can be formed by deleting several(possibly zero but not all) elements from the end of array A. Like for array A = [5,1,4,2], the prefixes are A1..1 = [5], A1..2 = [5,1], A1..3 = [5,1,4], A1..4 = [5,1,4,2].

A prefix is considered good if the sum of its elements is an odd number. Like for A = [5,1,4,2], A1..1 and A1..4 are the good prefixes.

Now, Antonio wants to rearrange the elements of array A such that there are a maximum number of good prefixes in final array A.

Given array A, print the maximum number of good prefixes Antonio can get in final array A. Also print a possible arrangement of elements of array A. If there are many such arrangements, print the lexicographically smallest of them.



Input Format



First line contains a single integer denoting N.
Next line contains N space separated integers denoting the elements of array A.


Output Format



First print the maximum number of good prefixes Antonio can get in final array A.
Then in the next line print N space separated integers denoting an arrangement of elements of array A. If there are many such arrangements, print the lexicographically smallest of them.


Constraints



1<=N<=105
1<=Ai<=105


Sample Input 1



3

4 3 6



Sample Output 1



3

3 4 6



Explanation of Sample 1



A = [3,4,6]

Sum of elements in prefix A1..1 = 3

Sum of elements in prefix A1..2 = 3+4 = 7

Sum of elements in prefix A1..3 = 3+4+6 = 13

Hence it is possible to rearrange the elements of the given array such that all its three prefixes are good.



Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)









Question Name: Minimum removal 2



Problem Statement



Today was Antonio’s Birthday so he distributed chocolates to his friends. Antonio has N friends in his class and he gave Ci chocolates to the ith friend.

After distributing the chocolates Antonio found that he is left with nothing and hence decided to take in total S chocolates from some of his friends. But he doesn’t want to make them unhappy. So he wants to take chocolates from his friends such that :

Say finally(after taking the chocolates), ith friend has Fi chocolate. Then Minimum(Fi) over all 1<=i<=N must be as maximum as possible. Find and print this maximum value.
If it is not possible to take S chocolates, print “-1”.



Input Format



First line contains two space separated integers denoting N and S.
Next line contains N space separated integers. ith of these integers denote the number of chocolate ith friend got initially.


Output Format



Print the maximum possible value of Minimum(Fi) over all 1<=i<=N. Here F is an array denoting the final number of chocolates each friend has. If it is not possible to take S chocolates, print “-1”.


Constraints



1<=N<=105
1<=Ci<=109
1<=S<=109


Sample Input 1



3 4

5 3 4



Sample Output 1



2



Explanation of Sample 1



Antonio takes 3 chocolates from 1st friend and 1 chocolate from 2nd friend.

Final number of chocolates friend 1 gets = 2

Final number of chocolates friend 2 gets = 2

Final number of chocolates friend 3 gets = 4

Hence Array F = [2,2,4] and Minimum(Fi) over all 1<=i<=3 = 2. It can be proved that this is the maximum possible value.



Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)