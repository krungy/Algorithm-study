function solution(n) {
  var answer = "";
  let arr = [4, 1, 2];

  while (Math.floor(n)) {
    answer = arr[n % 3] + answer;
    if (n % 3 == 0) n = n / 3 - 1;
    else n = Math.floor(n / 3);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12899
