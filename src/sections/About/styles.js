export const styles = {
  boxXs: {
    width: "360px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    my: "32px",
    px: "20px",
    py: "12px",
    display: { xs: "flex", md: "none" },
    flexDirection: "column",
  },
  boxMd: {
    width: "820px",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    my: "32px",
    px: "44px",
    py: "22px",
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
  },
  containerCompany: {
    mt: "12px",
    mb: "32px",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: "44px",
  },
  boxTeam: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMember: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text1: {
    fontSize: {
      xs: "1.5rem",
      md: "2rem",
    },
    color: "primary.main",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  text2: {
    fontSize: {
      xs: "1.2rem",
      md: "1.5rem",
    },
    textAlign: "end",
    color: "secondary.main",
    opacity: "0.9",
  },
  text3: {
    fontSize: {
      xs: "1.2rem",
      md: "1.5rem",
    },
    color: "primary.main",
    opacity: "0.9",
  },
};
