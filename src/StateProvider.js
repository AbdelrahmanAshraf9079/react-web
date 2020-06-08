import React, { useState, createContext } from 'react'


export const StateContext = createContext()

const intialUserState = {
        "userName" : null,
        "teamName" : null,
        "channelName": null,
        "token":null
        ,

    }

const intialDocumentState = {
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
    }

const StateProvider = ({children}) => {
    //Will act as the default value in case user clears filters (search,sort,filter)

const [ userstate, setUserState ] = useState(intialUserState);
const [ documentstate, setDocumentState ] = useState(intialDocumentState);
const [ historystate, setHistoryState ] = useState([]);
    return (
        <StateContext.Provider value= {[ userstate, setUserState,documentstate, setDocumentState, historystate, setHistoryState ]} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider ;