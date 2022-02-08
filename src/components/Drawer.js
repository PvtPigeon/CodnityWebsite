import React from "react";
import {
    Box,
    IconButton,
}
from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {withRouter} from "react-router-dom";

const Drawer = props => {
    const [anchorElNav, setAnchorEl] = React.useState(null);
        
    const { history } = props;
    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
      };
    
    const open = Boolean(anchorElNav);
    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };
    const menuItems = [
        {
          pageTitle: "Home",
          pageURL: "/"
        },
        {
          pageTitle: "Coffees",
          pageURL: "/coffees"
        }
      ];
      
  return (
    <Box sx={{ flexGrow: 0, display: { xs: '2', md: 'none', } }}>
        <IconButton
            size="large"
            edge="start"
            onClick={handleMenu}
            color="primary"
        >
            <MenuIcon />
        </IconButton>
        <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
        >
            {menuItems.map(menuItem => {
                  const { pageTitle, pageURL } = menuItem;
                  return (
                    <MenuItem key={pageTitle} onClick={() => handleMenuClick(pageURL)}>
                      {pageTitle}
                    </MenuItem>
                  );
                })}
        </Menu>
  </Box>
  );
}

export default withRouter(Drawer);
