import React from "react";
import { Button } from "../Orchard";
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
          label="Pay"
          className={s.buttonText}
          onClick={() => onPayModalOpen(billData.id)}
        />
      </td>
    </tr>
  );
};
