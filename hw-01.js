const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, NaN, true, false, "1", "2", 0];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

function func() {
  for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i];
    if (typeof element == "number") {
      if (element % 2 == 0) {
        evenCount++;
      } else {
        oddCount++;
      }
      if (element === 0) {
        zeroCount++;
      } else {
        continue;
      }
    }
  }

  console.log("Четные числа: " + evenCount);
  console.log("Нечетные числа: " + oddCount);
  console.log("Нулевые элементы: " + zeroCount);
}

func();
