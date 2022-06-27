import * as React from "react";
import Ata from "./FrameAta";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 32px;
  gap: 35px;
  position: absolute;
  margin-top: 20px;
  width: 946px;
  height: 807px;
  left: calc(50% - 946px / 2);
  background: #f5f5f5;
  box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export default function CardListAtas() {
  return (
    <CardMain>
      <Card sx={{ width: "881px" }}>
        <CardContent>
          <Typography
            sx={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.01em",
              color: "#1E2251",
            }}
            gutterBottom
          >
            Acompanhamento de OKRs (Objectives and Key Results)
          </Typography>
          <CardContent>
            <Ata
              tituloAta={"Titulo da Ata"}
              data={"07/06/2022"}
              horario={"15h30"}
              sala={"2A"}
            ></Ata>
          </CardContent>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.01em",
              color: "#1E2251",
            }}
            gutterBottom
          >
            Daily Scrum
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.01em",
              color: "#1E2251",
            }}
            gutterBottom
          >
            Resumida
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0.01em",
              color: "#1E2251",
            }}
            gutterBottom
          >
            Sprint Retrospective
          </Typography>
        </CardContent>
      </Card>
    </CardMain>
  );
}
