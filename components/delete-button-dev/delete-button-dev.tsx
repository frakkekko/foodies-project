"use client";

import { deleteMealById } from "@/lib/actions";
import React, { FunctionComponent, MouseEvent } from "react";

import classes from "./delete-button-dev.module.css";

type Props = { mealId: string; mealImagePath: string };

const DeleteButtonDev: FunctionComponent<Props> = ({
  mealId,
  mealImagePath,
}) => {
  function handleDeleteClick(event: MouseEvent<HTMLButtonElement>) {
    deleteMealById(mealId, mealImagePath);
  }

  return (
    <div className={classes["wrapper"]}>
      <button className={classes["button"]} onClick={handleDeleteClick}>
        DELETE
      </button>
      <p className={classes["dev-label"]}>DEV_MODE_ACTIVE</p>
    </div>
  );
};

export default DeleteButtonDev;
