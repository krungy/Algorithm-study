function solution(n, m) {
  var answer = [];
  const greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };
  const least = (a, b) => (a * b) / greatest(a, b);
  return [greatest(n, m), least(n, m)];
}

// https://programmers.co.kr/learn/courses/30/lessons/12940
