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
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        py: "6px",
        px: "12px",
        background: "none",
      }}
    >
      <Typography sx={{ opacity: "0.7" }} variant="caption" justifySelf="end">
        developed by {developer} | {year}
      </Typography>
    </Box>
  );
};
