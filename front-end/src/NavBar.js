import { NavLink } from 'react-router-dom';
import './App.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className = "logoImage" src={require('./Images/logo.png')} />
          <a className="btn btn-ghost normal-case text-xl">Designs Meez</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><NavLink to="./">Home</NavLink></li>
            <li tabIndex={0}>
              <a>
                Portfolio
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><NavLink to="./digitalDesigns">Digital Designs</NavLink></li>
                <li><NavLink to="./journals">Journals</NavLink></li>
                <li><NavLink to="./signs">Signs</NavLink></li>
                <li><NavLink to="./otherArt">Other Art</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="./contact">Contact</NavLink></li>
            <li><NavLink to="./about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
