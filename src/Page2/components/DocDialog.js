import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import List from '@material-ui/core/List';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

function DocDialog() {
    return (
        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
    >
        <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            >
            <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Document
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
            save
            </Button>
        </Toolbar>
        </AppBar>

        <List>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
        <Divider />
            <ListItemText primary="Default notification ringtone" />
        <Divider />
        <ListItemText primary="Default notification ringtone" />
        </List>
    </Dialog>
    )
}

export default DocDialog ;