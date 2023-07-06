// About section
import { Typography, Divider, Container } from "@mui/material";
import { AboutMD } from "./AboutMD";
import { AboutXS } from "./AboutXS";
import { Team } from "./Team";

import { styles } from "./styles";

export const About = () => {
  return (
    <Container sx={styles.container}>
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
    </Container>
  );
};
