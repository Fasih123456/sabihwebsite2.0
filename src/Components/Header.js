import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import PageOne from './PageOne';
import Navigation from './Navigation';

const Header = (props) =>{
    const PageTwo = () => {
        return (
          <div>
            PageTwo
            <Link to="/">navigate to page Two</Link>
          </div>
        )
      }

    return (
    <div>
        <div class="ui large top fixed hidden menu">
            <div class="ui container">
            <a class="active item">Home</a>
                <a class="item">Work</a>
            <a class="item">Company</a>
                <a class="item">Careers</a>
            <div class="right menu">
                <div class="item">
                <a class="ui button">Log in</a>
                </div>
                <div class="item">
                <a class="ui primary button">Sign Up</a>
                </div>
            </div>
            </div>
        </div>


        <div class="ui vertical inverted sidebar menu">
        <a class="active item">Home</a>
        <a class="item">Work</a>
        <a class="item">Company</a>
        <a class="item">Careers</a>
        <a class="item">Login</a>
        <a class="item">Signup</a>
        </div>

        <div class="pusher">
      <div id='header' class="ui inverted vertical masthead center aligned segment">

        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <Navigation />
            <div class="right item">
              <h1 id='design-ontario-title'>Design Ontario</h1>
          </div>
        </div>
      </div>

      <div class="ui text container">
      <h1 class="ui inverted header" id='main-heading'>
        {props.title}
      </h1>
      <h2 id='secondary-heading'>{props.subtitle}</h2>
      <div class="ui huge primary button">Get Started<i class="right arrow icon"></i></div>
    </div>
        
    </div>
    </div>
    </div>
    );
}

export default Header;