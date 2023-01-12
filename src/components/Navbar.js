import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaMicrophone } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import Input from './Input';

const Navbar = () => (
  <div className="navbar-container">
    <Link to="/">
      <FaChevronLeft className="chevron-icon" />
    </Link>
    <Input />
    <div className="navbar-subcontainer">
      <FaMicrophone />
      <BsFillGearFill />
    </div>
  </div>
);

export default Navbar;
