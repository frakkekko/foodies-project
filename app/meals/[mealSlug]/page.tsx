import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import { Metadata, NextPage, ResolvingMetadata } from "next";
import { ENVIRONMENT } from "@/config/config";
import DeleteButtonDev from "@/components/delete-button-dev/delete-button-dev";

type Props = {
  params: { [key: string]: string };
};

export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const meal = getMeal(params["mealSlug"]);

  if(!meal) {
    return {}
  }

  return {
    title: meal.title,
    description: meal.summary
  }
}

const MealDetailsPage: NextPage<Props> = ({ params }) => {
  const meal = getMeal(params["mealSlug"]);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
        {ENVIRONMENT === "DEV" && (
          <DeleteButtonDev mealId={meal.id} mealImagePath={meal.image} />
        )}
      </main>
    </>
  );
};

export default MealDetailsPage;
