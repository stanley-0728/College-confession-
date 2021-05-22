import { Divider, Container } from "@material-ui/core";
import React,{useState} from "react";
import Classnames from 'classnames'
import "../App.css";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import axios from 'axios'
import Menu from "./Menu";
import {motion} from 'framer-motion'
const Signup = () => {
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
    const [loginData ,setloginData] = useState({
        username:"",
        password:"",
        text:"",
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
          url:"/api/auth/register",
          method:"POST",
          data:{
            username:loginData.username,
            password:loginData.password,
            text:loginData.text
          }
        },config)
        .then(response=>{
          console.log(response.data)
          alert("Successfully registered");
        })
        .catch(error=>{
          const message=error.response.data
          console.log(message)
                setloginData({...loginData,errors:message})
        })
      }
  return (
    <>
      <Menu />
      <motion.div
      variants={content}
      intial="hidden"
      animate="visible"
      style={{ color: "#63078f" ,marginTop:"10vh"}} className=" container w-100  d-felx justify-content-centre  align-items-centre">
        <div className="app">
          <div className="i_con">
            <div className="icon_class">
            {loginData.errors.error&&<div className="card-title bg-danger p-2 text-centre">{loginData.errors.error}</div>}
              <PersonAddIcon fontSize="large" style={{ marginLeft: "40px" }} />
              <div className="text">Sign Up</div>
            </div>
          </div>

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

                                    <div class="form-group">
    <label for="exampleFormControlTextarea1">About</label>
    <textarea
     className={Classnames('form-control',{'has-error':loginData.errors.text})}
     id="exampleFormControlTextarea1"
      rows="3"
      name="text"
      value={loginData.text}
      onChange={e=>onChange(e)}
      >
    </textarea>
    {loginData.errors.text&& <span className="help-box red-text">{loginData.errors.text}</span>}

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

                                    <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
                                    </form>
          </div>
          <Divider variant="middle" />
          <p className="text-center">
            <Link to="/login">Already have an Account</Link>
          </p>
      </motion.div>
    </>
  );
};
export default Signup;