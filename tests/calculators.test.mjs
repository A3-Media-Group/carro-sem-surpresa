import test from "node:test";
import assert from "node:assert/strict";
import { computeTrip } from "../lib/calculators/trip.ts";
import { computeFuelComparison } from "../lib/calculators/fuelComparison.ts";
const trip = {
  distance: 300,
  consumption: 12,
  price: 6,
  roundTrip: false,
  tolls: 40,
  parking: 0,
  other: 0,
  people: 2,
};
test("trip matches the published one-way example", () => {
  const r = computeTrip(trip);
  assert.equal(r.liters, 25);
  assert.equal(r.fuel, 150);
  assert.equal(r.total, 190);
  assert.equal(r.perPerson, 95);
});
test("return doubles fuel, not total-trip tolls", () => {
  const r = computeTrip({ ...trip, roundTrip: true });
  assert.equal(r.distance, 600);
  assert.equal(r.total, 340);
  assert.equal(r.perPerson, 170);
});
test("parking and other costs enter once, including solo travel", () => {
  assert.equal(
    computeTrip({ ...trip, parking: 20, other: 30, people: 1 }).perPerson,
    240,
  );
});
test("trip rejects missing, negative, nonfinite and fractional passenger input", () => {
  for (const change of [
    { distance: 0 },
    { consumption: 0 },
    { price: 0 },
    { people: 0 },
    { people: 1.5 },
    { tolls: -1 },
    { parking: -1 },
    { other: -1 },
    { distance: Infinity },
    { price: NaN },
    { distance: Number.MAX_VALUE, roundTrip: true },
  ])
    assert.equal(computeTrip({ ...trip, ...change }), null);
});
const fuel = {
  gasolinaPrice: 6,
  etanolPrice: 4.2,
  gasolinaConsumption: 12,
  etanolConsumption: 9,
  kmPerMonth: 1000,
};
test("fuel uses measured efficiency instead of fixed 70 percent", () => {
  const r = computeFuelComparison(fuel);
  assert.equal(r.cheaper, "etanol");
  assert.equal(r.breakEvenRatio, 0.75);
  assert.ok(Math.abs(r.monthlySavings - 33.33333333) < 0.001);
});
test("equal cost per km is a tie", () => {
  assert.equal(
    computeFuelComparison({ ...fuel, etanolPrice: 4.5 }).cheaper,
    "empate",
  );
});
test("zero monthly distance keeps per-km result with no monthly savings", () => {
  const r = computeFuelComparison({ ...fuel, kmPerMonth: 0 });
  assert.equal(r.monthlySavings, 0);
  assert.equal(r.cheaper, "etanol");
});
test("invalid consumption must never suggest a free fuel", () => {
  for (const change of [
    { gasolinaConsumption: 0 },
    { etanolConsumption: 0 },
    { etanolPrice: -1 },
    { gasolinaPrice: NaN },
    { kmPerMonth: -1 },
  ])
    assert.equal(computeFuelComparison({ ...fuel, ...change }), null);
});
