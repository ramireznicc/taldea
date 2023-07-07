import { Box } from "@mui/material";

import { styles } from "./styles";

import BRANDS from "../../data/brands.json";

export const BrandItems = () => {
  return (
    <Box sx={styles.box}>
      {BRANDS.map((brand) => (
        <Box component="a" href={brand.url} target="_blank">
          <Box
            component="img"
            alt={brand.name}
            src={brand.image}
            sx={styles.image}
          />
        </Box>
      ))}
    </Box>
  );
};
