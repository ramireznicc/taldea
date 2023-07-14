import { Typography, Container } from "@mui/material";

import { styles } from "./styles";

const Offers = () => {
  return (
    <Container sx={styles.container} maxWidth>
      <Typography variant="h2">PROMOCIONES</Typography>
    </Container>
  );
};

export default Offers;
