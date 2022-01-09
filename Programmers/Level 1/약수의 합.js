function solution(n) {
  var answer = 0;
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      answer += i;
    }
    i++;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12928
