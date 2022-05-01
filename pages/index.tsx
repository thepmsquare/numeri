import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../styles/index.module.css";
const goldColor = "#ffb300";
const theme = createTheme({
  palette: {
    primary: {
      main: goldColor,
    },
    info: {
      main: "#0ff",
    },
  },
  typography: {
    fontFamily: "Gilda Display",
  },
});

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <Typography variant="h1" color={goldColor}>
          numeri
        </Typography>
        <div className={styles.tabsContainer}>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Roman to Arabic" />
            <Tab label="Arabic to Roman" />
          </Tabs>
          {selectedTab === 0 && (
            <div className={styles.tab}>
              <TextField label="Enter Roman Numeral" variant="outlined" />
              <Button variant="outlined" color="primary">
                500
              </Button>
            </div>
          )}
          {selectedTab === 1 && (
            <div className={styles.tab}>
              <TextField label="Enter Arabic Numeral" variant="outlined" />
              <Button variant="outlined" color="primary">
                500
              </Button>
            </div>
          )}
        </div>
      </main>
    </ThemeProvider>
  );
}
