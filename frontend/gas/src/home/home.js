import React from 'react';
import logo from './gas.png';
import './App.css';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Link,Route,Router } from 'react-router-dom';
import LoginForm from './login';

class HomePage extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Link to="/login">
          <Button type="primary" size="large" block>
            Login
            </Button>
         </Link>
        <Button type="primary" size="large" block>
          SignUp
        </Button>
        <Button type="danger" block>
          Forgot Password?
      </Button>
                </div>      
                </header>
  
</div>
  );
}
}

export default HomePage;
