import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const HomeTitleXS = () => {
  return (
    <Box sx={styles.boxXS}>
      <Typography fontWeight="bold" variant="h4" color="secondary">
        Importadores
      </Typography>
      <Typography fontWeight="bold" variant="h4" color="secondary">
        y distribuidores
      </Typography>
      <Box sx={styles.box}>
        <Typography fontWeight="bold" variant="h4" color="secondary">
          de
        </Typography>
        <Typography fontWeight="bold" variant="h4" color="primary">
          equipos e insumos
        </Typography>
      </Box>
      <Typography fontWeight="bold" variant="h4" color="secondary">
        para la
      </Typography>
      <Typography fontWeight="bold" variant="h4" color="primary">
        comunicación visual
      </Typography>
      <Box sx={styles.box}>
        <Typography fontWeight="bold" variant="h4" color="secondary">
          y la
        </Typography>
        <Typography fontWeight="bold" variant="h4" color="primary">
          industria textil
        </Typography>
      </Box>
    </Box>
  );
};
