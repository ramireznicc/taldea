import { Box, Link, Typography } from "@mui/material";

export const Footer = () => {
  const developer = (
    <Link
      color="secondary"
      target="_blank"
      href="https://ramireznicc.github.io"
    >
      Nicolás Ramirez
    </Link>
  );

  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        py: "12px",
        gap: "12px",
        background: "none",
        opacity: ".5",
        backgroundColor: "rgba(0,0,0,.2)",
        borderTop: "solid 1px rgba(255,255,255,0.2)",
      }}
    >
      <Typography variant="caption" fontWeight={700}>
        Taldea S.A.S. © All rights reserved | {year}
      </Typography>
      <Typography variant="caption">developed by {developer}</Typography>
    </Box>
  );
};
