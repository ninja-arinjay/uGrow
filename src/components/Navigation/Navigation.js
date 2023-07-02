import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../firebase/Auth';
//import SignOutButton from '../SignOut';
import img from "./nav_logo.png";
import "./navigation.css";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationAuth = () => {
  return (
    <>
    <NavLink to="/">
      <img
        src={img}
        alt="Career Connect original logo"
        className="logo"
      />
		</NavLink>
    <nav className='navigation'>
    <ul>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/courses'>Courses</NavLink>
      </li>
      <li>
        <NavLink to='/explore'>Explore</NavLink>
      </li>
      <li>
        <NavLink to='/bookmarks'>Bookmarks</NavLink>
      </li>
      <li>
        <NavLink to='/account'>Account</NavLink>
      </li>
      <li>
        <NavLink to='/signout'>Sign Out</NavLink>
      </li>
    </ul>
  </nav>
  </>
  );
};

const NavigationNonAuth = () => {
  return (
    <>
    <NavLink to="/">
      <img
        src={img}
        alt="Career Connect original logo"
        className="logo"
      />
		</NavLink>
    <nav className='navigation'>
      <ul>
        <li>
          <NavLink to='/signup'>Sign-up</NavLink>
        </li>

        <li>
          <NavLink to='/signin'>Sign-In</NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
