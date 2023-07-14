import { Container, Divider, Typography } from "@mui/material";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import products from "../../data/products.json";

const Products = () => {
  const categories = products.map((item) => item.category);
  const categoriesUnique = [...new Set(categories)];

  return (
    <Container
      maxWidth="md"
      sx={{
        my: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {categoriesUnique.map((category) => (
        <>
          <Divider flexItem>
            <Typography
              color="primary"
              variant="caption"
              fontFamily="Roboto Mono"
              textTransform="uppercase"
            >
              {category}
            </Typography>
          </Divider>
          {products
            .filter((item) => item.category === category)
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </>
      ))}
    </Container>
  );
};

export default Products;
