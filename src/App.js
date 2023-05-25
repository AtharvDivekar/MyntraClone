import React, { useContext,useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/body/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import MenBody from './components/Men.js/MenBody';
import WomenBody from './components/women/WomenBody';
import KidsBody from './components/kids/KidsBody';
import HomeAndLiving from './components/homeAndLiving/HomeAndLiving';
 
// import LogIn from './components/login/LogIn';
import SignUp from './components/login/SignUp';
import WishList from './components/wishlist/WishList';
import FilterMen from './components/filter/FilterMen';

 


function App() {

  // const [form, setForm] = useState({});
  // const [users, setUsers] = useState([]);

  // const handleForm = (e)=>{
  //   setForm({
  //     ...form,
  //     [e.target.name] : e.target.value
  //   })
  // }

  // const handleSubmit = async (e)=>{
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:5000/demo 2',{
  //     method:'POST',
  //     body:JSON.stringify(form),
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   })
  //   const data = await response.json();
  //  console.log(data);
  // }

  // const getUsers = async ()=>{
  //   const response = await fetch('http://localhost:5000/demo 2',{
  //     method:'GET',
  //   })
  //  const data = await response.json();
  //  setUsers(data);
  // }

  // useEffect(()=>{
  //   getUsers();
  // },[])

  return (
    <Router>
      <div className="App">

        <Navigation />
        <Route exact path={'/'} component={Home} />
        <Route path={'/men'} component={MenBody} />
        <Route path={'/women'} component={WomenBody} />
        <Route path={'/kids'} component={KidsBody} />
        <Route path={'/homeandliving'} component={HomeAndLiving} />
         
        {/* <Route path={'/login'} component={LogIn} /> */}
        <Route path={'/login'} component={SignUp} />
        <Route path={'/wishlist'} component={WishList} />
        <Route path={'/filtermen'} component={FilterMen} />

        <Footer />
        <hr />
      </div>
    </Router>
  );
}

export default App;
