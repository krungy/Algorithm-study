function solution(n) {
  var answer = [];

  while (n) {
    answer.push(n % 10);
    n = parseInt(n / 10);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12932
