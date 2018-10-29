/* eslint-disable-next-line */
export const doubleNum = num => {
  const length = num.toString().length;
  const index = length / 2;

  const firstPart = num.toString().slice(0, index);
  const secondPart = num.toString().slice(index, length);

  if (firstPart === secondPart) {
    return num;
  }

  return num * 2;
};
