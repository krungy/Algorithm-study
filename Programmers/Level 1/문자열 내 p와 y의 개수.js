function solution(s) {
  var answer = true;
  let pCnt = 0;
  let yCnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") pCnt++;
    if (s[i] === "y" || s[i] === "Y") yCnt++;
  }
  if (pCnt !== yCnt) answer = false;
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12916
