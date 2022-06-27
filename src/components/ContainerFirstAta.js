import * as React from "react";
import CardAtaFixo from "./CardAtaFixo";
import styled from "styled-components";

const ContainerAtaFixa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ContainerFirstAta(props) {
  let texto = props.texto
  let spantexto = props.spantexto

  return (
    <>
      <ContainerAtaFixa>
        <CardAtaFixo texto={texto} spantexto={spantexto}></CardAtaFixo>
      </ContainerAtaFixa>
    </>
  );
}
