import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import {
  avg,
  correlation,
  dot,
  pow,
  randn,
  regression,
  shift,
  squared,
  std,
  sum,
} from "./mod.ts";

Deno.test("sum", () => {
  assertEquals(sum([1, 2, 3]), 6);
});

Deno.test("average", () => {
  assertEquals(avg([1, 2, 3]), 2);
});

Deno.test("shift", () => {
  assertEquals(shift([1, 2, 3], 1), [2, 3, 4]);
});

Deno.test("squared", () => {
  assertEquals(squared([1, 2, 3]), [1, 4, 9]);
});

Deno.test("power", () => {
  assertEquals(pow([1, 2, 3], 3), [1, 8, 27]);
});

Deno.test("dot", () => {
  assertEquals(dot([1, 2, 3], [1, 2, 3]), [1, 4, 9]);
});

Deno.test("population standard deviation", () => {
  assertAlmostEquals(std([1, 2, 3]), 0.816496580927726);
  assertAlmostEquals(std([1, 2, 3, 4, 5]), 1.4142135623730951);
});

Deno.test("linear regression", () => {
  assertEquals(regression([1, 2, 3]), { intercept: 1, gradiant: 1 });
});

Deno.test("Correlation: Validation of minimum input", () => {
  assertThrows(() => correlation([0], []));
  assertThrows(() => correlation([], []));
  assertThrows(() => correlation([0], [0]));
  assertThrows(() => correlation([0, 1], [0]));
  assertThrows(() => correlation([0], [0, 1]));
});

Deno.test("Correlation: Validation of same input length", () => {
  assertThrows(() => correlation([0, 1, 2], [0, 1]));
});

Deno.test("Correlation Cases", () => {
  const cases: Array<[Array<number>, Array<number>, number]> = [
    [[1, 2, 3], [1, 2, 3], 1],
    [[1, 2, 3], [3, 2, 1], -1],
    [[1, 2, 3], [1, 3, 2], 0.5],
    [[1, 2, 3], [3, 1, 2], -0.5],
  ];
  for (const t of cases) {
    assertEquals(correlation(t[0], t[1]), t[2]);
  }
});

Deno.test("Normal Distribution Random", () => {
  const n: number[] = [];
  for (let i = 0; i < 1000; i++) n.push(randn());
  const a = avg(n);
  const d = std(n);
  assertAlmostEquals(a, 0.5, 0.1);
  assertAlmostEquals(d, 0.1, 0.01);
});
