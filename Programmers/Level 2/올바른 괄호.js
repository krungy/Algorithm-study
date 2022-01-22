function solution(s) {
  var answer = true;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")") {
      if (stack.length == 0) {
        answer = false;
        break;
      }
      stack.pop();
    } else stack.push(s[i]);
  }
  if (stack.length >= 1) answer = false;

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12909
