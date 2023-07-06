import { Container, Divider, Typography } from "@mui/material";

import { HomeTitleXS } from "../../components/HomeTitle/HomeTitleXS";
import { HomeTitleMD } from "../../components/HomeTitle/HomeTitleMD";
import { BrandItems } from "../../components/BrandItems/BrandItems";
import { styles } from "./styles";
import { HomeDetails } from "../../components/HomeDetails/HomeDetails";

export const Home = () => {
  return (
    <Container sx={styles.container}>
      <Container sx={styles.header}>
        <HomeTitleXS />
        <HomeTitleMD />
        <HomeDetails />
      </Container>
      <Divider>
        <Typography
          variant="caption"
          fontFamily="Roboto Mono"
          color="primary"
          textTransform="uppercase"
        >
          Nuestras marcas:
        </Typography>
      </Divider>
      <BrandItems />
    </Container>
  );
};
