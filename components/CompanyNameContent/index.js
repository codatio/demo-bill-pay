import { useState } from "react";
import { Button, TextInput, Typography } from "@codat/orchard-ui";
import "../../node_modules/@codat/orchard-ui/dist/index.css";
import s from "./CompanyNameContent.module.css";
import axios from "axios";
import { CodatLink } from "../CodatLink";

export const CompanyNameContent = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false)

  const handleCreateCompany = () => {
    if (companyName !== "") {
      const results = axios.post("/api/company", {
        companyName: companyName,
      });

      results.then(function (result) {
        sessionStorage.setItem("companyId", result.data.id);
        setCompanyId(result.data.id)
        //setModalOpen(true)
        //window.location.href = result.data.redirect;
      });
    } else {
      return null;
    }
  };

  return (
    <div>
      <Typography variant="h2">Enter your company name</Typography>

      <div className={s.inputContainer}>
        <div className={s.textInputContainer}>
          <TextInput
            id="company-name"
            placeholder="e.g. Pete's Pies"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </div>
        <div>
          <Button
            label="Next"
            className={s.button}
            onClick={handleCreateCompany}
          />
        </div>
      </div>

      {modalOpen && (
        <div className={s.modalWrapper}>
          <CodatLink
            companyId={companyId}
            // onConnection={onConnection}
            // onError={onError}
            // onClose={onClose}
            // onFinish={onFinish}
          />
        </div>
      )}
    </div>
  );
};
