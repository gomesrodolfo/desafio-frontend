import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styled from "styled-components";

const AtaTitle = styled.h2`
  width: 195px;
  height: 17px;
  left: 14px;
  top: 16px;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #312f2f;
`;

const AtaSubTilte = styled.span`
  width: 192px;
  height: 17px;
  left: 14px;
  top: 47px;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  color: #5c5958;
`;

const AtaFrame = styled.div`
  width: 883px;
  height: 74px;
`;

const DivExternaAta = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function Ata(props) {
  let tituloAta = props.tituloAta;
  let data = props.data;
  let horario = props.horario;
  let sala = props.sala;

  return (
    <>
      <DivExternaAta>
        <AtaFrame>
          <AtaTitle>{tituloAta}</AtaTitle>
          <AtaSubTilte>
            {data} às {horario}, na sala {sala}
          </AtaSubTilte>
        </AtaFrame>
        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
            },
            display: "flex",
          }}
        >
          <Button
            type="submit"
            endIcon={<VisibilityOutlinedIcon />}
            onClick={() => {
              console.log("visualizando ata");
            }}
          ></Button>
          <Button
            fontSize="medium"
            type="submit"
            endIcon={<DeleteOutlineIcon />}
            onClick={() => {
              console.log("removendo ata");
            }}
          ></Button>
        </Box>
      </DivExternaAta>
    </>
  );
}
