import { MealDataBase, MealDetails } from "@/types/types";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
import { FunctionComponent } from "react";

type Props = { meals: MealDataBase[] };

const MealsGrid: FunctionComponent<Props> = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
