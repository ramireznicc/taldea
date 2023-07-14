export const styles = {
  navbar: {
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    borderBottom: "solid 1px rgba(255,255,255,0.05)",
  },
  container1: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-between", md: "center" },
    width: "100%",
    px: { xs: "16px", md: "0px" },
    py: "12px",
  },
  logoMD: {
    display: { xs: "none", md: "flex" },
    width: "20%",
    mx: "2rem",
  },
  logoXS: {
    display: { xs: "flex", md: "none" },
  },
  menuMD: {
    flex: 1,
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  },
  containerMD: {
    display: { xs: "none", md: "flex" },
    width: "20%",
  },
  menuXS: {
    display: { xs: "flex", md: "none" },
  },
  menuDropdownXS: {
    display: { xs: "block", md: "none" },
  },
};
