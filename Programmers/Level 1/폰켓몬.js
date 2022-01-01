function solution(nums) {
  var answer = 0;
  let arr = [];
  let cnt = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (arr.indexOf(nums[i]) === -1) arr.push(nums[i]);
  }
  if (cnt <= arr.length) {
    answer = cnt;
  } else {
    answer = arr.length;
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/1845
