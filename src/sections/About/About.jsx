// About section
import { Typography, Divider } from "@mui/material";
import { AboutMD } from "./AboutMD";
import { AboutXS } from "./AboutXS";
import { Team } from "./Team";

export const About = () => {
  return (
    <>
      <AboutXS />
      <AboutMD />
      <Divider sx={{ my: "12px" }} flexItem>
        <Typography
          variant="caption"
          fontFamily="Roboto Mono"
          color="primary"
          textTransform="uppercase"
        >
          Nuestro equipo:
        </Typography>
      </Divider>
      <Team />
    </>
  );
};
