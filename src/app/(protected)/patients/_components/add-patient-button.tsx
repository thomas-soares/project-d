import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { UpsertPatientForm } from "./upsert-patient-form";

export function AddPatientButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Adicionar Paciente
      </Button>

      <UpsertPatientForm open={open} onOpenChange={setOpen} />
    </>
  );
}
