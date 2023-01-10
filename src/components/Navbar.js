import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

const Navbar = () => (
  <div className="navbar-container">
    <Link to="/">
      <FaChevronLeft className="chevron-icon" />
    </Link>
    <div className="navbar-subcontainer">
      <FaMicrophone />
      <BsFillGearFill />
    </div>
  </div>
);

export default Navbar;
