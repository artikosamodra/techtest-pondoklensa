export const LOCATION_NAMES = [
  "Jakarta",
  "Surabaya",
  "Bali",
  "Bandung",
] as const;

export const LOCATION_OPTIONS = LOCATION_NAMES.map((location) => ({
  value: location,
  label: location,
}));
