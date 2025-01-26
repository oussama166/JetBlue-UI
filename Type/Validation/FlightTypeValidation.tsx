import { z } from "zod";

// Define schemas for each passenger type
const AdultSchema = z.object({
  type: z.literal("adult"),
  name: z.string().min(1, "Name is required"),
  age: z.number().int().min(12, "Adult must be at least 12 years old"),
});

const ChildSchema = z.object({
  type: z.literal("child"),
  name: z.string().min(1, "Name is required"),
  age: z
    .number()
    .int()
    .min(2)
    .max(11, "Child must be between 2 and 11 years old"),
});

const InfantSchema = z.object({
  type: z.literal("infant"),
  name: z.string().min(1, "Name is required"),
  age: z.number().int().min(0).max(1, "Infant must be under 2 years old"),
});

// Define the reservation schema
const ReservationSchema = z
  .object({
    adult: AdultSchema,
    child: ChildSchema.optional(), // Child is optional
    infants: z
      .array(InfantSchema)
      .max(2, "Maximum of 2 infants allowed")
      .refine(
        (infants) =>
          infants.length <= 1 ||
          infants.some((infant) => infant.type === "infant-with-seat"),
        "If there are 2 infants, one must have a seat"
      ),
  })
  .refine(
    (data) => data.infants.length <= 1 || data.adult, // Ensure only one infant per adult unless a second infant has a seat
    "Only one infant per adult is allowed unless the second infant has a seat"
  );

// Example data
const reservationData = {
  adult: {
    type: "adult",
    name: "John Doe",
    age: 30,
  },
  child: {
    type: "child",
    name: "Jane Doe",
    age: 5,
  },
  infants: [
    {
      type: "infant",
      name: "Baby Doe",
      age: 1,
    },
    {
      type: "infant",
      name: "Baby Smith",
      age: 1,
    },
  ],
};

// Validate the reservation data
try {
  const validatedReservation = ReservationSchema.parse(reservationData);
  console.log("Reservation is valid:", validatedReservation);
} catch (error) {
  console.error("Validation failed:", error.errors);
}
