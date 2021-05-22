import React,{useState} from "react";
import axios from 'axios'

const PublishTag = (props) => {
  const {text} = props;
  let message;
  const [tag,settag] = useState("");
if(text.length==0)
  message="";
  else if(text[0].props.children[0].props)
  message=text[0].props.children[0].props.children[0]
else
message=text[0].props.children[0]
console.log(text)
  const onClick = (e) => {
    e.preventDefault();
const headers={
  "Content-Type":"application/json",
  Authorization:`Bearer ${localStorage.getItem("authToken")}`
}
const variable={message,tag}
    axios.post(
      "/api/user/savePost",
     variable,
      {headers}
  )
    .then(response => {
     if(response.data.success)
     {
       console.log(response)
       props.onChange(true)
      props.onSet("Successfully Saved Your Post");
     }
     else {
       alert("Failed to save your Post")
       props.onError(response.data.error);

     }
    })  .catch(error =>{
      console.log(error.response)
       props.onError(error.response&&error.response.data.error||"");
    })
   
  
  }
  
  
  return (
    <>
      <div>
        <div class="d-flex justify-content-end mt-1" id="publish">
        <div className="ui left icon right labeled input">
      <input type="text" placeholder="Enter college name" id="enterTag"  onChange={(e) => settag(e.target.value)}/>
      <i aria-hidden="true" className="tags icon"></i>
     <div className="ui tag label label" id="addTag">
       Add Tag
      </div>
        </div>
         <button className="btn btn-outline-success" id="search" type="submit" onClick ={(e)=> onClick(e)}>
            Publish
          </button>
        </div>
      </div>
    </>
  );
};
export default PublishTag;
