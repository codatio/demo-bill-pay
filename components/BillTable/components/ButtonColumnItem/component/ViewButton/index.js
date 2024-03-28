import React, { useContext } from "react";
import s from "./ViewButton.module.css";

import { BillModalContext } from "../../../../../ModalStore";

import Button from '@mui/material/Button';

export const ViewButton = ({ args, billData }) => {
  const { onViewModalOpen } = useContext(BillModalContext);
  return (
    <tr>
      <td>
        <Button
          onClick={() => onViewModalOpen(billData.id)}
          className={s.linkText}
        >
          View
        </Button>
      </td>
    </tr>
  );
};
