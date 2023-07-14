import { Box, Typography, IconButton } from "@mui/material";
import { CodeRounded } from "@mui/icons-material";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        py: "12px",
      }}
    >
      <Typography sx={{ opacity: "0.4" }} variant="caption" fontWeight={700}>
        Taldea S.A.S. © All rights reserved - {year}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Typography
          sx={{ opacity: "0.4" }}
          variant="caption"
          fontFamily="Roboto Mono"
        >
          developed by
        </Typography>
        <IconButton
          color="primary"
          size="small"
          href="https://ramireznicc.com"
          target="_blank"
          sx={{ opacity: "0.8" }}
        >
          <CodeRounded fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};
