// function solution(num) {
//   var answer = 0;
//   let nbr = num;

//   if (num == 1) {
//     return 0;
//   }
//   for (let i = 1; i <= 500; i++) {
//     if (nbr % 2 == 0) {
//       nbr /= 2;
//     } else if (nbr % 2 == 1) {
//       nbr = nbr * 3 + 1;
//     }
//     if (nbr == 1) {
//       answer = i;
//       break;
//     } else if (i == 500 && nbr != 1) {
//       answer = -1;
//     }
//   }
//   return answer;
// }

// 2번째 풀이
function solution(num) {
  var answer = 0;
  let count = 0;

  if (num === 1) {
    return 0;
  }

  while (count <= 501) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    if (num === 1) break;
    else count++;
  }
  count <= 500 ? (answer = count + 1) : (answer = -1);
  return answer;
}
// https://programmers.co.kr/learn/courses/30/lessons/12943
