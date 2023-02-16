const isEven = (num) => num % 2 === 0;

const numberOfSteps = (startNum) => {
  let num = startNum;
  let count = 0;

  while (num > 0) {
    num = isEven(num) ? num /= 2 : num -= 1;
    count += 1;
  }

  return count;
};

export default numberOfSteps;
