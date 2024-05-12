"use client";

import { FunctionComponent } from "react";
import { useFormStatus } from "react-dom";

const MealFormSubmit: FunctionComponent = () => {
  let { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Save Meal"}
    </button>
  );
};

export default MealFormSubmit;
