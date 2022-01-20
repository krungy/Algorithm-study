function solution(s) {
  var answer = "";
  let sCpy = s.slice().split(" ");
  let max = sCpy[0] * 1;
  let min = sCpy[0] * 1;
  for (let i = 0; i < sCpy.length; i++) {
    let tmp = sCpy[i] * 1;

    if (tmp > max) max = tmp;
    if (tmp < min) min = tmp;
  }
  return (answer = `${min} ${max}`);
}

// https://programmers.co.kr/learn/courses/30/lessons/12939
