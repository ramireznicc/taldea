import { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Toolbar,
  Container,
} from "@mui/material";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
// *ICONS IMPORTS
import {
  ListAltRounded,
  GroupsRounded,
  MailRounded,
  MenuOpen,
  LocalOfferRounded,
} from "@mui/icons-material/";

import { styles } from "./styles";

export const NavBar = () => {
  const itemsMenu = [
    {
      name: "Nosotros",
      path: "/nosotros",
      icon: <GroupsRounded color="third" fontSize="small" />,
    },
    {
      name: "Productos & Servicios",
      path: "/productos",
      icon: <ListAltRounded color="third" fontSize="small" />,
    },
    {
      name: "Promociones",
      path: "/Promociones",
      icon: <LocalOfferRounded color="third" fontSize="small" />,
    },
    {
      name: "Productos & Servicios",
      path: "/productos",
      icon: <ListAltRounded color="third" fontSize="small" />,
    },
    {
      name: "Contacto",
      path: "/contacto",
      icon: <MailRounded color="third" fontSize="small" />,
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth disableGutters sx={styles.navbar}>
      <Toolbar disableGutters>
        <Box sx={styles.container1}>
          <Box sx={styles.logoMD}>
            <Link to="/">
              <Logo />
            </Link>
          </Box>
          <Box sx={styles.logoXS}>
            <Link to="/">
              <Logo />
            </Link>
          </Box>
          <Box sx={styles.menuMD}>
            {itemsMenu.map((item) => (
              <Button
                startIcon={item.icon}
                LinkComponent={Link}
                to={item.path}
                key={item.name}
                color="secondary"
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box sx={styles.containerMD}></Box>
          <Box sx={styles.menuXS}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuOpen />
            </IconButton>
            <Menu
              color="secondary"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.menuDropdownXS}
            >
              {itemsMenu.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Button
                    fullWidth
                    size="small"
                    color="secondary"
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                  >
                    {item.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </Container>
  );
};
