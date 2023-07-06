import { Divider, Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const AboutXS = () => {
  return (
    <Box sx={styles.boxXs}>
      <Typography sx={styles.text1}>Somos el valor</Typography>
      <Typography color="primary" sx={styles.text1}>
        del trabajo en equipo.
      </Typography>
      <Divider light sx={{ my: "8px" }} />
      <Typography sx={styles.text2}>
        Una joven empresa formada <br />
        por un grupo de perfil profesional, <br />
        con vasta experiencia en la <br />
        <b>importación y distribución</b> <br />
        de equipamiento tecnológico, <br />
        materiales y consumibles para la <br />
        Comunicación Visual y la <br />
        Industrial Textil.
      </Typography>
      <Divider light sx={{ my: "8px" }} />
      <Typography sx={styles.text3}>
        Representantes de marcas líderes <br />
        a nivel mundial, <br />
        brindamos un asesoramiento <br />
        <b>integral y personalizado,</b> <br />
        junto a un servicio <br />
        <b>ágil y eficiente.</b>
      </Typography>
      <Divider light sx={{ my: "8px" }} />
      <Typography sx={styles.text2}>
        Ponemos el foco en <br />
        consolidar la confianza <br />
        que nuestros clientes nos depositan <br />
        a través de un compromiso <br />
        permanente, procurando dar <br />
        respuestas a la altura <br />
        de los desafíos y necesidades <br />
        que sus proyectos demandan.
      </Typography>
    </Box>
  );
};
