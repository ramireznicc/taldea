import { Link } from "react-router-dom";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Send } from "@mui/icons-material";

import { styles } from "./styles";

export const ProductCard = ({ product }) => {
  return (
    <Box sx={styles.card}>
      <Box component="img" src={product.image} sx={styles.image} />
      <Box
        p="4px 8px 8px 16px"
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <Typography variant="h6" sx={styles.itemTitle}>
          {product.name}
        </Typography>
        <Typography variant="caption" sx={styles.itemBrand}>
          {product.brand}
        </Typography>
        <Divider sx={{ py: "4px" }} flexItem />
        <Typography variant="body2" sx={styles.itemDescription}>
          {product.description}
        </Typography>
        <Button
          sx={styles.button}
          color="secondary"
          endIcon={<Send color="primary" fontSize="small" />}
          fullWidth={false}
          size="small"
          LinkComponent={Link}
          to="/contacto"
        >
          Consultar
        </Button>
      </Box>
    </Box>
  );
};
