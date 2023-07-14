import { Container, Box, Divider, Typography } from "@mui/material";
import { styles } from "./styles";
import BRANDS from "../../data/brands.json";

export const BrandItems = () => {
  return (
    <Container sx={styles.container}>
      <Divider flexItem>
        <Typography
          variant="caption"
          fontFamily="Roboto Mono"
          color="primary"
          textTransform="uppercase"
        >
          Main Partners
        </Typography>
      </Divider>
      <Box sx={styles.box}>
        <Box component="a" href={BRANDS[0].url} target="_blank">
          <Box
            component="img"
            alt={BRANDS[0].name}
            src={BRANDS[0].image}
            sx={styles.image}
          />
        </Box>
        <Box component="a" href={BRANDS[1].url} target="_blank">
          <Box
            component="img"
            alt={BRANDS[1].name}
            src={BRANDS[1].image}
            sx={styles.avery}
          />
        </Box>
        <Box component="a" href={BRANDS[2].url} target="_blank">
          <Box
            component="img"
            alt={BRANDS[2].name}
            src={BRANDS[2].image}
            sx={styles.image}
          />
        </Box>
        <Box component="a" href={BRANDS[3].url} target="_blank">
          <Box
            component="img"
            alt={BRANDS[3].name}
            src={BRANDS[3].image}
            sx={styles.image}
          />
        </Box>
      </Box>
    </Container>
  );
};
