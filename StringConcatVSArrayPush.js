/*
 Generate a random string with 10 milion characters by using string concatenation 
 vs pushing to array
*/

const { TEST_SUITE_EXECUTION_TIMES } = require("./src/constants");
const { timeAvarage } = require("./src/utils/timeAvarage");
// TEST CASE 1 - Using string concatenation
// const testCase1 = [];
// for (let i = 0; i < TEST_SUITE_EXECUTION_TIMES; i++) {
//   const start = performance.now();
//   let initialString = "";
//   for (let i = 0; i < 1e7; i++) {
//     initialString += Buffer.from(Math.random().toString()).toString("base64").substring(10, 15);
//   }
//   const end = performance.now();
//   const duration = end - start;
//   testCase1.push(duration);
// }

// console.log("testCase1 avarage: " + Math.round(timeAvarage(testCase1)) + " ms");

// TEST CASE 2 - Pushing to array
const testCase2 = [];
for (let i = 0; i < TEST_SUITE_EXECUTION_TIMES; i++) {
  let initialString = [];
  for (let i = 0; i < 1e7; i++) {
    initialString.push(Buffer.from(Math.random().toString()).toString("base64").substring(10, 15));
  }

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

  testCase2.push(duration);
}

console.log("testCase2 avarage: " + Math.round(timeAvarage(testCase2)) + " ms");
