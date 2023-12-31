import { Box } from "@mui/material";

export const Logo = () => {
  return (
    <Box
      component="img"
      src="../../images/taldea-logo.png"
      sx={{
        width: "auto",
        height: "38px",
        pt: "4px",
        pl: "8px",
        my: "2px",
        mx: { xs: "0px", md: "16px" },
        cursor: "pointer",
        objectFit: "cover",
      }}
    ></Box>
  );
};
