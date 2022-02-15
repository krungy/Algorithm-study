function solution(numbers) {
  var answer = numbers.map((num) => num + "").sort((a, b) => b + a - (a + b));
  return answer[0] === "0" ? "0" : answer.join("");
}

// https://programmers.co.kr/learn/courses/30/lessons/42746
