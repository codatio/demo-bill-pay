import React from "react";
import Button from '@mui/material/Button';
import s from "./PayButton.module.css";
import { BillModalContext } from "../../../../../ModalStore";
import { useContext } from "react";
export const variableText = false;

export const PayButton = ({ billData }) => {
  const { onPayModalOpen } = useContext(BillModalContext);
  return (
    <tr>
      <td>
        <Button
          variant="outline"
          className={s.buttonText}
          onClick={() => onPayModalOpen(billData.id)}
        >
          Pay
        </Button>
      </td>
    </tr>
  );
};
