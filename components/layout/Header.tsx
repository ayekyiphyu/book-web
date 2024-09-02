import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/mui-theme.config";
import { IoBookOutline } from "react-icons/io5";
import { IconType } from "react-icons";

type ListItem = {
  key?: string;
  name: string;
  icon?: IconType;
  description?: string;
};

type ListItemProps = {
  title: string;
  icon?: IconType;
  key?: string;
  onClick: () => void;
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
            backgorundColor: theme.palette.secondaryDark.main,
            Opacity: 0.8,
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

const HeaderMenu = ({ items }: { items: ListItem[] }) => {
  const handleItemClick = (item: ListItem) => {
    console.log(`Clicked ${item.name}`);
  };

  return (
    <ThemeProvider theme={{ ...theme, ...styleList }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            <div className="flex flex-row items-center gap-[0.5rem]">
              <p>BookReviewsBy</p>
              <IoBookOutline />
              <span>Akiko</span>
            </div>
          </Typography>
          {items.map((item) => (
            <CustomListItem
              key={item.key}
              title={item.name}
              icon={item.icon}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

const CustomListItem = ({ title, icon: Icon, onClick }: ListItemProps) => {
  return (
    <p
      onClick={onClick}
      className="py-[0.5rem] px-[0.5rem] cursor-pointer flex items-center "
    >
      {Icon && <Icon className="mr-[0.2rem]" />} {title}
    </p>
  );
};

export default HeaderMenu;
