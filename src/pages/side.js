import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from '../Components/SignUp';
import { Avatar, Grid } from '@mui/material';
import MyProfile from './MyProfile';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SecurityPrivacy from './SecurityPrivacy';
import TermsCondition from './TermsCondition';
import Link from 'next/link'

import Help from './Help';
import HomePage from './HomePage';
// import FaqSection from './FaqSection';
const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        backgroundColor: 'black',
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

},
)(({ theme, open }) => ({
    backgroundColor: 'black',
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
const marginbottom = {
    marginBottom: '20px'
}
const DrawerHeader = styled('div')(({ theme }) => ({

    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function Sidenav() {
    const [disbleEverthng, setdisbleEverthng] = useState(false)
    const [showMyProfile, setshowMyProfile] = useState(false);
    const [showHome, setshowHome] = useState(true);
    const [showSecurity, setshowSecurity] = useState(false);
    const [showTerms, setshowTerms] = useState(false);
    const [showHelp, setshowHelp] = useState(false);
    const CrossIconStyle = { marginLeft: '400px' }
    const handleProfileClick = () => {
        setShowSignUp(false)
        setShowLogin(false)
        setshowHome(false)
        setshowHelp(false)
        setshowMyProfile(true);
        setshowSecurity(false);
        setshowTerms(false)
        setshowHelp(false)
    };
    const handleTermsClick = () => {
        setShowSignUp(false)
        setShowLogin(false)
        // setshowHelp(false)
        setshowHome(false)
        setshowSecurity(false);
        setshowMyProfile(false);
        setshowTerms(true)
        setshowHelp(false)
    };
    const handleHomeClick = () => {
        setShowSignUp(false)
        setShowLogin(false)
        setshowSecurity(false);
        setshowMyProfile(false);
        setshowTerms(false)
        setshowHelp(false)
        setshowHome(true)
    };
    const handleHelpClick = () => {
        setShowSignUp(false)
        setShowLogin(false)
        setshowHome(false)
        setshowHelp(true)
        setshowMyProfile(false);
        setshowSecurity(false);
        setshowTerms(false)
    }
    const handleSecurityClick = () => {
        setShowSignUp(false)
        setShowLogin(false)
        setshowSecurity(true);
        setshowHome(false)
        setshowMyProfile(false);
        setshowTerms(false)
        setshowHelp(false)
    };
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignUp] = useState(false);

    const handleLoginClick = () => {
        setshowSecurity(false);
        setshowHome(false)
        setshowMyProfile(false);
        setshowTerms(false)
        setshowHelp(false)
        setShowLogin(true);
        setShowSignUp(false);


    };
    const handleSignupClick = () => {
        setshowSecurity(false);
        setshowHome(false)
        setshowMyProfile(false);
        setshowTerms(false)
        setshowHelp(false)
        setShowLogin(false);
        setShowSignUp(true);
    };
    const [Name, setName] = useState("user")




    return (
        <>


            <Box sx={{ display: 'flex',m:'-3' }} disable>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton disabled={disbleEverthng}
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
                               <Button onClick={handleLoginClick} sx={{ borderColor: 'white', color: 'white', mr: 1 }} variant="outlined">Sign in</Button>
                             <Button onClick={handleSignupClick} sx={{ borderColor: 'white', color: 'white' }} variant="outlined">Sign Up</Button>
                            
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
                        <IconButton disabled={disbleEverthng} onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>

                    </DrawerHeader>
                    <Divider />
                    <List>
                        <Grid align="center" style={marginbottom}><Avatar></Avatar> <br /> <Typography>Hello {Name}</Typography></Grid>
                        <ListItem onClick={handleHomeClick}>
                            <ListItemIcon>
                                <SecurityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem onClick={handleProfileClick}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                        </ListItem>
                        <ListItem onClick={handleSecurityClick}>
                            <ListItemIcon>
                                <SecurityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Security & Privacy" />
                        </ListItem>
                        <ListItem onClick={handleTermsClick} >
                            <ListItemIcon>
                                <PrivacyTipIcon />
                            </ListItemIcon>
                            <ListItemText primary=" Terms & Condition" />
                        </ListItem>
                        <ListItem onClick={handleHelpClick} >
                            <ListItemIcon>
                                <HelpCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                    </List>

                    <Divider />
                    <List>
                        {['All Orders', 'Completed', 'Pending'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    {showLogin && <Login />}
                    {showSignup && <SignUp />}
                    {showHome && <HomePage />}
                    {showMyProfile && <MyProfile />}
                    {showSecurity && <SecurityPrivacy />}
                    {showTerms && <TermsCondition />}
                    {showHelp && <Help />}
                </Main>
            </Box >
            <div>



            </div>
        </>
    );
}