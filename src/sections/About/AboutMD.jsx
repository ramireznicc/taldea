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
        Una joven empresa formada por un grupo de perfil profesional,
      </Typography>
      <Typography sx={styles.text3}>
        con vasta experiencia en laimportación y distribución
      </Typography>
      <Typography sx={styles.text2}>
        de equipamiento tecnológico, materiales y consumibles para la
      </Typography>
      <Typography sx={styles.text3}>
        Comunicación Visual y la Industrial Textil.
      </Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography sx={styles.text4}>
        Representantes de marcas líderes a nivel global,
      </Typography>
      <Typography sx={styles.text5}>
        brindamos un asesoramientoresponsable,
      </Typography>
      <Typography sx={styles.text4}>
        junto a un servicio ágil y eficiente.
      </Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography textAlign="end" variant="h5" color="primary">
        Ponemos el foco enconsolidar la confianza
      </Typography>
      <Typography sx={styles.text2}>
        que nuestros clientes nos depositan a través de
      </Typography>
      <Typography sx={styles.text6}>
        un compromiso permanente, procurando dar respuestas a la altura
      </Typography>
      <Typography sx={styles.text7}>
        de los desafíos y necesidades que sus proyectos demandan.
      </Typography>
    </Box>
  );
};
