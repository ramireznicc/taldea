import { Box, Divider, Typography, Container } from "@mui/material";

import { styles } from "./styles";

<<<<<<< HEAD
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
=======
const members = [
  { name: "Hernán Ramírez", title: "CEO" },
  { name: "Eugenio Lafon", title: "Gerente Comercial" },
  { name: "Noelia Etcheverrito", title: "Administración & Ctas.Ctes." },
  { name: "Belén Maccione", title: "Comercio Exterior" },
  { name: "Germán Comas", title: "Logística & Expedición" },
  { name: "Daniel Vazquez", title: "Asesor Comercial" },
  { name: "Ángel Simonelli", title: "Asesor Comercial" },
>>>>>>> develop
  { name: "Norberto Renzo", title: "Servicio Técnico" },
];

export const Team = () => {
  return (
<<<<<<< HEAD
    <Container sx={styles.containerCompany}>
=======
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
>>>>>>> develop
      <Box sx={styles.boxTeam}>
        {members.map((member) => (
          <Box sx={styles.boxMember}>
<<<<<<< HEAD
            <Typography variant="body2" color="third.main">
              {member.title}
            </Typography>
            <Divider flexItem />
            <Typography
              variant="body"
              color="secondary"
              fontFamily="Roboto Mono"
            >
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
            <Typography
              variant="body"
              color="secondary"
              fontFamily="Roboto Mono"
            >
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
            <Typography
              variant="body"
              color="secondary"
              fontFamily="Roboto Mono"
            >
              {member.name}
            </Typography>
          </Box>
        ))}
      </Box>
=======
            <Typography sx={styles.memberPosition}>{member.title}</Typography>
            <Divider flexItem />
            <Typography sx={styles.memberName}>{member.name}</Typography>
          </Box>
        ))}
      </Box>
>>>>>>> develop
    </Container>
  );
};
