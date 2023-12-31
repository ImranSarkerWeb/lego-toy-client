import { Link, NavLink } from "react-router-dom";
import lego from "../../../assets/logo/lego-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navTab = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-accent" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltoys"
          className={({ isActive }) => (isActive ? "text-accent" : "")}
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mytoys"
          className={({ isActive }) => (isActive ? "text-accent" : "")}
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addtoy"
          className={({ isActive }) => (isActive ? "text-accent" : "")}
        >
          Add A Toy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-accent" : "")}
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navTab}
          </ul>
        </div>

        <div className="text-3xl flex font-semibold items-center">
          <span> Lego</span>
          <Link to="/">
            <img src={lego} className="w-20" />
          </Link>
          <span>Store</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navTab}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            <label className="btn btn-ghost btn-circle avatar">
              <div title={user.displayName} className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <button onClick={logOut} className="btn btn-sm btn-error">
              Log Out
            </button>
          </>
        ) : (
          <button className="btn btn-sm btn-accent">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
