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
    <h1>CHANGE ORIGIN :</h1>
    <Input />
    <div className="navbar-subcontainer">
      <FaMicrophone />
      <BsFillGearFill />
    </div>
  </div>
);

export default Navbar;
