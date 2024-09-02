import "../styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../mui-theme.config";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<{ Hello: string } | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </div>
  );
}
