import React from 'react'
import "../MainPage"

function Row(Document) {
    Document =Document.children

    let subject = Document.subject;
    let creationDate = Document.creationDate;
    let type = Document.documentType;
    return (
        <div className= "row"  >
        <div style={{color:"white"}}>
        <i class="fas fa-file-alt" style={{fontSize:"25px"}}></i>
        </div>

        <h3 style={{color:"white"}} className="subject" >{subject}</h3>
        <h3 style={{color:"white"}} className="type" >{type}</h3>
        <h3 style={{color:"white"}} className="creationDate" > {creationDate}</h3>

        </div>
    )
}


export default Row ;