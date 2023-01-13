import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { input } from '../redux/coordSlice';

const Input = () => {
  const [lat, lon] = useSelector((state) => state.coord.coords);
  const [value, setValue] = React.useState([lat, lon]);
  const dispatch = useDispatch();
  return (
    <div className="input-container">
      <h1>CHANGE ORIGIN :</h1>
      <input
        type="number"
        placeholder="Latitude..."
        value={value[0]}
        onChange={(e) => setValue([parseFloat(e.target.value), value[1]])}
        required
      />
      <input type="number" placeholder="Longitude..." value={value[1]} onChange={(e) => setValue([value[0], parseFloat(e.target.value)])} required />
      <button type="button" onClick={() => dispatch(input(value))}>Submit</button>
    </div>
  );
};

export default Input;
