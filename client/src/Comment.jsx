import React from "react";
import { Button, Collapse, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import MainComment from "./MainComment";
import SendIcon from "@material-ui/icons/Send";
import axios from 'axios'
function Comment(props) {
  console.log(props)
  const [open, setOpen] = useState(false);
  const [CommentLists, setCommentLists] = useState([])
  const post = {
    postId: props.postId
}

  const onClick= (e) =>{
    setOpen(!open)
   
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post(`/api/comment/getComments`, post,config)
    .then(response => {
      console.log(response)
        if (response.data.success) {
            setCommentLists(response.data.comments)
        } else {
            alert('Failed to get comments Info')
        }
    })
    .catch(error=>console.log(error.response.data))
  
  }
  const updateComment = (newComment) => {
    setCommentLists(CommentLists.concat(newComment))
}
  return (
    <>
    
      <Button
        id="footerbtn"
        onClick={e=>onClick(e)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-chat-square-text"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <MainComment  CommentLists={CommentLists} postId={props.postId} refreshFunction={updateComment} />
        </div>
      </Collapse>
    </>
  );
}

export default Comment;