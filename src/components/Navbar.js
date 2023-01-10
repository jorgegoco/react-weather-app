import React from 'react';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

const Navbar = () => (
  <div className="navbar-container">
    <FaChevronLeft className="chevron-icon" />
    <div className="navbar-subcontainer">
      <FaMicrophone />
      <BsFillGearFill />
    </div>
  </div>
);

export default Navbar;
