import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const HomeTitleXS = () => {
  return (
    <Box sx={styles.boxXS}>
      <Typography
        fontWeight="bold"
        variant="h4"
        color="secondary"
        textAlign="center"
      >
        Importadores
      </Typography>
      <Typography
        fontWeight="bold"
        variant="h4"
        color="primary"
        textAlign="center"
      >
        y distribuidores
      </Typography>
      <Typography
        fontWeight="bold"
        variant="h4"
        color="secondary"
        textAlign="center"
      >
        de equipos e insumos
      </Typography>
      <Typography
        fontWeight="bold"
        variant="h4"
        color="primary"
        textAlign="center"
      >
        para la
      </Typography>
      <Typography
        fontWeight="bold"
        variant="h4"
        color="secondary"
        textAlign="center"
      >
        comunicación visual
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
