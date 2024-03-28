import React from "react";

import s from "./CompanyHeader.module.css";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CompanyHeader = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <BankIcon fillColor="#482DEB" className={s.icon} />
        <Typography
          style={{
            color: "#482DEB",
            marginBottom: "0px",
          }}
          variant="h3"
        >
          Copay
        </Typography>
      </div>
      <Button label="Logout" onClick={() => handleLogout()} />
    </div>
  );
};
