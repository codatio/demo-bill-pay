import React from "react";

import FaceIcon from '@mui/icons-material/Face';
import Chip from '@mui/material/Chip';

import s from "./Indicator.module.css";

export const Indicator = ({ status = "paid" }) => {
  return (
    <tr className={s.container}>
      {status === "paid" ? (
        <Chip icon={<FaceIcon />} color="#2AA24F" label="Paid" /> //variant="outlined" 
      ) : (
        <Chip icon={<FaceIcon />} color="#3B8EDE" label="Pending" />
      )}
    </tr>
  );
};
