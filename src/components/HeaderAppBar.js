import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Logo, ContainerAppNavBar } from "./styles";
const imgLogo = require("../assets/logo1.png");

export default function HeaderAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <ContainerAppNavBar>
          <Logo>
            <img
              src={imgLogo}
              style={{
                width: "226.55px",
                height: "40px",
              }}
            ></img>
          </Logo>
        </ContainerAppNavBar>
      </Toolbar>
    </AppBar>
  );
}
