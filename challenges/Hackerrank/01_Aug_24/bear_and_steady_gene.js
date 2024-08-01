/*
 * Complete the 'steadyGene' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING gene as parameter.
 *
 *  url: https://www.hackerrank.com/challenges/bear-and-steady-gene/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 */

function steadyGene(gene) {
  // Write your code here
  const validGenes = "ACGT";
  const validityRatio = gene.length / 4;
  const arr = gene.split("");
  const lenOfGenes = (x, arr) => {
    return arr.filter((i) => i === x).length;
  };
  const [a, c, g, t] = [
    lenOfGenes("A", arr),
    lenOfGenes("C", arr),
    lenOfGenes("G", arr),
    lenOfGenes("T", arr),
  ];
  console.log(arr);
  console.log(a, c, g, t)
}
const gene = "GAAATAAA";
const answer = "GTTCCGAA";

steadyGene(gene);
