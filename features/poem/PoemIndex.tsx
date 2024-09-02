import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/mui-theme.config";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

type PoemProps = {
  title: string;
  description: string;
};

const styleList = {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondaryDark.main,
          padding: "0 !important",
          border: 0,
          borderRadius: "0",
          boxShadow: "none",
          zIndex: 1001,
          color: theme.palette.black.main,
          fontWeight: "normal",
          fontSize: "2rem",

          "&:hover": {
            backgroundColor: theme.palette.secondaryDark.main,
            opacity: 0.8,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondaryDark.main,
          fontWeight: "normal",
          fontSize: "1rem",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          color: theme.palette.white.main,
          fontWeight: "normal",
          fontSize: "1rem",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.white.main,
          fontWeight: "normal",
          fontSize: "1rem",
        },
      },
    },
  },
};

export const PoemComponent = ({ title, description }: PoemProps) => {
  return (
    <ThemeProvider theme={{ ...theme, ...styleList }}>
      <div className="flex flex-wrap md:flex-nowrap">
        <img
          src="assets/images/book-img.jpg"
          alt=""
          className="w-full md:w-[40rem] h-auto md:h-[20rem]"
        />
        <div className="flex flex-col justify-center">
          <h3 className="mt-4 md:mt-[3.5rem] font-bold text-[2rem] px-4 md:px-[3rem]">
            {title}
          </h3>
          <p className="text-[1rem] px-4 md:px-[3rem] mt-4 md:mt-[2.5rem] mb-4 md:mb-[2.5rem]">
            {description}
          </p>

          <div className="flex  justify-center mb-[2rem]">
            <Stack spacing={3}>
              <Pagination count={3} shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
