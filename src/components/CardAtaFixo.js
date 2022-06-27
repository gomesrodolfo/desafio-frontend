import * as React from "react";
import styled from "styled-components";
import SpanAta from "./Span";
import CriaAtaButton from "./CriaAtaButton";

const TituloAtaH1 = styled.h1`
  width: 165px;
  height: 29px;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #1e2251;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const CardAtaTitle = styled.div`
  width: 400px;
`;

const CardAtaButton = styled.div`
  margin-left: auto;
  margin-top:20px;
`;

const Card = styled.div`
  width: 881px;
  display: flex;
  flex-direction: row;
`;

export default function CardAtaFixo(props) {
  let texto = props.texto;
  let spantexto = props.spantexto;

  return (
    <>
      <Card>
        <CardAtaTitle>
          <TituloAtaH1>{texto}</TituloAtaH1>
          <SpanAta spantexto={spantexto}></SpanAta>
        </CardAtaTitle>
        <CardAtaButton>
          <CriaAtaButton>
            
          </CriaAtaButton>
        </CardAtaButton>
      </Card>
    </>
  );
}
