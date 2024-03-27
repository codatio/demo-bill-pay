import React from "react";
import s from "./Footer.module.css";
import { Typography } from "@codat/orchard-ui";

export const Footer = () => {
  return (
    <div className={s.footerContainer}>
      See more in our <a className={s.footerLink} href="https://docs.codat.io/" rel="noreferrer" target="_blank">docs</a>
    </div>
  );
};
