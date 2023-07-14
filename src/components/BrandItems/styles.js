export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "22px",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "center", md: "baseline" },
    justifyContent: { xs: "space-between", md: "space-evenly" },
    gap: { xs: "44px", md: "0px" },
  },
  image: { height: { xs: "32px", md: "40px" } },
  avery: { height: { xs: "48px", md: "58px" } },
};
