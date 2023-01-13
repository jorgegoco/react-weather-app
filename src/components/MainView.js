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
        {item[0]}
      </p>
      <p>
        Location: latitude&nbsp;
        {item[1]}
        {' '}
        longitude&nbsp;
        {item[2]}
      </p>
      <p>
        Country:&nbsp;
        {item[3]}
      </p>
      <p>
        Population:&nbsp;
        {item[4]}
      </p>
    </div>
  ));
  return (
    <div className="locations-list">{listItems}</div>
  );
};

export default MainView;
