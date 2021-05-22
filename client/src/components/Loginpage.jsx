import React, { useState } from "react";
import { Divider, Container } from "@material-ui/core";
import Classnames from 'classnames'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "../App.css";
import { Link } from "react-router-dom";

import {motion} from 'framer-motion'
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import Menu from "./Menu";
import axios from 'axios'
const content={
  hidden:{
    opacity:0,
    x:"250vw"
  },
  visible:{
    opacity:1,
    x:"0"
  },
  transition:{
    type :'spring',
    damping: 10,
stiffness: 50
  },
}
const Loginpage =()=> {
  const [loginData ,setloginData] = useState({
    username:"",
    password:"",
    errors:{}
  });
  const onChange = (e) =>
  {
    const name= e.target.name;
    const value=e.target.value;
    setloginData({...loginData,[name]:value});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axios({
      url:"/api/auth/login",
      method:"POST",
      data:{
        username:loginData.username,
        password:loginData.password,
      }
    },config)
    .then(response=>{
      console.log(response)
      window.localStorage.setItem("authToken",response.data.token)
      localStorage.setItem("_id",response.data.user._id)
      alert("Successfully registered");
    })
    .catch(error=>{
      const message=error.response.data
      setloginData({...loginData,errors:message})

    })
  }
    return (
      <motion.div
      variants={content}
      intial="hidden"
      animate="visible"
      >
      <Menu />
      <div  
      
      style={{ color: "#63078f" ,marginTop:"10vh",width:"100vw"}} className=" container d-felx justify-content-centre  align-items-centre">
        <div className="app">
          <div className="i_con">
            <div className="icon_class">
            {loginData.errors.error&&<div className="card-title bg-danger p-2 text-centre">{loginData.errors.error}</div>}

              <PersonAddIcon fontSize="large" style={{ marginLeft: "40px" }} />
              <div className="text">Log In</div>
            </div>
          </div>

          <div className="row m-2">
          <form onSubmit={(e)=>onSubmit(e)} >
                                <div className="form-group p-1">
                                         <label >Username</label>
                                        <input 
                                        type="text" className={Classnames('form-control',{'has-error':loginData.errors.username})} 
                                        id="exampleInputUserName"
                                        name="username"
                                        placeholder="Username"

                                        value={loginData.username || ''}   
                                        onChange={(e) => onChange(e)}
                                        />
                                      {loginData.errors.username&& <span className="help-box red-text">{loginData.errors.username}</span>}
                                    </div>
          
                                    <div className="form-group p-1">
                                        <label >Password</label>
                                        <input type="password"
                                        className={Classnames('form-control ',{'has-error':loginData.errors.password })}
                                         id="exampleInputPassword1"
                                          placeholder="Password"
                                          name="password"
                                          value={loginData.password || ''}
                                          onChange={(e)=>onChange(e)}
                                          />
                                 {loginData.errors.password&& <span className="help-box red-text">{loginData.errors.password}</span>}
                                    </div> 

          
                     <FormControlLabel
                 control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    name="checkedI"
                  />
                }
                label="Remember me"
              />

                                    <button type="submit" className="btn btn-primary w-100 mt-3">Log In</button>
                                    </form>
          </div>
          <Divider variant="middle" />
          <p className="text-center">
            <Link to="/signup">Don't have an Account</Link>
          </p>
        </div>
      </div>
      </motion.div>
    );
  
              }


export default Loginpage;
