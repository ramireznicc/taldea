import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const HomeTitleMD = () => {
  return (
    <Box sx={styles.boxMD}>
      <Box>
        <Typography fontWeight="bold" variant="h4" color="secondary">
          Importadores y distribuidores de
        </Typography>
      </Box>
      <Box>
        <Typography fontWeight="bold" variant="h4" color="third.main">
          equipos e insumos
        </Typography>
      </Box>
      <Box sx={styles.box}>
        <Typography fontWeight="bold" variant="h4" color="secondary">
          para la
        </Typography>
        <Typography fontWeight="bold" variant="h4" color="third.main">
          comunicación visual
        </Typography>
      </Box>
      <Box sx={styles.box}>
        <Typography fontWeight="bold" variant="h4" color="secondary">
          y la
        </Typography>
        <Typography fontWeight="bold" variant="h4" color="third.main">
          industria textil
        </Typography>
      </Box>
    </Box>
  );
};
