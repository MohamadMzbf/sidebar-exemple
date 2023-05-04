import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const drawerWidth = 240;



const DialogComponent = (props) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [displayUpdate, setDisplayUpdate] = React.useState(false);
    const [displayGeneral, setDisplayGeneral]= useState(false);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const handleDisplayUpdate = () => {
        setDisplayUpdate(true);
        setDisplayGeneral(false)
    }

    const handleGeneral = () => {
        setDisplayGeneral(true);
        setDisplayUpdate(false);

    }

    const params = [
        {
            id : 0,
            display : "Général",
            icon : <SettingsIcon/>,
            function : handleGeneral
        },
        {
            id:1,
            display : "Mot de passe",
            icon : <LockIcon/>,
            function : handleDisplayUpdate
        },
        
    ]
  
    const drawer = (
      <div>
        <List>
          {params.map((item, index) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={item.function}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.display} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );

    const updatePassword = (
        <Grid container direction="column" spacing={{ xs: 2 , md:5}} justifyContent="space-around">
            <Grid item md>
                <TextField placeholder='Mot de passe actuel' type='password' label="Mot de passe actuel" id="fullWidth" /> 
            </Grid>
            <Grid item md>
            <TextField placeholder='Nouveau mot de passe' type='password' label="Nouveau mot de passe" id="fullWidth" />
            </Grid>
            <Grid item md>
            <TextField placeholder='Confirmation mot de passe' type='password' label="Confirmation mot de passe" id="fullWidth" /> 
            </Grid>
            <Grid item md>
            <Button variant="contained">Enregistrer</Button>
            </Grid>     
        </Grid>
    )

    const handleClose = () => {
      setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);

    React.useEffect(() => {
        setOpen(props.open)
    },[props])

    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);
  
    return (
   
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth={fullWidth}
        maxWidth={maxWidth}
        >
          <DialogTitle id="scroll-dialog-title">Parmétres du Compte</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
          <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer> */}
       
          {drawer}
        
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        { displayUpdate ? (
            <>
                {updatePassword}

            </>
            
        ) :(
            <>
            
            <Typography variant="h4">
                            Parmétres général du compte
             </Typography></>

        )}
        
      </Box>
    </Box>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions> */}
        </Dialog>
    );
}

export default DialogComponent