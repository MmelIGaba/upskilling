/*
At the annual meeting of Board of Directors of Acme Inc. If everyone attending shakes hands exactly one time with every other attendee, 

how many handshakes are there?

Example
There are  attendees, ,  and .  shakes hands with  and , and  shakes hands with . 
ow they have all shaken hands after  handshakes.

Function Description

Complete the handshakes function in the editor below.

handshakes has the following parameter:

int n: the number of attendees
Returns

int: the number of handshakes
url: https://www.hackerrank.com/challenges/handshake/problem
*/
/*
 * Complete the 'handshake' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function handshake(n) {
    // Write your code here
    let x = 0;
    for(let i = n-1; i > 0; i--){
        x += i;
    }
    return x;
}
