function circularArrayRotation(a, k, queries) {
    // Write your code here
    const arr = a.slice(k, a.length - k) + a.slice(0, k+1);
    console.log(arr)
    queries = a.slice(queries[0], queries[1]);
    console.log(queries)
    return queries;
}

const a = [3, 4, 5];
const k = 2;
const queries = [1, 2];

circularArrayRotation(a, k, queries)