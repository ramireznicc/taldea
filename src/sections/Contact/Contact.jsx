import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import {
  Send,
  WhatsApp,
  Instagram,
  Email,
  Facebook,
} from "@mui/icons-material";

const contactMethods = [
  {
    name: "WhatsApp",
    icon: <WhatsApp fontSize="small" color="secondary" />,
    link: "",
  },
  {
    name: "Instagram",
    icon: <Instagram fontSize="small" color="secondary" />,
    link: "https://www.instagram.com/taldea.sas/",
  },
  {
    name: "Facebook",
    icon: <Facebook fontSize="small" color="secondary" />,
    link: "",
  },
  {
    name: "Email",
    icon: <Email fontSize="small" color="secondary" />,
    link: "",
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
          textTransform="uppercase"
          fontWeight="700"
          color="secondary"
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
        <Button variant="contained" disableElevation startIcon={<Send />}>
          Enviar
        </Button>
      </Box>
      <Divider sx={{ py: "12px" }}>Otras formas de contantactarnos:</Divider>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap="14px"
        alignSelf="center"
      >
        {contactMethods.map((method) => (
          <Button
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
