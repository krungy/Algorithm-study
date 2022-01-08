function solution(n) {
  var answer = 0;

  while (n) {
    answer += n % 10;
    n = parseInt(n / 10);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12931
