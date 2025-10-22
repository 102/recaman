![Recamán Sequence Visualisation](https://github.com/102/recaman/assets/5839225/5874ce45-8645-4f44-a7a1-585bbbe0ee4a)

# Recamán's sequence

A function for calculating numbers of [Recamán's sequence](https://oeis.org/A005132)

## Definition

```math
a_n = \begin{cases} \\
0 && \text{if } n = 0 \\
a_{n - 1} -n && \text{if } a_{n - 1} -n > 0 \text{ and is not already in the sequence} \\
a_{n - 1} + n && \text{otherwise}
\end{cases}
```
