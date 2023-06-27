import { useState } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Toolbar,
} from "@mui/material";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
// *ICONS IMPORTS
import { ListAlt, Groups, Send, MenuOpen } from "@mui/icons-material/";

export const NavBar = () => {
  const itemsMenu = [
    {
      name: "Productos",
      path: "/productos",
      icon: <ListAlt fontSize="small" />,
    },
    {
      name: "Nosotros",
      path: "/nosotros",
      icon: <Groups fontSize="small" />,
    },
    {
      name: "Contacto",
      path: "/contacto",
      icon: <Send fontSize="small" />,
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
    <AppBar enableColorOnDark position="static" color="primary">
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "space-evenly" },
            width: "100%",
            px: { xs: "16px", md: "0px" },
          }}
        >
          <Box
            width="20%"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink to="/">
              <Logo />
            </NavLink>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <NavLink to="/">
              <Logo />
            </NavLink>
          </Box>
          <Box
            sx={{
              widht: "60%",
              display: { xs: "none", md: "flex" },
              gap: "24px",
            }}
          >
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
          <Box
            width="20%"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuOpen />
            </IconButton>
            <Menu
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {itemsMenu.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Button
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
    </AppBar>
  );
};
