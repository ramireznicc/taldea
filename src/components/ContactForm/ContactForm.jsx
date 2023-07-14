<<<<<<< HEAD
import { Box, Button, TextField } from "@mui/material";
=======
import { Container, Box, Typography, Button, TextField } from "@mui/material";
>>>>>>> develop
import { Send } from "@mui/icons-material";

import { styles } from "./styles";

export const ContactForm = () => {
  return (
<<<<<<< HEAD
    <>
      <Box sx={styles.formContainer}>
=======
    <Container sx={styles.formContainer}>
      <Typography
        variant="h6"
        fontWeight="700"
        color="primary"
        textTransform="uppercase"
      >
        Hacé tu consulta:
      </Typography>
      <Box sx={styles.contactDetails}>
>>>>>>> develop
        <TextField fullWidth label="Nombre o Empresa" />
        <TextField fullWidth label="Teléfono" />
        <TextField fullWidth label="Email" />
      </Box>
      <Box>
        <TextField fullWidth multiline rows={6} label="Mensaje" />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          color="secondary"
          disableElevation
          startIcon={<Send color="primary" />}
        >
          Enviar
        </Button>
      </Box>
<<<<<<< HEAD
    </>
=======
    </Container>
>>>>>>> develop
  );
};
