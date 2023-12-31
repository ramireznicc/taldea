// * React imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
// * Material UI imports
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
// * Components & context imports
import { Theme } from "./context/Theme/Theme";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

import { About, Contact, Home, Offers, Products } from "./sections/index";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/promociones" element={<Offers />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
