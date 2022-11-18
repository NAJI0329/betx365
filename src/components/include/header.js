import React, { useState } from 'react';

import "../../assets/css/include/header.css";
import logo from "../../assets/img/logo.png";
import oneClick from "../../assets/img/click.gif"
import { ArrowRight } from 'react-bootstrap-icons';
import { GearFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons"

import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';  

function Header(props) {
  return (
    <header>
      <div className='header-user'>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <img src={logo} />
            <div class="search-wrap" >
              <div>
                <input class="search-input input-form" type="text" onkeyup="searchEventLogout()" placeholder="Search Events" />
              </div>
            </div>
            {/* <Navbar.Toggle /> */}
            <Navbar.Collapse className="justify-content-end">
              <PersonFill style={{color:"white",marginRight:'4px'}} />
              <div>
                <input className='input-form' type="text" placeholder="Username" />
              </div>
              <div>
                <input className='input-form' type="text" placeholder="Password" />
              </div>
              <div>
                <span id="loginBoxAuthenticateImage" className='random-validation'>4023</span>
                <input className='input-form' type="text" placeholder="Validation" />
              </div>
              <button type="submit" class="login-btn">Login <ArrowRight/>
              </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='header-navbar'>
        <Navbar collapseOnSelect expand="lg">
          <Container >
            <div className='link-container'>
              <a className='nav-link link-text'>Home</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>In-Play</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>Multi Markets</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>Cricket</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>Soccer</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>Tennis</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>IPL Winner</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>Casino</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>Result</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>Binary</a>
            </div>
            <div className='link-container'>
              <a className='nav-link link-text'>MT5</a>
            </div>
            {/* <Navbar.Toggle /> */}
            <Navbar.Collapse className="justify-content-end">
             <span className='link-text'><span className='timezone link-text'>Time Zone :</span>  GMT+1:0</span> 
             <a class="link-text one-click ">
                <div className='check-box'></div>
                one click bet
              </a>
              <span className='link-text setting-text'> Setting <GearFill /></span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;