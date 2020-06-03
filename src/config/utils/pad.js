export const padDigits = (number, digits = 3) => {
  return (
    Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
  );
};
