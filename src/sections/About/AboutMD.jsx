import { Divider, Box, Typography } from "@mui/material";
import { styles } from "./styles";

export const AboutMD = () => {
  return (
    <Box sx={styles.boxMd}>
      <Typography sx={styles.text1}>
        Somos el valor del trabajo en equipo.
      </Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography sx={styles.text2}>
        Una joven empresa formada por un grupo de perfil profesional, <br />
        con vasta experiencia en laimportación y distribución <br />
        de equipamiento tecnológico, materiales y consumibles para la <br />
        <b>Comunicación Visual y la Industrial Textil.</b>
      </Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography sx={styles.text3}>
        Representantes de marcas líderes a nivel mundial, <br />
        brindamos un asesoramiento <b>integral y personalizado,</b> <br />
        junto a un servicio <b>ágil y eficiente.</b>
      </Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography sx={styles.text2}>
        Ponemos el foco enconsolidar la confianza <br />
        que nuestros clientes nos depositan a través de <br />
        un compromiso permanente, procurando dar respuestas a la altura <br />
        de los desafíos y necesidades que sus proyectos demandan.
      </Typography>
    </Box>
  );
};
