import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const linkBase = "px-2 text-[17px] font-medium text-gray-600 hover:text-gray-900 transition-colors";
  const activePill =
    "px-6 py-2 rounded-xl border border-green-500 text-green-600 bg-white";

  const myLinks = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? activePill : linkBase)}
      >
        Home
      </NavLink>
      <NavLink
        to="/listedBooks"
        className={({ isActive }) => (isActive ? activePill : linkBase)}
      >
        Listed Books
      </NavLink>
      <NavLink
        to="/pages"
        className={({ isActive }) => (isActive ? activePill : linkBase)}
      >
        Pages to Read
      </NavLink>
    </>
  );
  return (
  <div className="navbar bg-white py-3 lg:py-5 px-2 sm:px-0 sticky top-0 z-40 border-b border-gray-100 lg:mb-6">
  <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div tabIndex={0} className="dropdown-content bg-white rounded-xl z-10 mt-3 w-60 p-3 shadow-lg border border-gray-100">
            <nav className="flex flex-col gap-2">{myLinks}</nav>
          </div>
        </div>
        <Link to="/" className="text-xl sm:text-2xl font-extrabold tracking-tight whitespace-nowrap">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav className="flex items-center gap-12">{myLinks}</nav>
      </div>
      <div className="navbar-end gap-1.5 sm:gap-3 lg:gap-4">
        <Link to="/not-found" className="px-3 py-1.5 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg bg-green-500 text-white text-xs sm:text-sm lg:text-base font-semibold hover:bg-green-600 transition-colors">
          Sign In
        </Link>
        <Link to="/not-found" className="px-3 py-1.5 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg bg-sky-400 text-white text-xs sm:text-sm lg:text-base font-semibold hover:bg-sky-500 transition-colors">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
