import React,{useEffect,useState} from "react";
// import Header from "../Header";
import Slide from "../Slide";
import Card from "../Card";
import Menu from "./Menu";
import {useHistory} from 'react-router'
import axios from "axios";
const Collegetag = (props) => {
  const history=useHistory()
  const [Post, setPost] = useState([]);

  const college=props.location.data&&props.location.data.name;
  if(!college)
    history.push('/')
    useEffect(() => {
      fetchMovies(college)
      //eslint-disable-next-line
  }, [college]);
  const fetchMovies = (college) => {
    const data={college}
    console.log(college)
 
    axios.post("/api/user/search",data)
   .then(response=>{
     if(response.data.user.length===0)
     {
       alert("There is no such college")
      history.push('/')
     }
    else if (response.data.success) {
      setPost(response.data.user)
      console.log(Post)
   } else {
       alert('Failed to get Post')
   }
   })
   .catch(error=>{
     console.log(error)
   })
}

  return (
    <>
      {/* <Header /> */}
      <Menu />

      <br />
      <Slide />
      <hr />
      <div className="container">
        <h5 className=" " id="recent_post">
         {college}
        </h5>
      </div>
      {
       Post && Post.map((user) => (
        <Card  text={user.text} tag={user.tag} name={user.username} postId={user._id} vote={user.likes.length}/>
  ))
      }
    </>
  );
};
export default Collegetag;
