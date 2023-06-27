import { Link } from "react-router-dom";
import { Paper, Box, Typography, Button, Divider } from "@mui/material";
import { Send } from "@mui/icons-material";

export const ProductCard = ({ product }) => {
  return (
    <Paper
      sx={{
        width: { xs: "100%", md: "500px" },
        maxHeight: "140px",
        display: "flex",
        borderRadius: "12px",
      }}
    >
      <Box
        borderRadius="12px 0px 0px 12px"
        width="140px"
        height="140px"
        component="img"
        src={product.image}
        sx={{ objectFit: "cover" }}
      ></Box>
      <Box
        p="4px 8px 8px 16px"
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <Typography
          textTransform="uppercase"
          letterSpacing={1.5}
          fontWeight={700}
          variant="h6"
          color="primary"
        >
          {product.name}
        </Typography>
        <Typography
          variant="caption"
          textTransform="uppercase"
          color="secondary"
          fontFamily="Roboto Mono"
          letterSpacing={1.5}
        >
          {product.brand}
        </Typography>
        <Divider sx={{ py: "4px" }} flexItem />
        <Typography
          variant="body2"
          sx={{ opacity: ".8", flexGrow: 1, py: "4px" }}
        >
          {product.description}
        </Typography>
        <Button
          sx={{
            width: "fit-content",
            alignSelf: "flex-end",
          }}
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
    </Paper>
  );
};
