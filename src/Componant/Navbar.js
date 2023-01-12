import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Logo from "../Assets/Logo.png"



function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const style = {
    textDecoration: "none",
     margin: "15px",
  };

  const style2 = {
    textDecoration: "none",
    color:"black",
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{ my: 2, display: { xs: 'block', sm: 'block' } }}>
        <Link to="/">
          <img src={Logo} alt="Logo" width="auto" height="35" />
        </Link>
      </Box>
      <Divider />
      <List>
          <ListItemButton>
      
          <Link to="/templates" underline="none" style={style2}>
            <ListItemText primary="Resume Templates" />
            </Link>
          </ListItemButton>
          
          <ListItemButton>
          <Link to="/myresume" underline="none" style={style2}>
            <ListItemText primary="My Resume" />
            </Link>
          </ListItemButton>
          <ListItemButton>
          <Link to="/about" underline="none" style={style2}>
            <ListItemText primary="About Us" />
          </Link>
          </ListItemButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position= "fixed" component="nav" color='default' sx={{height:55}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ flexGrow: 1, my: 2, display: { xs: 'block', sm: 'block' } }}>
            <Link to="/">
              <img src={Logo} alt="Logo" width="auto" height="35" />
            </Link>

          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>

            <Link to="/templates" underline="none" style={style} >
              Resume Templates
              </Link>

            <Link to="/myresume" underline="none" style={style}>
              My Resume
            </Link>

            <Link to="/about" underline="none" style={style}>
              About Us
            </Link>
           
          </Box>

        </Toolbar>

      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />



      </Box>
    </Box>




  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;