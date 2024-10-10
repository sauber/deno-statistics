# deno-statistics

Collection of high-performance functions to transform or summarize array of number.

## Examples

```typescript
import { avg, pow, regression, shift, squared, std, sum } from "@sauber/statistics";

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

// Standard deviation. Result is 1
const stddev: number = std([1, 2, 3]);

// Linear regression. Result is { intercept: 1, gradiant: 1 }
const reg = regression([1, 2, 3]);
```
