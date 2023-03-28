import React from "react";
import { TheodoLogo } from "../TheodoLogo/TheodoLogo";
import s from "./Footer.module.css";
import { Typography } from "@codat/orchard-ui";

export const Footer = () => {
  return (
    <div className={s.footerContainer}>
      See more in our <a href="https://docs.codat.io/" target="_blank">docs</a>
    </div>
  );
};
