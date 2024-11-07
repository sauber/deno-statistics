/** Statistics of list of numbers */

type Numbers = Array<number>;

/** Add all numbers together */
export const sum = (values: Numbers): number =>
  values.reduce((total: number, a: number) => total + a, 0);

/** Average of numbers */
export const avg = (values: Numbers): number => sum(values) / values.length;

/** Add a constant value to each number */
export const shift = (values: Numbers, offset: number): Numbers =>
  values.map((x) => x + offset);

/** Raise each value to power */
export const pow = (values: Numbers, exponent: number): Numbers =>
  values.map((x) => Math.pow(x, exponent));

/** number * number */
export const squared = (values: Numbers): Numbers => values.map((x) => x * x);

/** Multiply pairs of numbers */
export const dot = (a: Numbers, b: Numbers): Numbers =>
  a.map((_, i) => a[i] * b[i]);

/** Standard Deviation */
export function std(values: Numbers): number {
  const mean: number = avg(values);
  const variances: Numbers = shift(values, -mean);
  const sq: Numbers = squared(variances);
  const total: number = sum(sq);
  const result: number = Math.sqrt(total / values.length);
  return result;
}

/** Linear regression coeeficents */
export function regression(values: Numbers): {
  intercept: number;
  gradiant: number;
} {
  const sum = [0, 0, 0, 0];
  values.forEach(function (value, index) {
    sum[0] += index;
    sum[1] += value;
    sum[2] += index * index;
    sum[3] += index * value;
  });
  const len = values.length;

  const run: number = len * sum[2] - sum[0] * sum[0];
  const rise: number = len * sum[3] - sum[0] * sum[1];
  const gradiant: number = run === 0 ? 0 : rise / run;
  const intercept: number = sum[1] / len - (gradiant * sum[0]) / len;

  return { intercept: intercept, gradiant: gradiant };
}

/** Calculate Pearson Correlation Coefficient of two datasets
 * @param a List of numbers in first set
 * @param b List of numbers in second set
 * @returns The numerical coefficient in range -1.0 to 1.0
 */
export function correlation(a: Numbers, b: Numbers): number {
  // Confirm count if elements
  if (a.length < 2 || b.length < 2)
    throw new Error(`Datasets must have at least 2 elements each.`);

  // Confirm same length
  if (a.length != b.length)
    throw new Error(
      `Datasets must have same length, but have ${a.length} and ${b.length} elements.`
    );

  // Calculate coefficient
  const n: number = a.length;
  const x: number = sum(a);
  const y: number = sum(b);
  const xx: number = sum(dot(a, a));
  const yy: number = sum(dot(b, b));
  const xy: number = sum(dot(a, b));
  const coefficient: number =
    (n * xy - x * y) / Math.sqrt((n * xx - x * x) * (n * yy - y * y));
  return coefficient;
}

/** Box-Muller Normal Distribution Between 0 and 1 */
export function randn(): number {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn(); // resample between 0 and 1
  return num;
}

/** Create signal with fewer data points */
export function downsample(input: number[], length: number): number[] {
  // No downsample if too little data
  if (length >= input.length) return input;

  // Divide signal into chunks and average each
  const output: number[] = [];
  const chunkSize = input.length / length;
  for (let i = 1; i <= length; ++i)
    output.push(
      avg(
        input.slice(Math.floor((i - 1) * chunkSize), Math.ceil(i * chunkSize))
      )
    );

  return output;
}
