import { Box, Divider, Typography } from "@mui/material";

import { styles } from "./styles";

const membersOne = [
  { name: "Hernan Ramirez", title: "CEO" },
  { name: "Eugenio Lafon", title: "CTO" },
];

const membersTwo = [
  { name: "Armando Paredes", title: "Manager" },
  { name: "Lionel Messi", title: "Encargado" },
  { name: "Diego maradona", title: "Encargado" },
];

const membersThree = [
  { name: "Juan Perez", title: "Ventas" },
  { name: "Pedro García", title: "Ventas" },
  { name: "Maria Gonzalez", title: "Ventas" },
];

export const Team = () => {
  return (
    <Box style={styles.boxCompany}>
      <Box sx={styles.boxTeam}>
        {membersOne.map((member) => (
          <Box sx={styles.boxMember}>
            <Typography variant="body" fontFamily="Roboto Mono">
              {member.name}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography color="primary">{member.title}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={styles.boxTeam}>
        {membersTwo.map((member) => (
          <Box sx={styles.boxMember}>
            <Typography variant="body" fontFamily="Roboto Mono">
              {member.name}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography color="primary">{member.title}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={styles.boxTeam}>
        {membersThree.map((member) => (
          <Box sx={styles.boxMember}>
            <Typography variant="body" fontFamily="Roboto Mono">
              {member.name}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography color="primary">{member.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
