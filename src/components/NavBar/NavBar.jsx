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
import { NavLink } from "react-router-dom";
// *ICONS IMPORTS
import { ListAlt, Groups, Mail, MenuOpen } from "@mui/icons-material/";

import { styles } from "./styles";

export const NavBar = () => {
  const itemsMenu = [
    {
      name: "Nosotros",
      path: "/nosotros",
      icon: <Groups color="third" fontSize="small" />,
    },
    {
      name: "Productos & Servicios",
      path: "/productos",
      icon: <ListAlt color="third" fontSize="small" />,
    },
    {
      name: "Contacto",
      path: "/contacto",
      icon: <Mail color="third" fontSize="small" />,
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
    <Container maxWidth={false} disableGutters sx={styles.navbar}>
      <Toolbar disableGutters>
        <Box sx={styles.container1}>
          <Box width="20%" sx={styles.logoMD}>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </Box>
          <Box sx={styles.logoXS}>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </Box>
          <Box sx={styles.menuMD}>
            {itemsMenu.map((item) => (
              <Button
                startIcon={item.icon}
                LinkComponent={NavLink}
                to={item.path}
                key={item.name}
                color="secondary"
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box width="20%" sx={styles.containerMD}></Box>
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
                    color="secondary"
                    component={NavLink}
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
