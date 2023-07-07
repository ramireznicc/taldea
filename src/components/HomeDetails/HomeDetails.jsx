import { Box, Typography } from "@mui/material";

import { styles } from "./styles";
import {
  StarBorderRounded,
  LocalShipping,
  Handshake,
  SupportAgent,
} from "@mui/icons-material";

export const HomeDetails = () => {
  const details = [
    {
      icon: <Handshake color="third" fontSize="large" />,
      title: "Atención personalizada",
    },
    {
      icon: <StarBorderRounded color="third" fontSize="large" />,
      title: "Calidad garantizada",
    },
    {
      icon: <LocalShipping color="third" fontSize="large" />,
      title: "Envíos a todo el país",
    },
    {
      icon: <SupportAgent color="third" fontSize="large" />,
      title: "Servicio post-venta",
    },
  ];

  return (
    <Box sx={styles.box}>
      {details.map((detail) => (
        <Box sx={styles.item}>
          {detail.icon}
          <Typography color="text" variant="body1" fontFamily="Roboto Mono">
            {detail.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
