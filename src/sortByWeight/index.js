/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const arrayCopy = arr.slice();

  arrayCopy.sort(compareNumbers);

  return arrayCopy;
};

const addNumbers = number => {
  let result = null;

  for (const num of number.toString()) {
    result += parseInt(num);
  }

  return result;
};

const compareNumbers = (firstNumber, secondNumber) => {
  const resultFirst = addNumbers(firstNumber);
  const resultSecond = addNumbers(secondNumber);

  return resultFirst - resultSecond;
};
