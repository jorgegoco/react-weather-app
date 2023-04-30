import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import getAllLocations from '../utils/mainData';

const MainView = () => {
  const [lat, lon] = useSelector((state) => state.coord.coords);
  const data = getAllLocations(lat, lon);
  const listItems = data.map((item) => (
    <div className="location-list" key={item[1]}>
      <Link to={`/detail/${item[0]}`}>
        <BsArrowRightCircle />
      </Link>
      <p>
        Location name:&nbsp;
        <span className="main-values">{item[0]}</span>
      </p>
      <p>
        Location: latitude&nbsp;
        <span className="main-values">{item[1]}</span>
        {' '}
        longitude&nbsp;
        <span className="main-values">{item[2]}</span>
      </p>
      <p>
        Country:&nbsp;
        <span className="main-values">{item[3]}</span>
      </p>
      <p>
        Population:&nbsp;
        <span className="main-values">{item[4]}</span>
      </p>
    </div>
  ));
  return (
    <div className="locations-list">{listItems}</div>
  );
};

export default MainView;
