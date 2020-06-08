import React from 'react'

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from '@material-ui/core/Typography';


function CommentSection(Comments) {

    Comments  =  [
        {
        "user" : "Abdelrahamn ",
        "comment" : "hello!"
    }
    ,
    {
        "user" : "Billy ",
        "comment" : "HI"
    }
    ,
    {
        "user" : "Rami ",
        "comment" : "Test"
    }
    ];

    const commentList = Comments.map(comment =>

        <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt={comment.user} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        primary={comment.user}
        secondary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"

                color="textPrimary"
            >
                {comment.comment}
            </Typography>
            </React.Fragment>
        }
        />
    </ListItem>
        );

    return (
        <List>
        {commentList}

        </List>
    )
}


export default CommentSection ;