export const parseAccountNumber = (number: string) => {
  let maskedNum = number.slice(0, 2);
  for (let i = 0; i < number.length - 4; i++) {
    maskedNum += '*';
  }
  return maskedNum + number.slice(number.length - 2);
};
