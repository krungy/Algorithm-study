function gcd(w, h) {
  const max = Math.max(w, h);
  const min = Math.min(w, h);
  const mod = max % min;

  if (mod === 0) return min;
  else return gcd(min, mod);
}

function solution(w, h) {
  let answer;
  const value = gcd(w, h);

  answer = w * h - (w + h - value);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/62048
