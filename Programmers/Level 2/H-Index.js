function solution(citations) {
  var answer = 0;
  let i = 0;
  let arr = citations.sort((a, b) => b - a);

  while (i + 1 <= arr[i]) {
    i++;
  }
  answer = i;
  return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/42747
