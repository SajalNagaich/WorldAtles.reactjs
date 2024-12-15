import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "../pages/login.module.css";
import toast from 'react-hot-toast';
import {Link, useNavigate } from 'react-router-dom';

const Login = () => {

    let [loginuser,setLoginUser]=useState({
        useremail:"",
        userpassword:""
    })

    let [allUser,setAllUser]= useState([]);

    let navigate = useNavigate();

    let handleChange=(e)=>{
        const [name, value]= e.target;
        setLoginUser({...loginuser,[name]:value});
        console.log(loginuser);
    }

    useEffect(()=>{
        async function fetchRegister(){
            let {data} = await axios.get("http://localhost:8282/getallUser");
            console.log(data);
            setAllUser(data);
        }
        fetchRegister();
    },[])

    let loginSubmit=(e)=>{
        e.preventDefault();
        let authUser = allUser.find((user)=>{
            return (user.useremail === loginuser.useremail &&
                user.userpassword === loginuser.userpassword )
        });
        console.log(allUser);

        if(authUser){
            toast.success("Login Successful")
            navigate("/login")
        }else{
            toast.error("Your email password is incorrect")
        } 
    };

  return (
    <>
        <div>
            <form action="">
                <div>
                <input type="text" required placeholder='Enter email' name='useremail' value={loginuser.useremail} onChange={handleChange} /><br />
                </div>

                <div>
                <input type="password" required placeholder='Enter password' name='userpassword' value={loginuser.useremail} onChange={handleChange} />
                </div>

                <div>
                    <button className={style.loginbtn} type='submit' onClick={loginSubmit}>Login</button>
                </div>

                <div>
                    <Link className={style.loginbtn} onClick={()=>{
                        navigate("/register")
                    }}>Register</Link>
                </div>
            </form>
        </div>
    
    </>


  )
}

export default Login