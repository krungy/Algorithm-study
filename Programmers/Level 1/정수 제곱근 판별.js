function solution(n) {
  let sqrtNum = Math.sqrt(n);
  return sqrtNum % 1 === 0 ? (sqrtNum + 1) * (sqrtNum + 1) : -1;
}

// https://programmers.co.kr/learn/courses/30/lessons/12934
