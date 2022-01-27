function solution(s) {
  var answer = -1;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }
    let tmp = stack[stack.length - 1];
    s[i] === tmp ? stack.pop() : stack.push(s[i]);
  }
  stack.length ? (answer = 0) : (answer = 1);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12973
