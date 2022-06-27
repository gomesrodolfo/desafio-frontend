import * as React from "react";
import DateTime from "./DateTime";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivForm = styled.div`
  display: block;
`;

const SubTitleTipo = styled.div`
  font-family: "Calibri";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7b7b7b;
  display: flex;
  align-items: center;
`;

const DivFormConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 880px;
  bottom: 20px;
  height: 129px;
  left: 33px;
  top: 450px;
`;

const CardMain = styled.div`
  display: flex-start;
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

const TitleForm = styled.h1`
  width: auto;
  height: 24px;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #7b7b7b;
`;

export default function CardListAtas() {
  const [titulo, setTitulo] = React.useState("");
  const [local, setLocal] = React.useState("");
  const [TipoReuniao, setTipoReuniao] = React.useState("");

  const handleChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleChangeLocal = (event) => {
    setLocal(event.target.value);
  };

  const handleChangeTipo = (event) => {
    setTipoReuniao(event.target.value);
    console.log(event.target.value);
  };

  return (
    <CardMain>
      <DivForm>
        <TitleForm>Identificação</TitleForm>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "946px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              position: "absolute",
              left: `calc(50% - 946px/2)`,
              top: "100px",
              background: "#F5F5F5",
              boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            }}
            color="primary"
            id="outlined-name"
            label="Título"
            value={titulo}
            required
            onChange={handleChange}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "946px",
              top: "100px",
              background: "#F5F5F5",
              boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Local*</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={local}
              label="Local"
              required
              onChange={handleChangeLocal}
            >
              <MenuItem value={"Local A"}>Local A</MenuItem>
              <MenuItem value={"Local B"}>Local B</MenuItem>
              <MenuItem value={"Local C"}>Local C</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "946px",
              top: "200px",
              background: "#F5F5F5",
              boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tipo de Reunião*
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={TipoReuniao}
              label="Tipo de Reunião"
              required
              onChange={handleChangeTipo}
            >
              <MenuItem value={"Resumida"}>Resumida</MenuItem>
              <MenuItem value={"Daily Scrum"}>Daily Scrum</MenuItem>
              <MenuItem value={"Sprint Retrospective"}>
                Sprint Retrospective
              </MenuItem>
              <MenuItem
                value={"Acompanhamento de OKRs (Objectives and Key Results)"}
              >
                Acompanhamento de OKRs (Objectives and Key Results)
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "457px",
              height: "40px",
              marginTop: "45px",
              background: "#F5F5F5",
              boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 0)",
              borderRadius: "5px",
              display: "inline-block",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <DateTime />
        </Box>
      </DivForm>

      <DivFormConteudo>
        <TitleForm>Conteúdo da Reunião</TitleForm>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "946px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            },
          }}
        >
          <SubTitleTipo>Conteúdo de {TipoReuniao}</SubTitleTipo>
        </Box>
      </DivFormConteudo>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          gap: "30px",

          position: "absolute",
          width: "271px",
          height: "40px",
          right: "33px",
          bottom: "29px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            onClick={() => {
              console.log("Ata cancelada");
            }}
            variant="contained"
            sx={{
              background: "#C0C1C6",
            }}
          >
            CANCELAR
          </Button>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            onClick={() => {
              console.log("Ata salva");
            }}
            variant="contained"
            sx={{ background: "#44C08A" }}
          >
            SALVAR ATA
          </Button>
        </Link>
      </Box>
    </CardMain>
  );
}
