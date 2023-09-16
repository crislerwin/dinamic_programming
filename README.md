# [Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=2278s&ab_channel=freeCodeCamp.org) [🔥 Free Code Camp](https://www.freecodecamp.org/)

## Motivation

I created this repository to follow the course on YouTube and play with Bun

## Tools

- [Bun](https://bun.sh/)
- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Benny for benchmarks](https://github.com/caderek/benny)
- [template-literal-table for test-tables](https://github.com/rspieker/template-literal-table)

## How to run

First, you need to have Node or Bun installed

### Install Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

### Install packages

```bash
bun install
```

### Run tests

```bash
bun test
```

### [Fibonacci](./src/fibonacci/README.md)

Fibonacci is a sequence of numbers that starts with 0 and 1, and each subsequent number is the sum of the two previous numbers. So, it goes like this:

0, 1, 1, 2, 3, 5, 8, 13, 21, ...

Here's a simple way to understand it:

1. Start with 0 and 1.
2. Add them together to get the next number: 0 + 1 = 1.
3. Add the last two numbers in the sequence to get the next one: 1 + 1 = 2.
4. Keep doing this to get more numbers in the sequence.

So, each number in the Fibonacci sequence is the result of adding the two numbers that came just before it. It's like a number puzzle that keeps growing! The sequence has many interesting properties and applications in mathematics and nature.
