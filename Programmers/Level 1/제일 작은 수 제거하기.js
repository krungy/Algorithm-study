function solution(arr) {
  var answer = [];
  // slice ... 깊은복사하기의 한 방법
  let arrcpy = arr.slice();
  arrcpy.sort((a, b) => b - a);
  let min = arrcpy.pop();

  for (let i = 0; i < arr.length; i++) {
    arr[i] !== min && answer.push(arr[i]);
  }

  return answer.length ? answer : [-1];
}

// https://programmers.co.kr/learn/courses/30/lessons/12935
