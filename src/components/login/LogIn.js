// import { Button, Card, CardMedia, TextField, Typography } from '@mui/material'
// import React from 'react'
// import axios from "axios"
// import { useHistory, Link } from "react-router-dom"
// import { useState } from 'react';

// function LogIn() {
//     const history=useHistory();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:8000/",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     history("/home",{state:{id:email}})
//                 }
//                 else if(res.data=="notexist"){
//                     alert("User have not sign up")
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details")
//                 console.log(e);
//             })

//         }
//         catch(e){
//             console.log(e);

//         }

//     }
//     return (
        // <div style={{backgroundColor:'#ffe6e6'}} className='text-center mt-2'>
        //     <Card className='m-4 col-5 d-inline-block col-5'>
        //         <CardMedia
        //             component="img"
        //             height="200"
        //             image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png"
        //             alt="green iguana"
        //         />
        //         <div className='col-10 m-auto mt-4'>
        //             <Typography className='d-flex justify-content-start'>
        //                 <p style={{ fontSize: '20px' }}>  <b style={{ fontSize: '25px', color: '#505050', marginRight: '5px' }}>Login</b>  or
        //                     <b style={{ fontSize: '25px', color: '	#505050', marginLeft: '6px' }}>Signup</b></p>
        //             </Typography>
        //             <TextField variant='outlined'
        //                 label="Mobile Number"
        //                 className='d-flex justify-content-start mt-2'
        //                 type={'number'} />

        //             <Typography className='d-flex justify-content-start mt-4'>
        //                 <p style={{ fontSize: '15px',  color: '#707070', textAlign:'left' }}> By continuing , I agree to the 
        //                     <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Terms of use</b> &
        //                     <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Privacy Policy</b></p>
        //             </Typography>

        //             <Button
        //             style={{backgroundColor:'#ff0066', color:'white'}}
        //             className='col-12'
        //             ><b style={{fontSize:'20px'}}>CONTINUE</b>
        //             </Button>

        //             <Typography className='d-flex justify-content-start mt-4'>
        //                 <p style={{ fontSize: '15px',  color: '#707070', textAlign:'left' }}> Have trouble logging in ? 
        //                     <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Get help</b></p>
        //             </Typography>
        //         </div>
        //     </Card>
        // </div>
//     )
// }

// export default LogIn


import { Button, Card, CardMedia, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"


function Login() {

    const history=useHistory();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:2000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("Login  Sucessfully")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /> <br/> <br/>
                <label htmlFor="email">Password</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /> <br/><br/>
                
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            {/* <br />

            <Link to="/signup">Signup Page</Link> */}

        </div>
        

        

        
    )
}

export default Login