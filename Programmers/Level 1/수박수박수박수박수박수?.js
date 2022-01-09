function solution(n) {
  var answer = "";
  let i = 0;
  while (i < n) {
    i % 2 === 0 ? (answer += "수") : (answer += "박");
    i++;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12922
