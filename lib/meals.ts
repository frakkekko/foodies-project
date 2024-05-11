import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import {
  MealDataBase,
  MealDataBasePostRequest,
  MealDetails,
  MealFormData,
} from "@/types/types";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('Loading meals failed');
  return db.prepare("SELECT * FROM meals").all() as MealDataBase[];
}

export function getMeal(slug: string) {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as MealDataBase;
}

export async function saveMeal(mealFormData: MealFormData) {
  const meal: MealDataBasePostRequest = {
    ...mealFormData,
    slug: slugify(mealFormData.title, { lower: true }),
    instructions: xss(mealFormData.instructions),
  };

  const extension = (meal.image as File).name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await (meal.image as File).arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}

export async function deleteMeal(id: string, mealImagePath: string) {
  const suffixPath = "public";
  fs.unlinkSync(suffixPath + mealImagePath);

  return db.prepare(`DELETE FROM meals WHERE id = ?`).run(id);
}
