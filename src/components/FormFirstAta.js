import * as React from "react";
import Form from "./Form"
import styled from "styled-components";
import CardAtaFixoForm from "./CardAtaFixoForm";

const ContainerAtaFixa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ContainerFirstAta(props) {
  let texto = props.texto;
  let spantexto = props.spantexto;

  return (
    <>
      <ContainerAtaFixa>
        <CardAtaFixoForm texto={texto} spantexto={spantexto}></CardAtaFixoForm>
      </ContainerAtaFixa>
      <Form></Form>
    </>
  );
}
