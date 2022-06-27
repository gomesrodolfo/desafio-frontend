import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const NovaAtaButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 13px 4px;
  gap: 10px;
  width: 118px;
  height: 33px;
  background: #4fc3f7;
  border-radius: 5px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border: none;
  cursor: pointer;
`;

export default function ContainedButtons() {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Link to="/criaNovaAta" style={{textDecoration:"none"}}>
        <NovaAtaButton
          type="button"
          onClick={() => {
            console.log("criou nova ata"); //teste
          }}
        >
          + NOVA ATA
        </NovaAtaButton>
      </Link>
    </Box>
  );
}
