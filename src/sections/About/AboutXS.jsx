import { Divider, Paper, Typography } from "@mui/material";

import { styles } from "./styles";

export const AboutXS = () => {
  return (
    <Paper sx={styles.paperXs}>
      <Typography sx={styles.text1}>Somos el valor</Typography>
      <Typography color="primary" sx={styles.text1}>
        del trabajo en equipo.
      </Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography sx={styles.text2}>Una joven empresa formada </Typography>
      <Typography sx={styles.text2}>
        por un grupo de perfil profesional,
      </Typography>
      <Typography sx={styles.text3}>con vasta experiencia en la</Typography>
      <Typography sx={styles.text3}>importación y distribución</Typography>
      <Typography sx={styles.text2}>de equipamiento tecnológico,</Typography>
      <Typography sx={styles.text2}>
        materiales y consumibles para la
      </Typography>
      <Typography sx={styles.text3}> Comunicación Visual y la</Typography>
      <Typography sx={styles.text3}>Industrial Textil.</Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography sx={styles.text4}>
        Representantes de marcas líderes
      </Typography>
      <Typography variant="h5" color="secondary">
        a nivel global,
      </Typography>
      <Typography sx={styles.text5}>brindamos un asesoramiento</Typography>
      <Typography sx={styles.text5}>
        responsable, junto a un servicio
      </Typography>
      <Typography variant="h5" color="secondary">
        ágil y eficiente.
      </Typography>
      <Divider light sx={{ my: "18px" }} />
      <Typography sx={styles.text2}>Ponemos el foco en</Typography>
      <Typography textAlign="end" variant="h5" color="primary">
        consolidar la confianza
      </Typography>
      <Typography sx={styles.text3}>
        que nuestros clientes nos depositan
      </Typography>
      <Typography sx={styles.text7}>
        a través de un compromiso permanente,
      </Typography>
      <Typography sx={styles.text2}>procurando dar respuestas</Typography>
      <Typography sx={styles.text6}>
        a la altura de los desafíos y necesidades
      </Typography>
      <Typography sx={styles.text3}>que sus proyectos demandan.</Typography>
    </Paper>
  );
};
