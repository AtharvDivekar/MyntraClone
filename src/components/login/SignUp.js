import React, { useEffect, useState } from "react"
import axios from "axios"
import './SignUp.css';
import { useHistory, Link } from "react-router-dom"


function Login() {
    // const history=useHistory();

    // const [email,setEmail]=useState('')
    // const [password,setPassword]=useState('')

    // async function submit(e){
    //     e.preventDefault();

    //     try{

    //         await axios.post("http://localhost:2000/signup",{
    //             email,password
    //         })
    //         .then(res=>{
    //             if(res.data=="exist"){
    //                 alert("User already exists")
    //             }
    //             else if(res.data=="notexist"){
    //                 history("/home",{state:{id:email}})
    //             }
    //         })
    //         .catch(e=>{
    //             alert("Signup Successfully")
    //             console.log(e);
    //         })

    //     }
    //     catch(e){
    //         console.log(e);

    //     }

    // }

    const[passwords, setPassword] = useState('');
    const[username, setUsername] = useState('');

    function handleChange2(event) {
        if(event.target.name === "email") {
            var tempusername = event.target.value;
            setUsername(tempusername);
        }
        else if (event.target.name === "password") {
            var temppassword = event.target.value;
            setPassword(temppassword);
        }

    }

    const [isUserRegistered, setisUserRegistered] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);


    const handleOnSubmit = async (e) => {
      if(isUserRegistered){
        var inusername = document.getElementById('email').value;
        var userpass = document.getElementById('password').value;
        console.log(" frontend : " + inusername + " - " + userpass);
        
           e.preventDefault();
           let result = await fetch(
           'http://localhost:5000/auth', {
               method: "post",
               body: JSON.stringify({ username : inusername,password : userpass }),
               headers: {
                   'Content-Type': 'application/json'
               }
           })
           result = await result.json();
          console.log(result.code);
           if(result.code === 1){
                alert("Successfully Logged in");
                setisLoggedIn(true);
                window.open("http://localhost:3000/adminpage","_self");
           }else if(result.code === 0){
                alert("Username or password does not match");
           }else if(result.code === 4){
                {
                  console.log("registering");
                  e.preventDefault();
                  console.log("email : ",username,"pass : ", passwords);
                  let result = await fetch(
                  ('http://localhost:5000/register'), {
                      method: "post",
                      body: JSON.stringify({ passwords,username }),
                      headers: {
                          'Content-Type': 'application/json'
                      }
                  })
                  alert("Successfully Registered and Logged in !");
                  setisLoggedIn(true);
                  window.open("http://localhost:3000/adminpage","_self");
                  setisUserRegistered(true);
                  result = await result.json();
                  console.log(result);
                  console.log(result.error);
                } 
           }
          }
        }


    return (
        <div className="login">

            <h1>Myntra Registration</h1>

            {/* <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form> */}

<form  method="post">
                                <div>
                                    <input className="log-input container"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email or Username"
                                        value={username}
                                        onChange={handleChange2}
                                    />
                                </div>
                                <div>
                                    <input className="log-input container"
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={passwords}
                                        onChange={handleChange2}
                                    />
                                </div>
                                <button className="log-input sub-btn" type="submit" onClick={handleOnSubmit}>
                                    SignIn/SignUp
                                </button>
                            </form>

            <br />
            <p>OR</p>
            {/* <br />

            <Link to="/">Login Page</Link> */}

        </div>
    )
}

export default Login