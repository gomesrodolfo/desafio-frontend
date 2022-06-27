import React from "react";
import styled from "styled-components";

const SpanAtas = styled.span`
  width: 313px;
  height: 24px;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #5c5958;
  flex: none;
  order: 1;
  flex-grow: 0;
`;


export default function SpanAta(props) {
  let spantexto = props.spantexto;

  return (
    <>
      <SpanAtas>{spantexto}</SpanAtas>
    </>
  );
}
