// About section
import { Container } from "@mui/material";
import { AboutMD } from "./AboutMD";
import { AboutXS } from "./AboutXS";
import { Team } from "./Team";

import { styles } from "./styles";

const About = () => {
  return (
    <Container sx={styles.container} maxWidth>
      <AboutXS />
      <AboutMD />
      <Team />
    </Container>
  );
};

export default About;
