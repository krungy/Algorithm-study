function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] === false ? (answer -= absolutes[i]) : (answer += absolutes[i]);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/76501
