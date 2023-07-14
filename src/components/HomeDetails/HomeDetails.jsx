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
      icon: <Handshake color="third" />,
      title: "Atención personalizada",
    },
    {
      icon: <StarBorderRounded color="third" />,
      title: "Calidad garantizada",
    },
    {
      icon: <LocalShipping color="third" />,
      title: "Envíos a todo el país",
    },
    {
      icon: <SupportAgent color="third" />,
      title: "Servicio post-venta",
    },
  ];

  return (
    <Box sx={styles.box}>
      {details.map((detail) => (
        <Box sx={styles.item}>
          {detail.icon}
          <Typography sx={styles.text}>{detail.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};
