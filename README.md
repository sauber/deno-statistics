# Statistics

Collection of high-performance functions to transform or summarize array of number.

## Examples

```typescript
import { avg, correlation, dot, mse, pow, regression, shift, squared, std, sum } from "@sauber/statistics";

// Average of numbers. Result is 2
const average: number = avg([1, 2, 3]);

// Sum of numbers. Result is 6
const total: number = sum([1, 2, 3]);

// Shift all number by same amount. Result is [2, 3, 4]
const added: number = shift([1, 2, 3], 1);

// Square list of numbers. Result is [1, 4, 9]
const squares: number[] = squared([1, 2, 3]);

// Raise to the power of same number. Result is [1, 8, 27]
const raised: number[] = pow([1, 2, 3], 3);

// Multiply pairs of numbers: Resul is [1, 4, 9]
const pairs: number[] = dot([1, 2, 3], [1, 2, 3]);

// Standard deviation. Result is 1
const stddev: number = std([1, 2, 3]);

// Linear regression. Result is { intercept: 1, gradiant: 1 }
const reg = regression([1, 2, 3]);

// Pearson Correlation Coefficient. Result is 0.5
const coef: number = correlation([1, 2, 3], [1, 3, 2]);

// Box-Muller Normal Distribution. Result is between 0 and 1.
const random: number = randn();

// Downsample signal. Result is [1.5, 3, 5, 3, 1.5]
const output: number[] = downsample([1, 2, 3, 4, 7, 4, 3, 2, 1], 5);

// Mean Squared Error. Result is 9
const error: number = mse([1, 2, 3], [4, 5, 6]);
```
