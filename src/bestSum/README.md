Write a function `bestSum(target, numbers)` that takes in a targetSum and an array of numbers as arguments

The function should rreturn an array containing the sorterst combination of numbers that add up to exactly the targetSum

If there a tie for the shortest combination, you may reuturn any one of the shortest.

_Examples_
`bestSum(8,[2,3,5]) ->[?]`

```mermaid
graph TD

ROOT[8]-- -2 -->N1[6]
ROOT -- -3 -->N2[5]
ROOT -- -5 -->N3[3]
N1 -- -2 --> N4[4]
N1 -- -3 --> N5[3]
N1 -- -5 --> N6[1]
```
