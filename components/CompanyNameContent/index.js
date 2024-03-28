"use client"

import { useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";

import s from "./CompanyNameContent.module.css";

import { CodatLink } from "../CodatLink";

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <Typography variant="h4">{ "Enter your company's name" }</Typography>

        <div className={s.inputContainer}>
          <div className={s.textInputContainer}>
            <TextField
              id="company-name"
              variant="outlined"
              fullWidth
              placeholder="e.g. Pete's Pies"
              value={companyName}
              size="small"
              onChange={(event) => setCompanyName(event.target.value)}
            />
          </div>

          <div>
            <Button
              variant="outlined"
              className={s.button}
              onClick={handleCreateCompany}
            >
              Next
            </Button>
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
