function solution(priorities, location) {
  var answer = 0;
  let stack = [];
  priorities[location] += " ";
  let tmp = Array.from(priorities);

  while (tmp.length >= 1) {
    if (Math.max(...tmp) <= tmp[0]) {
      stack.push(tmp[0]);
      tmp.shift();
    } else {
      tmp.push(tmp[0]);
      tmp.shift();
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].length > 1) {
      answer = i + 1;
      break;
    }
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42587
