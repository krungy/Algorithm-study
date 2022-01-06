function solution(phone_number) {
  var answer = "";
  let j = phone_number.length - 4;

  for (let i = 0; i < j; i++) {
    answer += "*";
  }
  while (j < phone_number.length) {
    answer += phone_number[j];
    j++;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12948
