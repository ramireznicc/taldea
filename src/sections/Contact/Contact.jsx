import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Send, WhatsApp, Instagram, Email } from "@mui/icons-material";

const contactMethods = [
  {
    name: "WhatsApp",
    icon: <WhatsApp fontSize="small" color="primary" />,
    link: "https://api.whatsapp.com/send?phone=5491160441319",
  },
  {
    name: "Instagram",
    icon: <Instagram fontSize="small" color="primary" />,
    link: "https://www.instagram.com/taldea.sas/",
  },
  {
    name: "Email",
    icon: <Email fontSize="small" color="primary" />,
    link: "mailto:info@taldea.com.ar",
  },
];

export const Contact = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", flexDirection: "column", gap: "16px", my: "32px" }}
    >
      <Box>
        <Typography
          variant="h5"
          fontWeight="700"
          color="primary"
          textTransform="uppercase"
        >
          Hacé tu consulta:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "12px",
        }}
      >
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
      <Divider sx={{ pt: "12px" }}>
        <Typography
          variant="caption"
          fontFamily="Roboto Mono"
          color="primary"
          textTransform="uppercase"
        >
          Otras formas de contactarnos:
        </Typography>
      </Divider>
      <Box display="flex" flexDirection="column" gap="14px" alignSelf="center">
        {contactMethods.map((method) => (
          <Button
            color="secondary"
            fullWidth="false"
            startIcon={method.icon}
            href={method.link}
            target="_blank"
            sx={{ px: "12px" }}
          >
            {method.name}
          </Button>
        ))}
      </Box>
    </Container>
  );
};
