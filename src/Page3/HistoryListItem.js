import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';


function HistoryListItem(document) {

    const classes = useStyles();

    function saveDocumentOnClick(){

        if (document.children.Value.attachment !=null){
        //let x = dataURLtoFile(attach,attachtype)
        //console.log(x)
    //   await save(document.children.Value.attachment, document.children.Value.attachmentType)
        //const saveSync = require('save-file/sync')
        }
        }

    return (
    <Card className={classes.root}>
    <CardContent>
    <List>

    <ListItem>
    <ListItemText primary = "Timestamp : "  />
    <ListItemText primary = {document.children.Timestamp}  />
    </ListItem>

    <ListItem>
    <ListItemText primary = "TxId : "  />
    <ListItemText primary = {document.children.TxId}  />
    </ListItem>

    <ListItem>
    <ListItemText primary = "IsDelete : "  />
    <ListItemText primary = {document.children.IsDelete}  />
    </ListItem>

    <ListItem>
    <ListItemText primary = "Body : "  />
    <ListItemText primary = {document.children.Value.body}  />
    </ListItem>

    <ListItem>
    <ListItemText primary = "confirmationState : "  />
    <ListItemText primary = {document.children.Value.confirmationState}  />
    </ListItem>

    <ListItem>
    <ListItemText primary = "modified : "  />
    <ListItemText primary = {document.children.Value.modified.toString()}  />
    </ListItem>

    <ListItem>
    <ListItemText primary = "lastModified : "  />
    <ListItemText primary = {document.children.Value.lastModified}  />
    </ListItem>

    <Button variant="contained" color="secondary" onClick={saveDocumentOnClick} >Review Attachment</Button>

    </List>
    </CardContent>
    </Card>
    )
}



const useStyles = makeStyles({
    root: {
    minWidth: '100%',
    height:'500px',
    backgroundcolour :'black'
    },
    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    },
    title: {
    fontSize: 14,
    },
    pos: {
    marginBottom: 12,
    },
});


export default  HistoryListItem ;



