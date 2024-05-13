import { StaticImageData } from "next/image";

export type MealDataBase = {
  id: string;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export type MealDataBasePostRequest = {
  slug: string;
  title: string;
  image: File | string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export type MealDetails = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

export type MealFormData = {
  title: string;
  summary: string;
  instructions: string;
  image: string;
  creator: string;
  creator_email: string;
};

export type Meal = {};

export type ImageData = { image: StaticImageData; alt: string };

export type FormState = {
  message: null | 'Invalid Input'
}