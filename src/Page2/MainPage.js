import React,{useContext,useState } from "react";
import Appbar from "./components/Appbar";
import AppBar from "@material-ui/core/AppBar";
import Sidebar from "./components/Sidebar";
import DocumentList from "./components/DocumentList";
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TextField from "@material-ui/core/TextField";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Dialog from "@material-ui/core/Dialog";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import {StateContext} from '../StateProvider';
import axios from 'axios'
import {invokeRead} from './components/DocumentList'

const useStyles = makeStyles((theme) => ({
    rootDialog: {
        width: "100%",
        height:"100%",
        backgroundColor: theme.palette.background.paper
        ,overflow: "auto"

        },
        appBarDialog: {
            position: "relative"
            ,color:"primary"
        },
        titleDialog: {
            marginLeft: theme.spacing(4),
            flex: 1
        }
        ,
    inputDialog: {
        display: 'none',
    }
,
    root: {
    flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
    },
    search: {
    height: '50%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    },
    searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    inputRoot: {
    color: 'inherit',
    },
    inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
        width: '20ch',
        },
    },
    },
    button: {
    height:'60%'
    }
}));

function MainPage({history}) {


const [userstate,setUserState,documentstate,setDocumentState]=useContext(StateContext)


let req = {

    "orgName": userstate.teamName,
    "userName": userstate.userName,
    "peers" : ["peer0.sales.expleoFabric.com"],
    "channelName" : userstate.channelName,
    "chaincodeName" : "maincc",
	"fcn" : "getAllDocuments",
	"args" : []
}

//const allDocuments =  invokeAll(req,userstate.token);
const [allDocuments,setAllDocuments] = useState({"result":[]})

const [subject, setSubject] = useState();
const [type, setType] = useState();
const [sender, setSender] = useState();
const [receiver, setReceiver] = useState();
const [body, setBody] = useState();
const [attach, setAttach] = useState();
const [attachtype, setAttachType] = useState();

const [file, setFile] = useState();


const classes = useStyles();

//const Transition = React.forwardRef(function Transition(props, ref) {
//    return <Slide direction="up" ref={ref} {...props} />;
//});

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {

    //allDocuments =  invokeAll(req,userstate.token);
    setOpen(false);
};


async function handleClickSearch () {
    let req = {

        "orgName": userstate.teamName,
        "userName": userstate.userName,
        "peers" : ["peer0.sales.expleoFabric.com"],
        "channelName" : userstate.channelName,
        "chaincodeName" : "maincc",
        "fcn" : "readDocument",
        "args": [subject]
    }

    //const response =  invokeRead(req,userstate.token);
    //const shownDoc = response.result.Record
    const shownDoc = documentstate
    setAllDocuments(allDocuments.result.push(shownDoc))
await   console.log(allDocuments)

    };

async function handleSave () {


let req = {

    "orgName": userstate.teamName,
    "userName": userstate.userName,
    "peers" : ["peer0.sales.expleoFabric.com"],
    "channelName" : userstate.channelName,
    "chaincodeName" : "maincc",
    "fcn" : "createDocument",
    "args": [subject, type, sender, receiver, body,attach , attachtype]
}
    //let result = await invokeCreate(req,userstate.token);
    //console.log(result)

    //allDocuments =  invokeAll(req,userstate.token);


    console.log(req)

    setOpen(false);
};


return (

    <div style={{height:"100%",display:'flex'}}>
    <Appbar />

    <div className="listView">
    <Sidebar>
    {userstate}
    </Sidebar>
    <div style={{height:"100%",display:'flex',width:'100%',flexDirection:'column'}}>
        <div style={{display:'flex',width:'100%',flexDirection:'row', justifyContent:'space-between',height:'8%',backgroundColor:'#eeeeee',alignItems:'center'}}>

        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(val) => {
                setSubject(val.target.value);

                }}
            />
    <Button variant="outlined" color="secondary" onClick={ handleClickSearch }>
    Search
    </Button>
        </div>

        <Button
        variant="contained"
        color="secondary"
        size = "small"
        className={classes.button}
        startIcon={<NoteAddIcon />}
        onClick={handleClickOpen}
        >
        Create Document
        </Button>

        <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        //TransitionComponent={Transition}
    >
        <AppBar className={classes.appBarDialog}>
        <Toolbar>
            <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            >
            <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.titleDialog}>
            Create New Document
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
            save
            </Button>
        </Toolbar>
        </AppBar>

        <List>
        <ListItem>
        <TextField
        id="outlined-multiline-static"
        label="Subject"
        multiline
        placeholder="Subject..."
        variant="outlined"
        fullWidth
        onChange={(val) => {
        setSubject(val.target.value);
        }}
        />
        </ListItem>

        <ListItem>
        <TextField
        id="outlined-multiline-static"
        label="Type"
        multiline
        placeholder="Type..."
        variant="outlined"
        fullWidth
        onChange={(val) => {
            setType(val.target.value);
            }}
        />
        </ListItem>

        <ListItem  >
        <TextField
        id="outlined-multiline-static"
        label="Sender"
        multiline
        placeholder="sender"
        variant="outlined"
        fullWidth
        onChange={(val) => {
            setSender(val.target.value);
            }}
        />
        <TextField
        id="outlined-multiline-static"
        label="Receiver"
        multiline
        placeholder="receiver..."
        variant="outlined"
        fullWidth
        onChange={(val) => {
            setReceiver(val.target.value);
            }}
        />
        </ListItem>

        <TextField
        id="outlined-multiline-static"
        label="Body"
        multiline
        rows={10}
        placeholder="body..."
        variant="outlined"
        fullWidth
        onChange={(val) => {
            setBody(val.target.value);
            }}
        />

        <ListItem>
            <input
        accept="file"
        className={classes.inputDialog}
        id="contained-button-file"
        multiple
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

            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };

            }}
            />
        <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
        Upload Attachment
        </Button>
        </label>
        </ListItem>

        </List>
    </Dialog>

        </div>

        <div className= "HeadRow"  >
        <h3 style={{color:"white"}} className="subject" >Subject</h3>
        <h3 style={{color:"white"}} className="type" >Type</h3>
        <h3 style={{color:"white"}} className="creationDate" > Timestamp</h3>
        </div>

        <DocumentList>{allDocuments}</DocumentList>
    </div>

    </div>
    </div>


);
}

export function invokeCreate(body,token) {

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

export function invokeAll(body,token) {

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



export default MainPage;




