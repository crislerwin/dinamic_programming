# dinamic_programming

## Problem Statements

### Calculate the 40th number of the fibonacci sequence

1 - Implementation 1

```typescript
const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
```

![without_memoization](image.png)
