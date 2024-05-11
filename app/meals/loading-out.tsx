import React from "react";
import { NextPage } from "next";
import classes from "./loading.module.css";

const MealsLoadingPage: NextPage = () => {
  return <p className={classes.loading}>Fetching meals...</p>;
};

export default MealsLoadingPage;
