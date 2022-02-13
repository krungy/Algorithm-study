// function solution(n, arr1, arr2) {
//   var answer = [];

//   for (let i = 0; i < n; i++) {
//     let binary1 = arr1[i].toString(2);
//     let binary2 = arr2[i].toString(2);
//     binary1 = "0000000000000000" + binary1;
//     binary2 = "0000000000000000" + binary2;
//     binary1 = binary1.slice(-n);
//     binary2 = binary2.slice(-n);
//     let curSum = "";

//     for (let j = 0; j < binary1.length; j++) {
//       binary1[j] === "1" || binary2[j] === "1"
//         ? (curSum += "#")
//         : (curSum += " ");
//     }
//     answer.push(curSum);
//   }

//   return answer;
// }

// 새로운 풀이
function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let converted = "";
    let arr1Item = arr1[i].toString(2) + "";
    let arr2Item = arr2[i].toString(2) + "";
    while (arr1Item.length !== n || arr2Item.length !== n) {
      if (arr1Item.length < n) {
        arr1Item = "0" + arr1Item;
      }
      if (arr2Item.length < n) {
        arr2Item = "0" + arr2Item;
      }
    }
    for (let j = 0; j < n; j++) {
      arr1Item[j] === "1" || arr2Item[j] === "1"
        ? (converted += "#")
        : (converted += " ");
    }
    answer.push(converted);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/17681
