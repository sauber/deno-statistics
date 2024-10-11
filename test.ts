import { assertAlmostEquals, assertEquals } from "@std/assert";
import { avg, pow, regression, shift, squared, std, sum } from "./mod.ts";

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

Deno.test("standard deviation", () => {
  assertAlmostEquals(std([1, 2, 3]), 0.816496580927726);
  assertAlmostEquals(std([1, 2, 3, 4, 5]), 1.4142135623730951);
});

Deno.test("linear regression", () => {
  assertEquals(regression([1, 2, 3]), { intercept: 1, gradiant: 1 });
});
