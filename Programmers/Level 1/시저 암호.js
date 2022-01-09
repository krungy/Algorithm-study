function solution(s, n) {
  var answer = "";
  let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerStr = "abcdefghijklmnopqrstuvwxyz";

  let upperArr = upperStr.split("");
  let lowerArr = lowerStr.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
      continue;
    }
    if (s[i] >= "a" && s[i] <= "z") {
      let findIndex = (lowerArr.indexOf(s[i]) + n) % 26;
      answer += lowerArr[findIndex];
    } else {
      let findIndex = (upperArr.indexOf(s[i]) + n) % 26;
      answer += upperArr[findIndex];
    }
  }
  return answer;
}
