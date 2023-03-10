import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Submissions from './Pages/Submissions';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import Error from './Pages/Error';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

function App() {

  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </head>
      <body>
        <div className='header'>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img className='header-logo' src={require("./header.png")} alt='ChuCode'></img>
          </Link>
          <nav className='nav'>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1, }, }}>
              <ButtonGroup
                className='menu'
                disableElevation
                variant="text"
                aria-label="Disabled elevation buttons"
              >
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'lightgray' }}>
                  <Button className='tab' color='inherit' >Dashboard</Button>
                </Link>
                <Link to="/submissions" style={{ textDecoration: 'none', color: 'lightgray' }}>
                  <Button className='tab' color='inherit' >Submissions</Button>
                </Link>
                <Link to="https://leetcode.com/problems/two-sum/" style={{ textDecoration: 'none', color: 'lightgray' }}>
                  <Button className='tab' color='inherit' >Problem of the Day</Button>
                </Link>
                <Link to="/profile" style={{ textDecoration: 'none', color: 'lightgray' }}>
                  <Button className='tab' color='inherit' >Profile</Button>
                </Link>
                <Link to="https://leetcode.com/problemset/all/" style={{ textDecoration: 'none', color: 'lightgray' }}>
                  <Button className='tab' color='inherit' >LeetCode</Button>
                </Link>
                <Link to="/settings" style={{ textDecoration: 'none', color: 'lightgray' }}>
                  <Button className='tab' color='inherit' >Settings</Button>
                </Link>
                <Box sx={{ display: 'flex', rowAlign: 'right' }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <img src={require("./ChuCodeLogo.png")} alt='ChuCode' style={{ width: '32px', height: '32px' }}></img>
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleClose}>
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <img src={require("./ChuCodeLogo.png")} alt='ChuCode' style={{ width: '32px', height: '32px' }}></img>
                      </Avatar>
                      Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <img src={require("./ChuCodeLogo.png")} alt='ChuCode' style={{ width: '32px', height: '32px' }}></img>
                      </Avatar>
                      Account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </ButtonGroup>
            </Box>
          </nav>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/dashboard/:username?' element={<Dashboard />} />
          <Route path='/submissions' element={<Submissions />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <div></div>
      </body>
    </Router>
  );
}

export default App;
