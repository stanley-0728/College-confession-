  
import React,{useEffect,useState} from "react";
import Card from '../Card'
import {useHistory} from 'react-router'
import axios from 'axios'
const Profilepage = () => {
  const [Post, setPost] = useState([]);
  const history=useHistory()
  const onSubmit=(e)=>{
    e.preventDefault()
    localStorage.clear();
    history.push("/home")
  }
  const auth=localStorage.getItem("_id")
  const [data,setname] =useState({})
useEffect(()=>{
axios.post("api/user/myprofile",{auth})
.then(response=>{
  setname(response.data.user[0])
  setPost(response.data.post)
})

},[])
  return (
    <>
      <div className="d-flex container justify-content-end p-2">
      <button className="btn "     style={{ color: "#63078f", backgroundColor: "white",paddingLeft:"10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <i class="icon-edit"></i> Edit{" "}
          </button>

        <button
          classname="btn  "
          style={{ color: "#63078f", backgroundColor: "white" }}
          onClick={e=>onSubmit(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          <i class="icon-edit"></i> Logout
        </button>
      </div>
      <div className="container">
        <div className="container" style={{ marginBottom: "4px" }}>
          <h3 className="text-capitalize" style={{ fontFamily: "Roboto" }}>
            My Profile
          </h3>
        </div>
        <div
          class="card"
          style={{ backgroundColor: "#63078f", color: "white" }}
        >
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                class="rounded-circle"
                width="150"
                style={{ border: "0.1px solid white", padding: "4px" }}
              />
              <div class="mt-3">
                <h4 style={{ fontFamily: "Roboto" }}>{data.username}</h4>
                {/* <p class="text-secondary mb-1">Full Stack Developer</p>
                <p class="text-muted font-size-sm">
                  Bay Area, San Francisco, CA
                </p> */}
             {data.text}
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container" style={{ marginBottom: "4px" }}>
          <h3 className="text-capitalize" style={{ fontFamily: "Roboto" }}>
            My Posts
          </h3>
        </div>
          <div class="container " style={{ marginTop: "5px" }}>
                  <div class="row col-lg-6">
    
                  
                     {
        
                    Post && Post.map((user) => (
          <Card  text={user.text} tag={user.tag} name={user.username} postId={user._id} vote={user.likes.length}/>
        
  ))
      }
    
                  </div>
          </div>
          <div class="col-md" style={{ marginTop: "5px" }}></div>
    </>
  );
};
export default Profilepage;