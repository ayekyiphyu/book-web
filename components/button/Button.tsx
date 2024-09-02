import React, { memo } from "react";
import MuiButton from "@mui/material/Button";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme, styled } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
  gradient?: boolean;
  title?: string;
}

const Button: React.FC<ButtonProps> = memo((props) => {
  const { loading, gradient, ...rest } = props;
  const theme = useTheme();

  const StyledButton = styled(MuiButton)({
    backgroundColor: theme.palette.secondaryDark.main,
    color: theme.palette.white.main,
    font: "Inter",
    fontSize: "1rem",
    fontWeight: 400,
    boxShadow: "none",
    borderRadius: "0.23rem",

    "&:disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto",
      color: theme?.palette?.white?.main,
    },
    "&:hover": {
      boxShadow: "none",
      backgroundColor: theme.palette.secondaryDark.main,
      Opacity: 0.8,
    },
  });

  return (
    <StyledButton {...rest} disabled={props.disabled || loading}>
      {loading ? <CircularProgress size={15} color="inherit" /> : props?.title}
    </StyledButton>
  );
});

Button.displayName = "Button";

export default Button;
