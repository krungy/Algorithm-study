function solution(numbers, target) {
  var answer = 0;

  function DFS(sum, count) {
    if (count >= numbers.length) {
      if (sum === target) answer++;
      return;
    } else {
      DFS(sum - numbers[count], count + 1);
      DFS(sum + numbers[count], count + 1);
    }
  }

  DFS(0, 0);
  return answer;
}
