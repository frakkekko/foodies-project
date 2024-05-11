"use server";

import { redirect } from "next/navigation";

import { deleteMeal, saveMeal } from "./meals";
import { MealFormData } from "@/types/types";

export async function shareMeal(formData: FormData) {
  const meal: MealFormData = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  await saveMeal(meal);
  redirect("/meals");
}

export async function deleteMealById(id: string, mealImagePath: string) {
  deleteMeal(id, mealImagePath);
}
