// About section
<<<<<<< HEAD
import { Typography, Divider, Container } from "@mui/material";
=======
import { Container } from "@mui/material";
>>>>>>> develop
import { AboutMD } from "./AboutMD";
import { AboutXS } from "./AboutXS";
import { Team } from "./Team";

import { styles } from "./styles";

const About = () => {
  return (
<<<<<<< HEAD
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
          Nuestro equipo
        </Typography>
      </Divider>
=======
    <Container sx={styles.container} maxWidth>
      <AboutXS />
      <AboutMD />
>>>>>>> develop
      <Team />
    </Container>
  );
};

export default About;
