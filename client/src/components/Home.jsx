import React,{useEffect,useState} from "react";
import axios from 'axios'
// import Header from "../Header";
import Slide from "../Slide";
import Card from "../Card";
import Menu from "./Menu";
  const Home = () => {
    const [Post, setPost] = useState([]);
    useEffect(()=>{
      fetchPost()
    },[]);
    const fetchPost = () => {
      axios.get(`/api/user/getPost`)
          .then(response => {
              if (response.data.success) {
                console.log(response.data.user)
                 setPost(response.data.user)
              } else {
                  alert('Failed to get Post')
              }
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
        <h5 className="text-capitalize " id="recent_post">
          Recent Posts
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
export default Home;
