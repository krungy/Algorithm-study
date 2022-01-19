function solution(s) {
  var answer = "";
  let isStart =
    (s[0] >= "a" && s[0] <= "z") || (s[0] >= "A" && s[0] <= "Z") ? true : false;

  for (let i = 0; i < s.length; i++) {
    isStart ? (answer += s[i].toUpperCase()) : (answer += s[i].toLowerCase());
    s[i] === " " ? (isStart = true) : (isStart = false);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12951
