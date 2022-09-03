// Taller Or Shorter

// Question Name: Taller Or Shorter

// Problem Statement

// Antonio is one of the organizing members of this year’s Boys Scout Campaign. Antonio has been allotted N boys this year. Antonio arranged all these boys in a line from 1 to N.

// Now he made a comparison array based on the heights of these boys. Comparison array is an array of size N-1, where the ith element is :

// 1, if the height of the ith boy is more than the height of the (i+1)th boy.
// -1, if the height of the ith student is less than the height of the (i+1)th student.
// 0, if the height of the ith student is equal to the height of the (i+1)th student.
// Now all the boys have gone home and Antonio has to answer Q queries :

// In the ith query, he will be given two integers a and b and he has to tell if the height of the ath boy is more than, equal to, or less than the height of the bth boy.
// Antonio is facing difficulties in answering the queries and asks his coder friend(you) for help. Given the comparison array, answer the Q queries for Antonio.

// In each query print “1”(without quotes) if ath boy is taller than bth boy, “-1” if ath boy is shorter than bth boy, “0” is the ath and the bth boy have the same height. If for any query the information is insufficient print “Not Possible”(without quotes) instead.

// Input Format

// First line contains a single integer denoting N.
// Next line contains N-1 space separated integers denoting the elements of the comparison array.
// Next line contains a single integer denoting Q.
// Next Q lines contains two space separated integers denoting a and b for each of the queries.
// Output Format

// For each query print “1”(without quotes) if ath boy is taller than bth boy, “-1” if ath boy is shorter than bth boy, “0” is the ath and the bth boy have the same height.
// Print the answer for every query in a separate line.
// Constraints

// 2<=N<=105
// 1<=Q<=105
// 1<=a,b<=N
// a!=b
// Sample Input 1

// 4

// 1 0 -1

// 3

// 1 2

// 1 4

// 2 4

// Sample Output 1

// 1

// Not Possible

// -1

// Explanation of Sample 1

// Query 1 :

// Clearly 1 has more height than 2, as A1 = 1.
// Query 3 :

// The heights of students 2 and 3 are equal as A2 = 0. As A3 = -1, the height of student 3 is less than the height of 4. Hence the height of student 2 is also less than the height of student 4.
// Query 2 :

// Consider that the heights of the students were: [10 8 8 9] and [10 8 8 11]. For both these heights, the comparison array is [1 0 -1]. But in the first case height of the 1st student is more than the height of the 4th student, and in the second case height of the 1st student is less than the height of the 4th student.
// Hence we can’t say which one is greater/smaller from the comparison array.

// Minimum Cores

// Question Name: Minimum Cores

// Problem Statement

// Antonio recently got a job as a Multi-core processor architect at Qualcomm. In this job, he is given a sequence of tasks(in form of their starting and ending time) and Antonio is required to find the minimum number of cores the CPU shall have to process all these tasks.

// Different tasks can be processed simultaneously in different cores of the CPU, but one core of the CPU can only process one task at a time. Also if a task has been assigned to a core, it cannot be preempted(i.e. Stop processing) until the task has completed. After the task assigned to a core is completed, some other task can be assigned to it.

// Recently Antonio has got a huge pool of N tasks and is required to find the minimum number of cores the CPU shall have to process all these tasks. As the number of tasks is very large, it's not possible to do it manually and he asked his coder friend(you) for help.

// Given the starting and ending time of all the N tasks, print the minimum number of CPU cores required to process all these N tasks.

// Input Format

// First line contains a single integer denoting N.
// Next N lines contain two space separated integers denoting the starting and ending time of the tasks.
// Output Format

// Print the minimum number of CPU cores required to process all these N tasks.
// Constraints

// 1<=N<=105
// 1<=starting time of a process < ending time of a process <= 109
// Sample Input 1

// 4

// 1 2

// 1 3

// 2 3

// 4 5

// Sample Output 1

// 2

// Explanation of Sample 1

// Let's consider the CPU has two cores, core1, and core2. We can assign the tasks as below to complete all 4 tasks using 2 cores.

// Time 0 : None of the tasks have started.

// Time 1 : Tasks 1 and 2 have arrived. Assign task 1 to core1 and task 2 to core2.

// Time 2 : Task 1 is completed and core1 is free now. Task 3 has also arrived and we assign it to core1.

// Time 3 : Task 2 and 3 are completed and both the cores are free now.

// Time 4 : Task 4 has arrived and is assigned to core1.

// Time 5 : Task 4 has been completed.
