import { Box, Divider, Typography, Container } from "@mui/material";

import { styles } from "./styles";

const members = [
  { name: "Hernán Ramírez", title: "CEO" },
  { name: "Eugenio Lafon", title: "Gerente Comercial" },
  { name: "Noelia Etcheverrito", title: "Administración & Ctas.Ctes." },
  { name: "Belén Maccione", title: "Comercio Exterior" },
  { name: "Germán Comas", title: "Logística & Expedición" },
  { name: "Daniel Vazquez", title: "Asesor Comercial" },
  { name: "Ángel Simonelli", title: "Asesor Comercial" },
  { name: "Norberto Renzo", title: "Servicio Técnico" },
];

export const Team = () => {
  return (
    <Container sx={styles.containerCompany} maxWidth>
      <Divider flexItem>
        <Typography
          variant="caption"
          fontFamily="Roboto Mono"
          color="primary"
          textTransform="uppercase"
        >
          Nuestro equipo
        </Typography>
      </Divider>
      <Box sx={styles.boxTeam}>
        {members.map((member) => (
          <Box sx={styles.boxMember}>
            <Typography sx={styles.memberPosition}>{member.title}</Typography>
            <Divider flexItem />
            <Typography sx={styles.memberName}>{member.name}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
