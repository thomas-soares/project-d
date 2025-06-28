import { Doctor } from "@/types/doctor";

export const getAvailability = (doctor: Doctor) => {
  const availability = doctor.availability;
  return availability.map((day) => {
    return {
      day: day.day,
      from: day.from,
      to: day.to,
    };
  });
};
