import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import styled from "styled-components";

const DivTime = styled.div`
  width: 946px;
  height: 40px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export default function DateTime() {
  const [value, setValue] = React.useState(
    new Date("")
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DivTime>
        <Stack spacing={3}>
          <DateTimePicker
            sx={{
              boxSizing: "border-box",
              position: "absolute",
              width: "425px",
              height: "40px",
              left: "0px",
              top: "150px",
              border: "1px solid #C0C1C6",
              borderRadius: "4px",
              background: "#F5F5F5",
              boxShadow: "0px 4px 15px 1px rgba(0, 0, 0, 0.1)",
            }}
            label="Data e Horário de Inicío*"
            value={value}
            onChange={handleChange}
            required
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </DivTime>
      <DivTime>
        <Stack spacing={3}>
          <DateTimePicker
            sx={{
              boxSizing: "border-box",
              position: "absolute",
              width: "425px",
              height: "40px",
              left: "455px",
              top: "150px",
              border: "1px solid #C0C1C6",
              borderRadius: "4px",
            }}
            label="Data e Horário de Fim"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </DivTime>
    </LocalizationProvider>
  );
}
