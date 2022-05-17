// css
import styled from 'styled-components';
import * as pallette from '../../styled/ThemeVariables.js';

// react-router
import { Link } from 'react-router-dom';

// images
import Icon from '../../assests/calculator03d356.png';
import Hamburger from '../../assests/menu4CAF50.png';

export const Nav = () => {

  function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

  return (
    <StyledNav>
      <div className="logo-container">
        <img src={Icon} alt="" />
        <h1 id="logo">Loanulator</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className='dropbtn'>Calculators</button>
          <div className="dropdown-content">
            <Link to="/mortgage">Mortgage</Link>
            <Link to="/auto">Auto Loan</Link>
            <Link to="/compound">Compound Interest</Link>
            <Link to="/budget">Budget</Link>
          </div>
        </div>
      </div>
      <div id="myNav" className="overlay">
        <button onClick={closeNav}>&times;</button>
        <div className="overlayContent" onClick={closeNav}>
          <Link to="/">Home</Link>
          <Link to="/mortgage">Mortgage</Link>
          <Link to="/auto">Auto Loan</Link>
          <Link to="/compound">Compound Interest</Link>
          <Link to="/budget">Budget</Link>
        </div>
      </div>
      <img id='hamburger' src={Hamburger} onClick={openNav} alt="hamburger menu"/>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 10vh;
  .logo-container {
    display: flex;
    align-items: baseline;
    h1 {
      font-size: 30px;
      color: white;
      @media (max-width: 850px){
        font-size: 20px;
      }
    }
    img {
      width: 35px;
      @media (max-width: 850px){
       width: 20px;
      }
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
      @media (max-width: 850px){
      display: none;
    }
    a {
      font-size: 18px;
      font-weight: 600;
      color: rgb(255, 255, 255);
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }

  .dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
      display: none;
      position: absolute;
      background-color: #ffffff;
      min-width: 200px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-size: 16px;
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
        background-color: #03d35673;
      }
    }
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
  .overlay {
    height: 100%;
    width: 0;
    position: fixed; 
    left: 0;
    top: 0;
    background-color: rgb(0,0,0); 
    overflow-x: hidden; 
    transition: 0.5s;
    z-index: 99; 
    button {
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 60px;
      color: ${pallette.accentColor};
      background: transparent;
      border: none;
      cursor: pointer;
      &:hover, &:focus {
        transition: 0.3s;
        transform: scale(1.1);
      }
    }
    .overlayContent {
      position: relative;
      top: 10%; 
      width: 80%;
      margin: auto;
      margin-top: 30px;
      z-index: 99;
      a {
        display: flex;
        justify-content: center;
        font-size: 2em;
        color: white;
        margin: 20px;
        transition: 0.3s;
        font-size: 3em; 
        &:hover, &:focus {
          color: ${pallette.accentColor};
          transition: 0.3s;
          text-decoration: underline;
        }
        @media (max-width: 850px){
          font-size: 24px;
          text-align: center;
        }
      }
    } 
  }
  #hamburger {
    cursor: pointer;
    display: none;
    width: 40px;
    height: 30px;
    &:hover, &:focus {
      transition: 0.3s;
      transform: rotateZ(10deg);
    }
    @media (max-width: 850px){
      display: block;
    }
    @media (max-width: 750px){
      width: 30px;
    }
  }
`;
