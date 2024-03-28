import { useState } from "react";
import { Button, TextInput, Typography } from "../Orchard";
import s from "./CompanyNameContent.module.css";
import axios from "axios";
import { CodatLink } from "../CodatLink";
import { useRouter } from 'next/router'

export const CompanyNameContent = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [modalOpen, setModalOpen] = useState(false)

  const router = useRouter()

  const handleCreateCompany = () => {
    if (companyName !== "") {
      const results = axios.post("/api/company", {
        companyName: companyName,
      });

      results.then(function (result) {
        sessionStorage.setItem("companyId", result.data.id);
        setCompanyId(result.data.id)
        setModalOpen(true)
      });
    } else {
      return null;
    }
  };

  const onFinish = () => {
    setModalOpen(false)
    router.push('/connection-successful')
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
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
      </div>

      {modalOpen && (
        <div className={s.modalWrapper}>
          <CodatLink
            companyId={companyId}
            onError={() => setModalOpen(false)}
            onClose={() => setModalOpen(false)}
            onFinish={onFinish}
          />
        </div>
      )}
    </div>
  );
};
