/*
Consider two points,  and . We consider the inversion or point reflection, , of point  across point  to be a  rotation of point  around .

Given  sets of points  and , find  for each pair of points and print two space-separated integers denoting the respective values of  and
  on a new line.

Function Description

Complete the findPoint function in the editor below.

findPoint has the following parameters:

int px, py, qx, qy: x and y coordinates for points  and 
Returns

int[2]: x and y coordinates of the reflected point 
url: https://www.hackerrank.com/challenges/find-point/submissions
*/
/*
 * Complete the 'findPoint' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER px
 *  2. INTEGER py
 *  3. INTEGER qx
 *  4. INTEGER qy
 */

function findPoint(px, py, qx, qy) {
    // Write your code here
    const rx = qx + (qx-px);
    const ry = qy + (qy-py);
    console.log(px, py);
    console.log(qx, qy)
    console.log(rx, ry);
    
    return [rx, ry];
}
