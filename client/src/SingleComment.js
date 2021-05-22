import React, { useState } from 'react'
import { Comment } from 'antd';

import Axios from 'axios';
function SingleComment(props) {
    console.log(props)
  
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)
    const openReply = () => {
        setOpenReply(!OpenReply)
    }


    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
        const variables = {
            writer: localStorage.getItem('_id'),
            postId: props.postId,
            responseTo: props.comment._id,
            content: CommentValue
        }


        Axios.post(`/api/comment/saveComment`, variables,config)
            .then(response => {
                if (response.data.success) {
                    setCommentValue("")
                    setOpenReply(!OpenReply)
                    props.refreshFunction(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
            .catch(error=>   alert('Failed to save Comment'))
    }

    const actions = [
        <span onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]
    console.log(props.comment.writer.username)

    return (
        <div>
            <Comment
             actions={actions}
                author={<h4>{props.comment.writer&&props.comment.writer.username}</h4>}
                content={
                    <p>
                        {props.comment.content}
                    </p>
                }
            ></Comment>


            {OpenReply &&
                <form className="d-flex px-1 py-1 mt-4" onSubmit={onSubmit} >
                <input 
                className="form-control me-2"
                 type="search"
                  aria-label="Search"
                  onChange={handleChange}
                  value={CommentValue}
                  placeholder="write some comments"
                   
                  />
                <button class="btn btn-outline-primary " type="submit"  onClick={onSubmit}>Submit</button>
              </form>
        
            }

        </div>
    )
}

export default SingleComment