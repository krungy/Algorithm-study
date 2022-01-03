function solution(n) {
  var answer = 0;
  let third = n.toString(3);
  let reverse = "";

  for (let i = third.length - 1; i >= 0; i--) {
    reverse += third[i];
  }
  answer = parseInt(reverse * 1, 3);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/68935
