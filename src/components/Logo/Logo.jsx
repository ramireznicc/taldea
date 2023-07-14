import { Box } from "@mui/material";

export const Logo = () => {
  return (
    <Box
      component="img"
      src="../../images/taldea-logo.png"
      sx={{
        width: "166px",
        height: "auto",
        pt: "4px",
        pl: "8px",
        cursor: "pointer",
      }}
    ></Box>
  );
};
