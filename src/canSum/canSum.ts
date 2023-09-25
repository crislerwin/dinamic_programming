export const canSum = (targetSum: number, numbers: number[]): boolean => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};
