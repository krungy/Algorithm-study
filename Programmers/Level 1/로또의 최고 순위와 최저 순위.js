function solution(lottos, win_nums) {
  var answer = [];
  let max = 0;
  let min = 0;

  for (let i = lottos.length - 1; i >= 0; i--) {
    let eq = win_nums.indexOf(lottos[i]);
    if (eq !== -1) {
      min++;
    }
    if (lottos[i] === 0) {
      max++;
    }
  }
  max += min;

  max = 7 - max;
  if (max === 0) {
    max = 1;
  } else if (max === 7) {
    max = 6;
  }
  min = 7 - min;
  if (min === 0) {
    min = 1;
  } else if (min === 7) {
    min = 6;
  }
  answer.push(max, min);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/77484
