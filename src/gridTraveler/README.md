# GRID TRAVELER

Say that you are a traveler onb a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In many ways can you travel to the goal on a grid with dimensions m \* n?

![Alt text](../../assets/gridTraveler.png)

Tips:
**1 - Make it work**

- visualize the problem as tree
- implement the tree using recursion

- test it

2 - Make it efficient

- Add a memo object
- Add a base case to return memo values
- store return values into the memo

`gridTraveler(2,3)`

```mermaid
    graph TD;
    A(2,3)-->B(1,3)
    B(1,3)-->D(0,3)
    B(1,3)-->E(1,2)
    E(1,2)-->G(0,2)
    E(1,2)-->H(1,1)
    A(2,3)-->I(2,2)
    I(2,2)-->J(1,2)
    J(1,2)-->K(0,2)
    J(1,1)-->O(1,1)
    I(2,2)-->L(2,1)
    L(2,1)-->M(1,1)
    L(2,1)-->N(2,0)
```
