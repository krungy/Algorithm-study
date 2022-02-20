function solution(progresses, speeds) {
  var answer = [];
  let queue = [];
  let day = 0;
  let max = 0;

  if (progresses.length === 1) {
    return [1];
  }

  for (let i = 0; i < progresses.length; i++) {
    queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  max = queue[0];
  day++;

  for (let i = 1; i < queue.length; i++) {
    if (max >= queue[i]) {
      day++;
    } else {
      answer.push(day);
      day = 1;
      max = queue[i];
    }
  }
  answer.push(day);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42586
