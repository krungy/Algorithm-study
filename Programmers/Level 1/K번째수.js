function solution(array, commands) {
  var answer = [];
  let cpy = array;

  for (let i = 0; i < commands.length; i++) {
    let ans = cpy.slice(commands[i][0] - 1, commands[i][1]);
    ans.sort((a, b) => a - b);
    answer.push(ans[commands[i][2] - 1]);
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42748
