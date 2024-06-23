/*
Given integers  and , find the smallest integer , such that there exists a triangle of height , base , having an area of at least .

image

Example


The minimum height  is . One example is a triangle formed at points (0, 0), (4, 0), (2, 3).

Function Description

Complete the lowestTriangle function in the editor below.

lowestTriangle has the following parameters:

int b: the base of the triangle
int a: the minimum area of the triangle
Returns

int: the minimum integer height to form a triangle with an area of at least 
Logic: A = 1/2 * base * height => height = 2*A/base.
*/
/*
 * Complete the 'lowestTriangle' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER trianglebase
 *  2. INTEGER area
 * url: https://www.hackerrank.com/challenges/lowest-triangle/problem
 */

function lowestTriangle(trianglebase, area) {
  // Write your code here
  return Math.ceil((2 * area) / trianglebase);
}
