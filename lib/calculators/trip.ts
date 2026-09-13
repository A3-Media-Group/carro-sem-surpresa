export interface TripInput {
  distance: number;
  consumption: number;
  price: number;
  roundTrip: boolean;
  tolls: number;
  parking: number;
  other: number;
  people: number;
}
/** Distance is one-way; other costs cover the entire trip, including return. */
export function computeTrip(input: TripInput) {
  const numbers = [
    input.distance,
    input.consumption,
    input.price,
    input.tolls,
    input.parking,
    input.other,
    input.people,
  ];
  if (
    !numbers.every(Number.isFinite) ||
    input.distance <= 0 ||
    input.consumption <= 0 ||
    input.price <= 0 ||
    input.tolls < 0 ||
    input.parking < 0 ||
    input.other < 0 ||
    !Number.isInteger(input.people) ||
    input.people < 1
  )
    return null;
  const distance = input.distance * (input.roundTrip ? 2 : 1);
  const liters = distance / input.consumption;
  const fuel = liters * input.price;
  const total = fuel + input.tolls + input.parking + input.other;
  if (![distance, liters, fuel, total].every(Number.isFinite)) return null;
  return {
    distance,
    liters,
    fuel,
    total,
    perPerson: total / input.people,
    perKm: total / distance,
  };
}
