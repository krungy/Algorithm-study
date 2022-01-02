function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      i % j == 0 && cnt++;
    }
    cnt % 2 == 1 ? (answer -= i) : (answer += i);
  }
  return answer;
}
