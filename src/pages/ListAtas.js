import React from "react";
import HeaderAppBar from "../components/HeaderAppBar";
import FirstAta from "../components/ContainerFirstAta";
import CardAtas from "../components/CardListAtas"

export default function ListAtas() {
  return (
    <>
      <div className="header">
        <HeaderAppBar></HeaderAppBar>
      </div>
      <div className="body" style={{ minHeight: "1000px" }}>
        <FirstAta
          texto={"Atas de Reunião"}
          spantexto={"Estas são as atas das últimas reuniões."}
        />
        <CardAtas />
      </div>
    </>
  );
}
