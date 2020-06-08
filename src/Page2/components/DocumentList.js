import React, {useContext,useState }  from "react";
import Row from './Row';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import BackupIcon from '@material-ui/icons/Backup';
import CommentSection from './CommentSection';
import {StateContext} from '../../StateProvider';
import HistoryIcon from "@material-ui/icons/History";

import axios from 'axios'
import { useHistory } from "react-router-dom";
import { save } from 'save-file'


function DocumentList(Documents) {
    let history = useHistory();
    Documents ={
        "result": [
            {
                "Key": "Apple",
                "Record": {
                    "attachment": "testAttachment",
                    "attachmentType": "TestattachType",
                    "body": "TestBody",
                    "comments": null,
                    "confirmationState": "",
                    "creationDate": "06-06-2020",
                    "creationTime": "3:42:13 PM",
                    "documentType": "RFR",
                    "lastModified": "",
                    "modified": false,
                    "objectType": "document",
                    "receiver": "Peer2",
                    "sender": "Peer1",
                    "subject": "Apple"
                }
            },
            {
                "Key": "Dell",
                "Record": {
                    "attachment": "testAttachment",
                    "attachmentType": "TestattachType",
                    "body": "TestBody",
                    "comments": null,
                    "confirmationState": "",
                    "creationDate": "06-06-2020",
                    "creationTime": "3:41:25 PM",
                    "documentType": "Offer",
                    "lastModified": "",
                    "modified": false,
                    "objectType": "document",
                    "receiver": "Peer2",
                    "sender": "Peer1",
                    "subject": "Dell"
                }
            },
            {
                "Key": "IBM",
                "Record": {
                    "attachment": "testAttachment",
                    "attachmentType": "TestattachType",
                    "body": "TestBody",
                    "comments": null,
                    "confirmationState": "",
                    "creationDate": "06-06-2020",
                    "creationTime": "3:41:52 PM",
                    "documentType": "document",
                    "lastModified": "",
                    "modified": false,
                    "objectType": "document",
                    "receiver": "Peer2",
                    "sender": "Peer1",
                    "subject": "IBM"
                }
            },
            {
                "Key": "Orascomproject",
                "Record": {
                    "attachment": "testAttachment",
                    "attachmentType": "TestattachType",
                    "body": "TestBody",
                    "comments": null,
                    "confirmationState": "",
                    "creationDate": "06-06-2020",
                    "creationTime": "3:41:4 PM",
                    "documentType": "testRFRstring",
                    "lastModified": "",
                    "modified": false,
                    "objectType": "document",
                    "receiver": "Peer2",
                    "sender": "Peer1",
                    "subject": "Orascomproject"
                }
            }
        ],
        "error": null,
        "errorData": null
    }
;
const [open, setOpen] = useState(false);

const [subject, setSubject] = useState();
const [type, setType] = useState();
const [send, setSend] = useState();
const [rec, setRec] = useState();
const [body, setBody] = useState();
const [time, setTime] = useState();
const [mod, setMod] = useState();
const [attach, setAttach] = useState();
const [attachtype, setAttachType] = useState();
const [comments, setComments] = useState();
const [newComment, setNewComment] = useState();
const [ userstate, setUserState,documentstate, setDocumentState, historystate, setHistoryState ]=useContext(StateContext)
//const [documentstate,setDocumentState]=useContext(StateContext)



//const Transition = React.forwardRef(function Transition(props, ref) {
//    return <Slide direction="up" ref={ref} {...props} />;
//});

function saveDocumentOnClick(){

if (attach !=null){

//let x = dataURLtoFile(attach,attachtype)
//console.log(x)
//await save(attach, attachtype)
//const saveSync = require('save-file/sync')
}

}

function getHistory ()  {

    let req = {

        "orgName": userstate.teamName,
        "userName": userstate.userName,
        "peers" : ["peer0.sales.expleoFabric.com"],
        "channelName" : userstate.channelName,
        "chaincodeName" : "maincc",
        "fcn" : "getDocumentHistory",
        "args": [subject]
    }

//    const response =  invokeHistory(req,userstate.token);
//    setHistoryState(response.result)

history.push('/History')
};



function handleClickOpen ()  {

    let req = {

        "orgName": userstate.teamName,
        "userName": userstate.userName,
        "peers" : ["peer0.sales.expleoFabric.com"],
        "channelName" : userstate.channelName,
        "chaincodeName" : "maincc",
        "fcn" : "readDocument",
        "args": [documentstate.Key]
    }

    //const response =  invokeRead(req,userstate.token);
    //const shownDoc = response.result.Record
    const shownDoc = documentstate.Record
    setSubject(shownDoc.subject)
    setType(shownDoc.documentType)
    setSend(shownDoc.sender)
    setRec(shownDoc.receiver)
    setTime(shownDoc.creationDate+ " " +shownDoc.creationTime)
    setMod(shownDoc.lastModified)
    setBody(shownDoc.body)
    setComments(shownDoc.comments)

    setOpen(true);
};




function handleClose ()  {
    setOpen(false);
};

function handleModify(){

    let req = {

        "orgName": userstate.teamName,
        "userName": userstate.userName,
        "peers" : ["peer0.sales.expleoFabric.com"],
        "channelName" : userstate.channelName,
        "chaincodeName" : "maincc",
        "fcn" : "modifiyDocument",
        "args": [subject, attach, attachtype, body]
    }

    //let result = await invokeModify(req,userstate.token);
    //console.log(result)

setOpen(false)
}


function addComment(){

    let req = {

        "orgName": userstate.teamName,
        "userName": userstate.userName,
        "peers" : ["peer0.sales.expleoFabric.com"],
        "channelName" : userstate.channelName,
        "chaincodeName" : "maincc",
        "fcn" : "addComment",
        "args": [subject, userstate.userName, newComment ]
    }

    //let result = await invokeComments(req,userstate.token);
    //console.log(result)

setOpen(false)
}

const recordList = Documents.result.map(document => <ListItem button  onClick={ handleClickOpen }><Row>{document.Record}</Row></ListItem>);





    const classes = useStyles();

        return (
            <div style={{height:"85%",width:'100%',display:'flex',flexDirection:'column'}}>
                <List className={classes.root}>
                    {recordList}
                </List>

            <Dialog
            open={open}
            fullScreen
            onClose={handleClose}
            //TransitionComponent={Transition}
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
                <Button autoFocus color="inherit" onClick={handleModify}>
                save
                </Button>
            </Toolbar>
            </AppBar>

            <List>
            <ListItem>
            <ListItemText primary = "Subject : "  />
            <ListItemText primary = {subject}  />
            </ListItem>

            <ListItem>
            <ListItemText primary="Document Type : " />
            <ListItemText primary={type} />
            </ListItem>

            <ListItem>
            <ListItemText primary="Sender : " />
            <ListItemText primary={send} />
            <ListItemText primary="Receiver : " />
            <ListItemText primary={rec} />
            </ListItem>

            <ListItem>
            <ListItemText primary="Timestamp : "/>
            <ListItemText primary={time} />
            </ListItem>

            <ListItem>
            <ListItemText primary="Last Modified : " />
            <ListItemText primary={mod} />
            </ListItem>

            <TextField
            id="outlined-multiline-static"
            label="Body"
            multiline
            rows={10}
            defaultValue={body}
            variant="outlined"
            fullWidth
            onChange={(val) => {
                setBody(val.target.value);
                }}
            />

            <ListItem>
            <Button variant="contained"
            color="secondary"
            onClick={saveDocumentOnClick}
            >Review Attachment
            </Button>
            <input accept="*" className={classes.input} id="icon-button-file"
                    type="file"
                    onChange={(val) => {
                        //setFile(val.target.files[0]);
                        let tstFile =val.target.files[0]
                        var reader = new FileReader();
                        reader.readAsDataURL(tstFile);
                        reader.onload = function () {
                        let    base64=reader.result//base64encoded string
                            setAttach(base64)
                            setAttachType(tstFile.name)
                        //let x = dataURLtoFile(reader.result,file.name)
                            //console.log(x)
                        };
                        reader.onerror = function (error) {
                            console.log('Error: ', error);
                        };
                        }}
                        />
        <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
            <BackupIcon />
            </IconButton>
        </label>
            </ListItem>


            <Divider />
            <Typography variant="h5" gutterBottom>
            Comments
            </Typography>
            <Divider />

            <ListItem>
            <CommentSection>
            {comments}
            </CommentSection>
            </ListItem>

            <ListItem>
            <TextField
            id="outlined-full-width"
            label="New Comment"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            onChange={(val) => {
                setNewComment(val.target.value);
                }}
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={ addComment }>
            Add
            </Button>
            </ListItem>

            <ListItem>
            <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<HistoryIcon />}
            onClick={getHistory}
        >
            History
        </Button>
            </ListItem>

            </List>
        </Dialog>
            </div>
        )
}

const useStyles = makeStyles(theme => ({
    root: {
    width: "100%",
    height:"100%",
    backgroundColor: theme.palette.background.paper
    ,overflow: "auto"

    },
    appBar: {
        position: "relative"
        ,color:"primary"
    },
    title: {
        marginLeft: theme.spacing(4),
        flex: 1
    }
    ,
input: {
    display: 'none',
}
}));


export default DocumentList ;

export function invokeRead(body,token) {

    return new Promise((resolve) => {
        console.log("body: ",body)
        axios.get("http://localhost:4000/invoke",body,{ headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
            console.log(error)
            })
    })
}

export function invokeHistory(body,token) {

    return new Promise((resolve) => {
        console.log("body: ",body)
        axios.get("http://localhost:4000/invoke",body,{ headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
            console.log(error)
            })
    })
}

export function invokeModify(body,token) {

    return new Promise((resolve) => {
        console.log("body: ",body)
        axios.post("http://localhost:4000/invoke",body,{ headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
            console.log(error)
            })
    })
}

export function invokeComments(body,token) {

    return new Promise((resolve) => {
        console.log("body: ",body)
        axios.post("http://localhost:4000/invoke",body,{ headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
            console.log(error)
            })
    })
}


function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}