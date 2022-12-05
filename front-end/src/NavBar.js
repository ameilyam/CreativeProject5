import './App.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Designs Meez</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a>About</a></li>
            <li tabIndex={0}>
              <a>
                Portfolio
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Digital Designs</a></li>
                <li><a>Journals</a></li>
                <li><a>Signs</a></li>
                <li><a>Other Art</a></li>
              </ul>
            </li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
