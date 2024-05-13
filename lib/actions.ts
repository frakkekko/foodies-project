"use server";

import { redirect } from "next/navigation";

import { deleteMeal, saveMeal } from "./meals";
import { FormState, MealFormData } from "@/types/types";
import { isValidShareMealInputForm } from "@/utils/utils";

export async function shareMeal(prevState: FormState, formData: FormData): Promise<FormState> {
  const meal: MealFormData = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (!isValidShareMealInputForm(meal)) {
    return {
      message: 'Invalid Input',
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}

export async function deleteMealById(id: string, mealImagePath: string) {
  await deleteMeal(id, mealImagePath);
  redirect("/meals");
}
