function solution(x) {
  var answer = true;
  let sum = 0;
  let tmp = x;

  while (x) {
    sum = sum + (x % 10);
    x = Math.floor(x / 10);
  }
  if (tmp % sum != 0) return false;

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12947
