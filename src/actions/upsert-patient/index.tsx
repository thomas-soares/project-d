import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db";
import { patients } from "@/db/schema";
import { actionClient } from "@/lib/next-safe-action";

import { upsertPatientSchema } from "./schema";

export const upsertPatient = actionClient.action(
  upsertPatientSchema,
  async (data: z.infer<typeof upsertPatientSchema>) => {
    try {
      if (data.id) {
        await db
          .update(patients)
          .set({
            name: data.name,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            updatedAt: new Date(),
          })
          .where(eq(patients.id, data.id));

        return { success: true };
      }

      await db.insert(patients).values({
        name: data.name,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
      });

      return { success: true };
    } catch (error) {
      console.error("Error upserting patient:", error);
      return { error: "Erro ao salvar paciente" };
    }
  },
);
