/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Link, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header-component/header-component';
import Sign_In_Up from './pages/sign-in-up/sign-in-up.components';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
      console.log(user);
    })
  }

  render(){
    return (
      <div>
        {/* Switch -> Routes */}
        <Header/>
         <Routes>
          <Route  path='/' element={<HomePage/>}/>
          <Route path='/hats' element={<HatsPage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/signin' element={<Sign_In_Up/>} />
          </Routes>
      </div>
    );
  }
  
}

  
export default App;
