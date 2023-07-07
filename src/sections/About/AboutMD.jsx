import { Divider, Box, Typography } from "@mui/material";
import { styles } from "./styles";

export const AboutMD = () => {
  return (
    <Box sx={styles.boxMd}>
      <Typography sx={styles.text1}>
        Somos el valor del trabajo en equipo
      </Typography>
      <Divider light sx={{ my: "8px" }} />
      <Typography sx={styles.text2}>
        Una joven empresa formada por un grupo de perfil profesional, <br />
        con vasta experiencia en la importación y distribución <br />
        de equipamiento tecnológico, materiales y consumibles para la
      </Typography>
      <Box sx={styles.box}>
        <Typography sx={styles.text3}>comunicación visual</Typography>{" "}
        <Typography sx={styles.text2}>y la </Typography>
        <Typography sx={styles.text3}>industrial textil.</Typography>
      </Box>
      <Divider light sx={{ my: "8px" }} />
      <Typography sx={styles.text4}>
        Representantes de marcas líderes a nivel mundial,
      </Typography>
      <Box sx={styles.box2}>
        <Typography sx={styles.text4}>brindamos un asesoramiento</Typography>
        <Typography sx={styles.text3}>integral</Typography>
        <Typography sx={styles.text4}>y</Typography>
        <Typography sx={styles.text3}>personalizado,</Typography>
      </Box>
      <Box sx={styles.box2}>
        <Typography sx={styles.text4}>junto a un servicio</Typography>
        <Typography sx={styles.text3}>ágil</Typography>
        <Typography sx={styles.text4}>y</Typography>
        <Typography sx={styles.text3}>eficiente.</Typography>
      </Box>
      <Divider light sx={{ my: "8px" }} />
      <Box sx={styles.box}>
        <Typography sx={styles.text2}>
          Ponemos el foco en consolidar la
        </Typography>
        <Typography sx={styles.text3}>confianza</Typography>
      </Box>
      <Typography sx={styles.text2}>
        que nuestros clientes nos depositan a través de
      </Typography>
      <Box sx={styles.box}>
        <Typography sx={styles.text2}>un</Typography>
        <Typography sx={styles.text3}>compromiso</Typography>
        <Typography sx={styles.text2}>
          permanente, procurando dar respuestas a la altura
        </Typography>
      </Box>
      <Typography sx={styles.text2}>
        de los desafíos y necesidades que sus proyectos demandan.
      </Typography>
    </Box>
  );
};
