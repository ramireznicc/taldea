export const styles = {
  navbar: {
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    borderBottom: "solid 1px rgba(255,255,255,0.05)",
  },
  container1: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-between", md: "space-evenly" },
    width: "100%",
    px: { xs: "16px", md: "0px" },
  },
  logoMD: {
    display: { xs: "none", md: "flex" },
  },
  logoXS: {
    display: { xs: "flex", md: "none" },
  },
  menuMD: {
    widht: "60%",
    display: { xs: "none", md: "flex" },
    gap: "24px",
  },
  containerMD: {
    display: { xs: "none", md: "flex" },
  },
  menuXS: {
    display: { xs: "flex", md: "none" },
  },
  menuDropdownXS: {
    display: { xs: "block", md: "none" },
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};
