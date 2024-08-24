function findShortestString(arr) {
  // type your code here
  let minStr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < minStr.length)
      minStr = arr[i];
  }
  return minStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'cat'");
  console.log("=>", findShortestString(['cat']));


  // BENCHMARK HERE
  
  function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomStr(len) {
    let randomStr = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < len; i++) {
      randomStr = randomStr.concat(alphabet[getRandomNum(alphabet.length)]);
    }

    // console.log("getRandomStr, len: ", len, ", randomStr: ", randomStr);

    return randomStr;
  }

  const longInput = [];
  for (let i = 0; i < 100; i++) {
    longInput.push(getRandomStr(getRandomNum(10)));
  }
  // console.log(longInput);

  const shortInput = [];
  for (let i = 0; i < 3; i++) {
    shortInput.push(getRandomStr(getRandomNum(10)));
  }
  // console.log(shortInput);

  const startTime = Date.now();
  for (let i = 0; i < 1000; i++) {
    findShortestString(shortInput);
    findShortestString(longInput);
  }
  const endTime = Date.now();
  console.log("Average Runtime: ", (endTime - startTime) / 2000);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
