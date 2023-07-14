import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const HomeTitleXS = () => {
  return (
    <Box sx={styles.boxXS}>
      <Typography style={styles.textXS} color="secondary">
        Importadores y
      </Typography>
      <Typography style={styles.textXS} color="secondary">
        distribuidores de
      </Typography>
      <Box sx={styles.box}>
        <Typography style={styles.textXS} color="third.main">
          equipos e insumos
        </Typography>
        <Typography style={styles.textXS} color="secondary">
          para
        </Typography>
      </Box>
      <Box sx={styles.box}>
        <Typography style={styles.textXS} color="secondary">
          la
        </Typography>
        <Typography style={styles.textXS} color="third.main">
          comunicación visual
        </Typography>
      </Box>
      <Box sx={styles.box}>
        <Typography style={styles.textXS} color="secondary">
          y la
        </Typography>
        <Typography style={styles.textXS} color="third.main">
          industria textil
        </Typography>
      </Box>
    </Box>
  );
};
