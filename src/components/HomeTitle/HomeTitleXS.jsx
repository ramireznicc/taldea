import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const HomeTitleXS = () => {
  return (
    <Box sx={styles.boxXS}>
<<<<<<< HEAD
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
        <Typography fontWeight="bold" variant="h4" color="third.main">
          equipos e insumos
        </Typography>
      </Box>
      <Typography fontWeight="bold" variant="h4" color="secondary">
        para la
      </Typography>
      <Typography fontWeight="bold" variant="h4" color="third.main">
        comunicación visual
      </Typography>
      <Box sx={styles.box}>
        <Typography fontWeight="bold" variant="h4" color="secondary">
          y la
        </Typography>
        <Typography fontWeight="bold" variant="h4" color="third.main">
=======
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
>>>>>>> develop
          industria textil
        </Typography>
      </Box>
    </Box>
  );
};
