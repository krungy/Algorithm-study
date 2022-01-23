function solution(s) {
  var answer = [];
  let currentStr = s;
  let zeroCount = 0;
  let convertCount = 0;
  while (true) {
    let removeZero = currentStr.match(/1/g).join("");
    zeroCount += currentStr.length - removeZero.length;
    currentStr = removeZero.length.toString(2);
    convertCount++;

    if (currentStr === "1") {
      break;
    }
  }
  return (answer = [convertCount, zeroCount]);
}

// https://programmers.co.kr/learn/courses/30/lessons/70129
