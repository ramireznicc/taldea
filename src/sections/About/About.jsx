// About section
import { Typography, Box, Divider } from "@mui/material";
import { AboutMD } from "./AboutMD";
import { AboutXS } from "./AboutXS";
import { Team } from "./Team";
import { styles } from "./styles";

export const About = () => {
  return (
    <>
      <AboutXS />
      <AboutMD />
      <Box sx={styles.box}>
        <Divider sx={{ my: "12px" }}>
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
      </Box>
    </>
  );
};
