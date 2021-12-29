function solution(s) {
  var answer = "";
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      answer += s[i];
    } else {
      word += s[i];
      if (words.indexOf(word) !== -1) {
        answer += words.indexOf(word);
        word = "";
      }
    }
  }

  return answer * 1;
}

// https://programmers.co.kr/learn/courses/30/lessons/81301
