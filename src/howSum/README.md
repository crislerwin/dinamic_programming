Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments

The function should return and array containing any combinations of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null

`howSum(7,[5,3,4,7]) -> [4,3]`

```mermaid
    graph TD
    N[7]-- -5 -->E0[2]
    N -- -3-->E1[4]
    N -- -4-->E2[3]
    N -- -7-->E3[0]
    E1 -- -3-->E4[1]
    E1 -- -4-->E5[0]
    E2 -- -3-->E6[0]
```
