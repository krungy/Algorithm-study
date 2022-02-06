function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let time = -1;
  let initialTruckNumber = truck_weights.length;
  let queue = Array.from({ length: bridge_length }, () => 0);
  let weightInBridge = 0;
  let passedTruckCount = 0;

  while (initialTruckNumber >= passedTruckCount) {
    time++;
    let currentTruck = truck_weights[0];
    let leftBridge = queue.shift();
    weightInBridge -= leftBridge;
    if (leftBridge !== 0) passedTruckCount++;
    if (currentTruck === undefined) {
      continue;
    }
    if (weightInBridge + currentTruck > weight) queue.push(0);
    else {
      queue.push(currentTruck);
      truck_weights.shift();
      weightInBridge += currentTruck;
    }
  }

  return (answer = time);
}

// https://programmers.co.kr/learn/courses/30/lessons/42583
