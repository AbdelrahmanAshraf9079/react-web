import React from 'react'

function Sidebar(user) {
    user = user.children;
    let userName = user.userName;
    let orgName = user.teamName;
    let channel = user.channelName ;
    return (
        <div className="sideBar" >

            <div className='userIcon'>
            <i class="fas fa-user-tie" style={{fontSize:'60px'}}></i>
            </div>
            <h3 style={{fontFamily:' courier,arial,helvetica'}}> User: {userName} </h3>

            <br></br>
            <div className='userIcon' >
            <i class="fas fa-sitemap" style={{fontSize:'60px'}} ></i>
            </div>
            <h3 style={{fontFamily:' courier,arial,helvetica'}}> Organization: {orgName}   </h3>

            <br></br>
            <div className='userIcon' >
            <i class="fas fa-project-diagram" style={{fontSize:'60px'}}></i>
            </div>
            <h3 style={{fontFamily:' courier,arial,helvetica'}}> Channel: {channel}  </h3>
        </div>
    )
}

export default Sidebar ;