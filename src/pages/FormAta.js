import React from "react";
import HeaderAppBar from "../components/HeaderAppBar";
import FormCardAtaFixo from "../components/FormFirstAta";

export default function ListAtas() {
  return (
    <>
      <div className="header">
        <HeaderAppBar></HeaderAppBar>
      </div>
      <div className="body" style={{minHeight: "1000px"}}>
        <FormCardAtaFixo
          texto={"Atas de Reunião"}
          spantexto={
            "Os campos obrigatórios estão marcados com um asterisco (*)"
          }
        />
      </div>
    </>
  );
}
