import { Container, Typography, Box, Button, Divider } from "@mui/material";
import { WhatsApp, Instagram, Email } from "@mui/icons-material";

import { ContactForm } from "../../components/ContactForm/ContactForm";
import { styles } from "./styles";

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
    <Container maxWidth="md" sx={styles.container}>
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
      <ContactForm />
      <Divider sx={styles.divider}>
        <Typography
          variant="caption"
          fontFamily="Roboto Mono"
          color="primary"
          textTransform="uppercase"
        >
          Otras formas de contactarnos
        </Typography>
      </Divider>
      <Box sx={styles.methodsContainer}>
        {contactMethods.map((method) => (
          <Button
            color="secondary"
            fullWidth={false}
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
