# Can Sum

Write a function `canSum(targetSum,numbers)` that takes in a targetSum and array of numbers as arguments.

```typescript
const canSum = (targetSum: number, numbers: number[]): boolean => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) return true;
  }
  return false;
};
```

`canSum(7,[5,3,4,7]) -> true`

```mermaid
graph TD
 A[7] -- -5 -->B[2]
 A -- -3 --> F[4]
 A -- -4 --> N[3]
 N -- -3 --> O[0]
 A -- -7 --> G[0]
 F -- -3 --> H[1]
 F -- -4 --> I[0]
```

`canSum(7,[2,4]) -> false`

```mermaid
graph TD
 A[7] -- -2 -->C[5]
 A -- -4 --> B[3]
 C -- -2 --> F[3]
 F -- -2 --> G[1]
 F -- -4 --> H[1]
 B -- -2 --> I[1]
```

## Memoize It

```typescript
const canSum = (
  targetSum: number,
  numbers: number[],
  memo: { [key: number]: boolean } = {}
): boolean => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (memoizedCanSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
```

`canSum(8,[2, 3 , 5]) -> true`

```mermaid
graph TD
A[8] -- -2 --> B[6]
A -- -3 --> C[5]
A -- -5 --> D[3]
B -- -2 --> F[4]
B -- -3 --> G[3]
F -- -2 --> H[2]
G -- -2 --> L[1]
G -- -3 --> I[0]
H -- -2 --> N[0]
F -- -3 --> O[1]
C -- -2 --> X[3]
C -- -3 --> P[2]
C -- -5 --> S[0]
X -- -2 --> V[1]
X -- -3 --> M[0]
P -- -2 --> UV[0]
D -- -2 --> OX[1]
D -- -3 --> UX[0]
```
