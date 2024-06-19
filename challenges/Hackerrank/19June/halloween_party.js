/*
Alex is attending a Halloween party with his girlfriend, Silvia. 
At the party, Silvia spots the corner of an infinite chocolate bar (two dimensional, infinitely long in width and length).

If the chocolate can be served only as 1 x 1 sized pieces and Alex can cut the chocolate bar exactly  times, 
what is the maximum number of chocolate pieces Alex can cut and give Silvia?

Input Format
The first line contains an integer , the number of test cases.  lines follow.
Each line contains an integer .

Output Format
 lines; each line should contain an integer that denotes the maximum number of pieces that can be obtained for each test case.
*/

/*
 * Complete the 'halloweenParty' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER k as parameter.
 * url: https://www.hackerrank.com/challenges/halloween-party/problem
 */

function halloweenParty(k) {
    // Write your code here
    return Math.floor(k/2)*(k - Math.floor(k/2))
}