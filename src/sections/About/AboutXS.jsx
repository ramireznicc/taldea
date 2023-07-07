import { Divider, Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const AboutXS = () => {
  return (
    <Box sx={styles.boxXs}>
      <Typography sx={styles.text1}>Somos el valor</Typography>
      <Typography color="primary" sx={styles.text1}>
        del trabajo en equipo
      </Typography>
      <Divider light sx={{ my: "4px" }} />
      <Typography sx={styles.text2}>
        Una joven empresa formada <br />
        por un grupo de perfil profesional, <br />
        con vasta experiencia en la <br />
        importación y distribución <br />
        de equipamiento tecnológico, <br />
        materiales y consumibles para la
      </Typography>
      <Box sx={styles.box}>
        <Typography sx={styles.text3}>comunicación visual</Typography>
        <Typography sx={styles.text2}>y la</Typography>
      </Box>
      <Typography sx={styles.text5}>industrial textil.</Typography>
      <Divider light sx={{ my: "4px" }} />
      <Typography sx={styles.text4}>
        Representantes de marcas líderes <br />
        a nivel mundial, <br />
        brindamos un asesoramiento
      </Typography>
      <Box sx={styles.box2}>
        <Typography sx={styles.text3}>integral</Typography>
        <Typography sx={styles.text4}>y</Typography>
        <Typography sx={styles.text3}>personalizado,</Typography>
      </Box>
      <Typography sx={styles.text4}> junto a un servicio</Typography>
      <Box sx={styles.box2}>
        <Typography sx={styles.text3}>ágil</Typography>
        <Typography sx={styles.text4}>y</Typography>
        <Typography sx={styles.text3}>eficiente.</Typography>
      </Box>
      <Divider light sx={{ my: "4px" }} />
      <Typography sx={styles.text2}>Ponemos el foco en</Typography>
      <Box sx={styles.box}>
        <Typography sx={styles.text2}>consolidar la</Typography>
        <Typography sx={styles.text3}>confianza</Typography>
      </Box>
      <Typography sx={styles.text2}>
        que nuestros clientes nos depositan
      </Typography>
      <Box sx={styles.box}>
        <Typography sx={styles.text2}>a través de un</Typography>
        <Typography sx={styles.text3}>compromiso</Typography>
      </Box>
      <Typography sx={styles.text2}>
        permanente, procurando dar <br />
        respuestas a la altura <br />
        de los desafíos y necesidades <br />
        que sus proyectos demandan.
      </Typography>
    </Box>
  );
};
