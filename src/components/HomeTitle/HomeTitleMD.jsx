import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const HomeTitleMD = () => {
  return (
    <Box sx={styles.boxMD}>
      <Typography fontWeight="bold" variant="h4" color="secondary">
        Importadores y distribuidores
      </Typography>
      <Typography
        fontWeight="bold"
        variant="h4"
        color="primary"
        textAlign="center"
      >
        de equipos e insumos
      </Typography>
      <Typography fontWeight="bold" variant="h4" color="secondary">
        para la comunicación visual
      </Typography>

      <Typography
        fontWeight="bold"
        variant="h4"
        color="primary"
        textAlign="center"
      >
        y la industria textil.
      </Typography>
    </Box>
  );
};
