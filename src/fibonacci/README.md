### Fibonacci

### Calculate the 40th number of the fibonacci sequence

- Implementation 1

```typescript
const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
```

**Code Explanation:**

- The function takes an input `n`, which represents the position of the Fibonacci number to be calculated.
- It uses a recursive approach to calculate the Fibonacci number.
- The base case is when `n` is less than or equal to 2, in which case it returns 1 (since the first two Fibonacci numbers are both 1).
- For any other value of `n`, it recursively calls itself twice with `n - 1` and `n - 2`, and then adds the results of these two recursive calls.

**Time Complexity:**
The time complexity of this recursive Fibonacci function is exponential, specifically O(2^n). This is because, for each value of `n`, the function makes two recursive calls, leading to an exponential growth in the number of function calls. As a result, the time it takes to calculate larger Fibonacci numbers becomes very slow and impractical with this approach.

**Pros:**

1. **Simplicity**: The code is relatively simple and easy to understand, making it a good choice for educational purposes or small-scale Fibonacci calculations.
2. **Conceptual Clarity**: It directly mirrors the mathematical definition of the Fibonacci sequence, which can aid in understanding the concept.

**Cons:**

1. **Exponential Time Complexity**: The major drawback of this approach is its high time complexity. It becomes very slow for larger values of `n` due to the large number of recursive calls.
2. **Inefficiency**: It recalculates the same Fibonacci numbers multiple times, leading to redundant calculations. This inefficiency can be mitigated using memoization (caching previously computed results) or an iterative approach.
3. **Stack Overflow**: For large values of `n`, the recursive function may lead to a stack overflow error due to the deep call stack.

To improve the performance and efficiency of Fibonacci number calculation, especially for larger values of `n`, it's recommended to use iterative methods (like the bottom-up dynamic programming approach) or memoization techniques to avoid redundant calculations and reduce the time complexity to linear (O(n)). These methods offer better scalability and are suitable for practical applications.

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

**Code Explanation:**

- The function takes two arguments: `n` (the position of the Fibonacci number to calculate) and `memo` (a record or dictionary used for memoization to store previously calculated Fibonacci numbers).

**Memoization** is a technique where you store the results of expensive function calls and return the cached result when the same inputs occur again. This helps avoid redundant calculations and significantly improves the efficiency of recursive algorithms.

Here's how the code works:

1. Check if `n` is already present in the `memo` dictionary. If it is, return the cached value directly. This step prevents recalculating Fibonacci numbers that have already been computed, avoiding redundant work.

2. Check if `n` is less than or equal to 2. If it is, return 1, as the first two Fibonacci numbers are both 1. This serves as the base case for the recursion.

3. If `n` is not in the `memo` dictionary and is greater than 2, then calculate `fib(n - 1, memo)` and `fib(n - 2, memo)` recursively. These calls are made to calculate the (n-1)th and (n-2)th Fibonacci numbers, respectively.

4. Add the results of the two recursive calls and store the sum in the `memo` dictionary with the key `n`.

5. Finally, return the calculated Fibonacci number, which is now stored in `memo[n]`.

**Time Complexity:**
The time complexity of this memoized recursive Fibonacci function is linear, specifically O(n). This is because it calculates each Fibonacci number once and caches the result for future use, avoiding redundant calculations.

**Pros:**

1. **Efficiency**: Memoization significantly improves the efficiency of Fibonacci number calculation by avoiding redundant computations, making it suitable for large values of `n`.
2. **Clarity**: The code maintains the simplicity and clarity of the original recursive solution while improving performance.

**Cons:**

1. **Space Complexity**: The memoization approach uses additional space to store the results in the `memo` dictionary. For very large values of `n`, this can lead to increased memory usage.
2. **Function Signature**: The function's signature might be a bit more complex due to the addition of the `memo` parameter, which can make it less straightforward if not familiar with the concept of memoization.

In summary, the provided code implements a recursive Fibonacci calculation with memoization to improve efficiency. It offers a balance between performance and simplicity, making it a practical choice for calculating Fibonacci numbers, especially for larger values of `n`.

![fib2](/assets/fib2.png)

- Implementation 3

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

**Code Explanation:**

- The function takes one argument, `n`, which represents the position of the Fibonacci number to calculate.

Here's how the code works:

1. Check if `n` is less than or equal to 2. If it is, return 1, as the first two Fibonacci numbers are both 1. This serves as the base case for the calculation.

2. If `n` is greater than 2, initialize two variables `a` and `b` to 1. These variables will be used to keep track of the previous two Fibonacci numbers.

3. Use a `for` loop to iterate from `i = 3` to `n`. This loop calculates Fibonacci numbers iteratively from the 3rd to the nth by adding the values of `a` and `b` and storing the result in `temp`.

4. Update the values of `a` and `b` as follows:

   - Set `a` to the current value of `b`.
   - Set `b` to the value of `temp`.

5. After the loop finishes, `b` will hold the value of the nth Fibonacci number, so return `b`.

**Time Complexity:**
The time complexity of this iterative Fibonacci function is linear, specifically O(n). It calculates each Fibonacci number once, and the loop runs exactly `n-2` times, which is a constant factor compared to the input `n`.

**Pros:**

1. **Efficiency**: This approach is highly efficient and avoids the exponential time complexity of the naive recursive approach.
2. **Predictable Performance**: The performance is consistent and does not suffer from stack overflow issues, making it suitable for large values of `n`.

**Cons:**

1. **Loss of Clarity**: While it's efficient, it may be less intuitive for those not familiar with iterative algorithms. The connection to the mathematical definition of the Fibonacci sequence is less evident compared to the recursive approaches.
2. **No Reuse of Previous Results**: Unlike the memoization approach, which caches results for future use, this approach does not reuse previously calculated Fibonacci numbers, potentially resulting in slightly higher computational overhead for very large `n`.

In summary, the provided code implements an efficient iterative approach to calculate Fibonacci numbers. It is suitable for practical applications and is the preferred method for large values of `n` due to its linear time complexity.
