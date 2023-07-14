export const styles = {
  container: {
<<<<<<< HEAD
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
=======
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
>>>>>>> develop
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: ".2rem",
  },
  box2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: ".2rem",
  },
  boxXs: {
<<<<<<< HEAD
    width: "360px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
=======
    width: "330px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    p: "12px",
>>>>>>> develop
    my: "32px",
    display: { xs: "flex", md: "none" },
    flexDirection: "column",
  },
  boxMd: {
    width: "820px",
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    my: "12px",
    p: "22px",
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
  },
  containerCompany: {
<<<<<<< HEAD
    mt: "12px",
    mb: "32px",
=======
>>>>>>> develop
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
<<<<<<< HEAD
    alignItems: { xs: "center", md: "flex-start" },
    gap: { xs: "22px", md: "62px" },
=======
    alignItems: "center",
    gap: "22px",
>>>>>>> develop
  },
  boxTeam: {
    width: "100%",
    display: "flex",
<<<<<<< HEAD
    flexDirection: "column",
    gap: { xs: "18px", md: "32px" },
    justifyContent: "center",
    alignItems: "center",
=======
    flexDirection: { xs: "column", md: "row" },
    flexWrap: "wrap",
    mb: { xs: "32px", md: "0px" },
    justifyContent: "space-around",
    alignItems: "center",
    gap: { xs: "22px", md: "12px" },
>>>>>>> develop
  },
  boxMember: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
<<<<<<< HEAD
=======
  },
  memberPosition: {
    fontSize: ".8rem",
    color: "primary.main",
  },
  memberName: {
    fontSize: ".8rem",
    lineHeight: "1rem",
    fontFamily: "Roboto Mono",
>>>>>>> develop
  },
  text1: {
    fontSize: {
      xs: "1.3rem",
      md: "1.6rem",
    },
    color: "primary.main",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  text2: {
    fontSize: {
      xs: "1.05rem",
      md: "1.2rem",
    },
    textAlign: "end",
    color: "text",
    opacity: "0.9",
  },
  text3: {
    fontSize: {
      xs: "1.05rem",
      md: "1.2rem",
    },
    color: "third.main",
    opacity: "0.9",
  },
  text4: {
    fontSize: {
      xs: "1.05rem",
      md: "1.2rem",
    },
    color: "text",
    opacity: "0.9",
  },
  text5: {
    fontSize: {
      xs: "1.05rem",
      md: "1.2rem",
    },
    textAlign: "end",
    color: "third.main",
    opacity: "0.9",
  },
};
