import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "../styles/index.module.css";
import { IconButton } from "@mui/material";

const goldColor = "#ffb300";
const theme = createTheme({
  palette: {
    primary: {
      main: goldColor,
    },
  },
  typography: {
    fontFamily: "Roboto Slab",
  },
});
type refType = {
  [key: string]: string;
};
const ref: refType = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};
const orderedKeys = Object.keys(ref)
  .map((ele) => parseInt(ele))
  .sort((a, b) => b - a);
const convertToRoman = (num: number) => {
  let returnThis = "";
  for (let i of orderedKeys) {
    while (num >= i) {
      num = num - i;
      returnThis += ref[i];
    }
  }
  return returnThis;
};
const convertToArabic = (roman: string) => {
  let returnThis = 0;
  const copyRoman = roman;
  for (let i of orderedKeys) {
    while (roman.startsWith(ref[i])) {
      roman = roman.slice(ref[i].length);
      returnThis += i;
    }
  }
  if (returnThis === 0 || copyRoman !== convertToRoman(returnThis)) {
    return "invalid";
  }
  return returnThis;
};

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [arabicInput, setArabicInput] = useState("");
  const [romanInput, setRomanInput] = useState("");
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Typography variant="h1" color={goldColor} className={styles.header}>
            numeri
          </Typography>
          <div className={styles.tabsContainer}>
            <Tabs
              value={selectedTab}
              onChange={(_, newValue) => setSelectedTab(newValue)}
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Arabic to Roman" />
              <Tab label="Roman to Arabic" />
            </Tabs>

            {selectedTab === 0 && (
              <div className={styles.tab}>
                <TextField
                  label="Enter Arabic Numeral"
                  variant="outlined"
                  type="number"
                  InputProps={{
                    inputProps: { min: 1, max: 3999 },
                    endAdornment: arabicInput && (
                      <InputAdornment position="end">
                        <IconButton
                          color="primary"
                          onClick={() => {
                            setArabicInput("");
                          }}
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={arabicInput}
                  onChange={(e) => setArabicInput(e.target.value)}
                />
                {arabicInput &&
                  parseInt(arabicInput) >= 1 &&
                  parseInt(arabicInput) <= 3999 && (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          convertToRoman(parseInt(arabicInput))
                        );
                      }}
                    >
                      {convertToRoman(parseInt(arabicInput))}
                    </Button>
                  )}
                {arabicInput &&
                  (parseInt(arabicInput) < 1 ||
                    parseInt(arabicInput) > 3999) && (
                    <Button variant="outlined" color="primary">
                      Numbers from 1 to 3999 only
                    </Button>
                  )}
              </div>
            )}

            {selectedTab === 1 && (
              <div className={styles.tab}>
                <TextField
                  label="Enter Roman Numeral"
                  variant="outlined"
                  value={romanInput}
                  InputProps={{
                    endAdornment: romanInput && (
                      <InputAdornment position="end">
                        <IconButton
                          color="primary"
                          onClick={() => {
                            setRomanInput("");
                          }}
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setRomanInput(e.target.value.toUpperCase())}
                />
                <div className={styles.assistButtonsParent}>
                  {orderedKeys.map((ele) => {
                    return (
                      <Tooltip title={ele} key={ref[ele]}>
                        <Button
                          onClick={() => setRomanInput(romanInput + ref[ele])}
                        >
                          {ref[ele]}
                        </Button>
                      </Tooltip>
                    );
                  })}
                </div>

                {romanInput && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        convertToArabic(romanInput).toString()
                      );
                    }}
                  >
                    {convertToArabic(romanInput)}
                  </Button>
                )}
              </div>
            )}
          </div>
        </main>
      </ThemeProvider>
    </React.StrictMode>
  );
}
