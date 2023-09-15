# dinamic_programming

##

### Fibonacci

### Calculate the 40th number of the fibonacci sequence

- Implementation 1

```typescript
const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
```

![fib1_tree](/assets/fib.png)

- Implementation 2

```typescript
const fib = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
```

- Implementation 3

![fib2](/assets/fib2.png)

```typescript
const fib = (n: number): number => {
  if (n <= 2) return 1;
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};
```
