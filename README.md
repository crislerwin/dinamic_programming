# dinamic_programming

## Problem Statements

### Calculate the 40th number of the fibonacci sequence

1 - Implementation 1

```typescript
const fib1 = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
```

![fib1_tree](/assets/fib.png)
![fib1_execution_time](/assets/fib1_execution.png)

2 - Implementation 2

```typescript
const fib = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
```

![fib2](/assets/fib2.png)
![fib2_exe](/assets/fib2_execution.png)
