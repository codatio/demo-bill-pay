import React from "react";
import s from "./ButtonColumnItem.module.css";
import { PayButton } from "./component/PayButton";
import { ViewButton } from "./component/ViewButton";
import { Indicator } from "../../../Indicator";

export const ButtonColumnItem = ({ billData, billStatus }) => {
  const latestPaidBillId =
    window.sessionStorage.getItem("latestPaidBillId") ?? "";
  const indicatorStatus =
    billData.id === latestPaidBillId &&
    (billStatus !== "Complete" || billData.status !== "Paid")
      ? "pending"
      : "paid";

  return (
    <table className={s.table}>
      <tbody className={s.buttonsLayout}>
        {billData.status !== "Paid" &&
        billData.amountDue !== 0 &&
        billData.id !== latestPaidBillId ? (
          <>
            <ViewButton billData={billData} />
            <PayButton billData={billData} />
          </>
        ) : (
          <Indicator status={indicatorStatus} />
        )}
      </tbody>
    </table>
  );
};
