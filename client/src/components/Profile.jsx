import React from "react";
import Menu from "./Menu";
import Profilepage from "./Profilepage";
const Profile = ({history}) => {
  if(!localStorage.getItem("authToken"))
  {
    history.push("/login")
    alert("Please Login")
  }
  return (
    <>
      <Menu />
      <hr />
      <Profilepage />
    </>
  );
};
export default Profile;