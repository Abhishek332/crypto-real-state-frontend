
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="stikey">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CryptoState
          </Typography>
       
        <Link color="inherit" className="links" to="/">
        <Button color="inherit" >Home</Button>
      
        </Link>
        <Link color="inherit"  className="links"to="/properties">
        
       <Button color="inherit">Properties</Button>
        </Link>
        <Link className="links" to="/Register" >
        <Button  color="inherit">Register</Button>
     
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

