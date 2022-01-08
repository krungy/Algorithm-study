function solution(n) {
  var answer = 0;
  let arr = (n + "").split("");
  arr.sort((a, b) => b - a);
  return (answer = arr.join("") * 1);
}

// https://programmers.co.kr/learn/courses/30/lessons/12933
