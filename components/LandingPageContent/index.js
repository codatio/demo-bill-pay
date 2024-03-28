import React from "react";
import s from "./LandingPageContent.module.css";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

import { circleStyling } from "./Styles.styling";

export const LandingPageContent = () => {
  return (
    <div className={s.container}>
      <Box sx={circleStyling}>
        <AccountBalanceIcon  sx={{ color: "#482DEB" }} className={s.icon} />
      </Box>

      <Typography variant="h4" className={s.title}>
        Automate bill payments
      </Typography>

      <Typography variant="p" style={{ margin: 0, marginTop: "1em" }} className={s.subtitle}>
        Pull unpaid bills from accounting software and mark them as paid to automate the accounts payable process.
      </Typography>

      <Typography variant="p" style={{ margin: 0 }} className={s.subtitle}>
        Connect your accounting platform to make it quick and easy to pay your suppliers.
      </Typography>

      <Button variant="outlined" href="/company-name">Get started</Button>
      
      <Typography
        style={{
          margin: 0,
          fontSize: "10px",
        }}
        variant="p"
        className={s.smallText}
      >
        Secured by <strong> Codat </strong>
      </Typography>
    </div>
  );
};
