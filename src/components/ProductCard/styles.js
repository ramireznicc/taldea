export const styles = {
  card: {
    width: { xs: "100%", md: "500px" },
    maxHeight: "140px",
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  image: {
    objectFit: "cover",
    width: "140px",
    height: "140px",
    borderRadius: "12px 0px 0px 12px",
  },
  itemTitle: {
    textTransform: "uppercase",
    color: "third.main",
  },
  itemBrand: {
    textTransform: "uppercase",
    color: "text",
    fontFamily: "Roboto Mono",
    letterSpacing: "1.5px",
  },
  itemDescription: {
    opacity: ".8",
    flexGrow: 1,
    py: "4px",
  },
  button: {
    alignSelf: "flex-end",
  },
};
