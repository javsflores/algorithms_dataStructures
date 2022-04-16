/*
    addUpToNow add all the integers from 0 to the nth digit
      Question: Something interesting happening is that after 1.4 million or so, the first solution
      or "brute" approach, starts to give you the wrong results. I'm curious why this is happening.
      First assumption is method starts to time out and returns
*/
let nValue = 100000000;

let addUpToNow = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

let start = +new Date();
console.log(addUpToNow(nValue));
let end = +new Date();
console.log("Performance of addUpToNow:", (end - start) / 1000, "seconds");

let refactoredAddUpToNow = (n) => {
  return (n * (n + 1)) / 2;
};

start = +new Date();
console.log(refactoredAddUpToNow(nValue));
end = +new Date();
console.log(
  "Performance of refactoredAddUpToNow:",
  (end - start) / 1000,
  "seconds"
);
