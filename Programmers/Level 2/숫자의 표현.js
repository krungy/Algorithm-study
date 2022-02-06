function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let j = i + 1; sum <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
      }
    }
  }
  return answer + 1;
}

// https://programmers.co.kr/learn/courses/30/lessons/12924
