import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import HistoryListItem from './HistoryListItem';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';


function HistoryPage() {

const classes = useStyles();

const documents = {
    "result": [
        {
            "TxId": "1051ce0cbd9844b018bdbfd91c369ea8bc9eb3adabd523da33d98a1ccd80edcd",
            "Value": {
                "objectType": "document",
                "subject": "IBM",
                "documentType": "document",
                "sender": "Peer1",
                "receiver": "Peer2",
                "creationDate": "06-06-2020",
                "creationTime": "3:41:52 PM",
                "body": "new",
                "attachment": "newayweywtwype",
                "attachmentType": "newBOdy",
                "confirmationState": "",
                "modified": true,
                "lastModified": "2020-06-07 8:53:28 AM",
                "comments": [
                    {
                        "comment": "TEST COMMENT!",
                        "user": "newUser"
                    },
                    {
                        "comment": "new comment!",
                        "user": "peer1"
                    }
                ]
            },
            "Timestamp": "2020-06-07 08:57:09.072 +0000 UTC",
            "IsDelete": "false"
        },
        {
            "TxId": "335091938bf912921a1ef9343cf060518c4d9c18b68550635e5683f9df8cb54a",
            "Value": {
                "objectType": "document",
                "subject": "IBM",
                "documentType": "document",
                "sender": "Peer1",
                "receiver": "Peer2",
                "creationDate": "06-06-2020",
                "creationTime": "3:41:52 PM",
                "body": "new",
                "attachment": "newayweywtwype",
                "attachmentType": "newBOdy",
                "confirmationState": "",
                "modified": true,
                "lastModified": "2020-06-07 8:53:28 AM",
                "comments": [
                    {
                        "comment": "TEST COMMENT!",
                        "user": "newUser"
                    }
                ]
            },
            "Timestamp": "2020-06-07 08:56:49.193 +0000 UTC",
            "IsDelete": "false"
        },
        {
            "TxId": "af5e5be979d29954274fda984c7d41515cb32b98ffda3602d11b544b1709eabc",
            "Value": {
                "objectType": "document",
                "subject": "IBM",
                "documentType": "document",
                "sender": "Peer1",
                "receiver": "Peer2",
                "creationDate": "06-06-2020",
                "creationTime": "3:41:52 PM",
                "body": "new",
                "attachment": "newayweywtwype",
                "attachmentType": "newBOdy",
                "confirmationState": "",
                "modified": true,
                "lastModified": "2020-06-07 8:53:28 AM",
                "comments": null
            },
            "Timestamp": "2020-06-07 08:53:28.336 +0000 UTC",
            "IsDelete": "false"
        },
        {
            "TxId": "e255170519342e51025eaff86784edc0a551da76a7b6956f09eef18a11efe788",
            "Value": {
                "objectType": "document",
                "subject": "IBM",
                "documentType": "document",
                "sender": "Peer1",
                "receiver": "Peer2",
                "creationDate": "06-06-2020",
                "creationTime": "3:41:52 PM",
                "body": "new",
                "attachment": "newayweywtwype",
                "attachmentType": "newBOdy",
                "confirmationState": "",
                "modified": true,
                "lastModified": "2020-06-07 8:51:19 AM",
                "comments": null
            },
            "Timestamp": "2020-06-07 08:51:19.274 +0000 UTC",
            "IsDelete": "false"
        },
        {
            "TxId": "f322071b6b9c27d5e6dcd5223ce8828f67d56ff8683d178ec0f21d99239e7387",
            "Value": {
                "objectType": "document",
                "subject": "IBM",
                "documentType": "document",
                "sender": "Peer1",
                "receiver": "Peer2",
                "creationDate": "06-06-2020",
                "creationTime": "3:41:52 PM",
                "body": "newSSSSSSSSSSSSSSSSAtt",
                "attachment": "AttachmentTyesayweywtwype",
                "attachmentType": "BrandNewBody",
                "confirmationState": "",
                "modified": true,
                "lastModified": "2020-06-07 8:50:51 AM",
                "comments": null
            },
            "Timestamp": "2020-06-07 08:50:51.037 +0000 UTC",
            "IsDelete": "false"
        },
        {
            "TxId": "23583cabacb8b1a0cb21837e065f72f1b5510a0d200067afb8b30d45d3538b9d",
            "Value": {
                "objectType": "document",
                "subject": "IBM",
                "documentType": "document",
                "sender": "Peer1",
                "receiver": "Peer2",
                "creationDate": "06-06-2020",
                "creationTime": "3:41:52 PM",
                "body": "TestBody",
                "attachment": "testAttachment",
                "attachmentType": "TestattachType",
                "confirmationState": "",
                "modified": false,
                "lastModified": "",
                "comments": null
            },
            "Timestamp": "2020-06-06 15:41:52.308711569 +0000 UTC",
            "IsDelete": "false"
        }
    ],
    "error": null,
    "errorData": null
}

const recordList = documents.result.map(document => <ListItem > <HistoryListItem>{document}</HistoryListItem> </ListItem>);

    return (
        <div style ={{height:'100%', width:'100%', display:'flex' , flexDirection:'column'}}>

        <AppBar className={classes.appBarDialog}>
        <Toolbar>
            <Typography variant="h6" className={classes.titleDialog}>
            Document History
            </Typography>
        </Toolbar>
        </AppBar>

        <List>
        {recordList}
        </List>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

        appBarDialog: {
            position: "relative"
            ,color:"primary"
        },
        titleDialog: {
            marginLeft: theme.spacing(4),
            flex: 1
        }
}));


export default HistoryPage ;