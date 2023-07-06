import { Box, Divider, Typography, Container } from "@mui/material";

import { styles } from "./styles";

const membersOne = [
  { name: "Hernan Ramirez", title: "CEO" },
  { name: "Eugenio Lafon", title: "Gerente Comercial" },
];

const membersTwo = [
  { name: "Noelia Etcheverrito", title: "Administración & Ctas.Ctes." },
  { name: "Belén Maccione", title: "Comercio Exterior" },
  { name: "Germán Comas", title: "Logística & Expedición" },
];

const membersThree = [
  { name: "Daniel Vazquez", title: "Asesor Comercial" },
  { name: "Angel Simonelli", title: "Asesor Comercial" },
  { name: "Norberto Renzo", title: "Servicio Técnico" },
];

export const Team = () => {
  return (
    <Container sx={styles.containerCompany}>
      <Box sx={styles.boxTeam}>
        {membersOne.map((member) => (
          <Box sx={styles.boxMember}>
            <Typography variant="body2" color="third.main">
              {member.title}
            </Typography>
            <Divider flexItem />
            <Typography variant="body" fontFamily="Roboto Mono">
              {member.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={styles.boxTeam}>
        {membersTwo.map((member) => (
          <Box sx={styles.boxMember}>
            <Typography variant="body2" color="third.main">
              {member.title}
            </Typography>
            <Divider flexItem />
            <Typography variant="body" fontFamily="Roboto Mono">
              {member.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={styles.boxTeam}>
        {membersThree.map((member) => (
          <Box sx={styles.boxMember}>
            <Typography variant="body2" color="third.main">
              {member.title}
            </Typography>
            <Divider flexItem />
            <Typography variant="body" fontFamily="Roboto Mono">
              {member.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
