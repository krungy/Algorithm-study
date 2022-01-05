function solution(x, n) {
  var answer = [];
  let num = x;

  answer.push(num);
  for (let i = 1; i < n; i++) {
    num += x;
    answer.push(num);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12954
