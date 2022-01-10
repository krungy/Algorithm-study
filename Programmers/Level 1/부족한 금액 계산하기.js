function solution(price, money, count) {
  var answer = -1;
  let needMoney = 0;
  for (let i = 1; i <= count; i++) {
    needMoney += price * i;
  }
  needMoney > money ? (answer = needMoney - money) : (answer = 0);

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/82612
