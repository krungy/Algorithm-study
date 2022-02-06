const gdc = (a, b) => {
  while (b > 0) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gdc(a, b);
};

function solution(arr) {
  var answer = 1;

  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12953
