function solution(s) {
  var answer = "";
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === " " ? (cnt = 0) : cnt++;

    cnt % 2 === 1 && s[i] !== " "
      ? (answer += s[i].toUpperCase())
      : (answer += s[i].toLowerCase());
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12930#
