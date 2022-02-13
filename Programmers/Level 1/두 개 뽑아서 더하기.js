// function solution(numbers) {
//   var answer = [];
//   let tmp = 0;

//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       let bool = 1;
//       let sum = numbers[i] + numbers[j];
//       for (let k = 0; k < answer.length; k++) {
//         if (answer[k] == sum) bool = 0;
//       }
//       if (bool == 1) answer.push(sum);
//     }
//   }

//   for (let i = 0; i < answer.length; i++) {
//     for (let j = 0; j < answer.length - i; j++) {
//       if (answer[j] > answer[j + 1]) {
//         let tmp = answer[j + 1];
//         answer[j + 1] = answer[j];
//         answer[j] = tmp;
//       }
//     }
//   }
//   return answer;
// }

// 새로운 풀이
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
// https://programmers.co.kr/learn/courses/30/lessons/68644
