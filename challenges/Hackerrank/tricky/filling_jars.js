/*
Animesh has  empty candy jars, numbered from  to , with infinite capacity. He performs  operations. 
Each operation is described by  integers, , , and . Here,  and  are indices of the jars, and  is the number 
of candies to be added inside each jar whose index lies between  and  (both inclusive). Can you tell the average number 
of candies after  operations?

Example



The array has  elements that all start at . In the first operation, add  to the first  elements. Now the array is . 
In the second operation, add  to the last  elements (3 - 5). Now the array is  and the average is 10. Sincd 10 is already an integer value, 
it does not need to be rounded.

Function Description

Complete the solve function in the editor below.

solve has the following parameters:

int n: the number of candy jars
int operations[m][3]: a 2-dimensional array of operations
Returns

int: the floor of the average number of canidies in all jars
url: https://hackerrank.com/challenges/filling-jars/problem
*/
/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY operations
 */

function solve(n, operations) {
    let sum = 0;
    for(let i = 0; i < operations.length; i++){
        const [a, b, k] = operations[i];
        sum += (b - a + 1) * k;
    }
    return Math.floor(sum/n);
}