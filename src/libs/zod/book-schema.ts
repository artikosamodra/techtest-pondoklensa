import z from "zod";
import { LOCATION_NAMES } from "../data/data";

export const BookSchema = z.object({
  datePickup: z.coerce.date().optional(),
  dateReturn: z.coerce.date().optional(),
  wib: z.string,

  dayCount: z.coerce
    .number()
    .int("Harus bilangan bulat")
    .min(1, "Minimal 1 hari.")
    .max(15, "Maksimal 15 hari"),
  location: z.enum(LOCATION_NAMES).optional(),
});

export type CreateBookType = z.infer<typeof BookSchema>;
