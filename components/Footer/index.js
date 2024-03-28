import React from "react";
import s from "./Footer.module.css";
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <div className={s.footerContainer}>
      See more in our <a className={s.footerLink} href="https://docs.codat.io/usecases/summary/automating-payables" rel="noreferrer" target="_blank">docs</a>
    </div>
  );
};
