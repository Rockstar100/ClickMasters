import * as React from 'react';
import tw from 'tailwind-styled-components'
import { styled, useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Grid } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TimerIcon from '@mui/icons-material/Timer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useSelector } from 'react-redux';
import axios from 'axios';
import {message} from 'antd';
import { getUser } from '../redux/featuers/userSlice';
import { useDispatch } from 'react-redux';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
   
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({

  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
const dispatch = useDispatch();


 

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const marginbottom = {
    marginBottom: '20px'
}

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [user, setUser] = useState(null)
const router = useRouter()
const [userData, setUserData] = useState();

const callAboutPage = async () => {

    try {
        const res = await axios.post('http://localhost:8080/api/v1/users/getUserData',
        { token: localStorage.getItem('token') },
         {
             headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            },
            credentials: 'include'
        });
      
        if(res.data.success){
          setUserData(res.data.data)
          dispatch(getUser(res.data.data))
      }
      
  } 
   catch (error) {
     
      console.log(error);

  }
 
};
useEffect(() => {
   
        callAboutPage();
  
}, [])


const notification = userData?.notification?.length;

const signOutHandler = () => {
   localStorage.clear();
   message.success('Logout Successfully');
    router.push('/Login')

    // signOut(auth)
    //     .then(() => {
    //         setUser(null)
    //         router.push('/GoogleLogin')
    //     })
    //     .catch((error) => {
    //         console.log(error.message)
    //     })
}
const menuId = 'primary-search-account-menu';

const renderMobileMenu = (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
   
  
  >
   
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={notification} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    
  </Menu>
);

  return (
    <Box sx={{ display: 'flex' ,margin : "-3%"  }} disable >
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:"black"}}>
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Click Masters
          </Typography>
          
          <div style={{ marginLeft: 'auto' }}>
            <Link href="/notification">
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={notification} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton></Link>
                               <Button onClick={()=>signOutHandler()} sx={{ borderColor: 'white', color: 'white', mr: 1, mx: 2}} variant="outlined">Sign Out</Button>
                             {/* <Button  sx={{ borderColor: 'white', color: 'white' }} variant="outlined">Sign Up</Button>
                             */}
                        </div>
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <Grid align="center" style={marginbottom}><Avatar sx={{ width: 80, height: 80 }} src ={userData?.profie_pic}>
          </Avatar> <br /> 
          
          <Typography>Hello {userData?.name} </Typography>
          </Grid>
          <Link href="/">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                < HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            </Link>

            <Link href="/MyProfile">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link href="/SecurityPrivacy">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <SecurityIcon/>
                </ListItemIcon>
                <ListItemText primary="Security & Privacy" />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link href="/TermsCondition">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <GavelIcon/>
                </ListItemIcon>
                <ListItemText primary="Terms & Condition" />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link href="/Help">
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
               <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
        <Link href="/notification">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="All Notifications" />
              </ListItemButton>
            </ListItem>
            </Link>
            {/* <Link href="/CompletedOrder">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleIcon/>
                </ListItemIcon>
                <ListItemText primary="Completed" />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link href="/PendingOrder">
            <ListItem disablePadding>
              <ListItemButton>
            
          <ListItemIcon>
                 <TimerIcon/>
                </ListItemIcon>
                <ListItemText primary="Pending" />
              </ListItemButton>
            </ListItem>
          </Link> */}
               
        
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

       
      </Main>
    </Box>
  );
}