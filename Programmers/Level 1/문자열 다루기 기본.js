function solution(s) {
  var answer = true;
  let num = "0123456789";

  if (s.length !== 4 && s.length !== 6) return false;
  for (let i = 0; i < s.length; i++) {
    if (num.indexOf(s[i]) === -1) return false;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12918
