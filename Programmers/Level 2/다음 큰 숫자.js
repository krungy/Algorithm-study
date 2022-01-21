function solution(n) {
  var answer = 0;
  const nBinaryCountOne = (n.toString(2) + "")
    .match(/1/g)
    .filter((value) => value !== "").length;
  let findNum = n + 1;
  while (true) {
    let findBinaryCountOne = (findNum.toString(2) + "")
      .match(/1/g)
      .filter((value) => value !== "").length;
    if (nBinaryCountOne === findBinaryCountOne) {
      answer = findNum;
      break;
    } else findNum++;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12911
