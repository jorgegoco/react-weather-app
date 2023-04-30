import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import getCoords from '../utils/detailData';

const Detail = () => {
  const { id } = useParams();
  const para = getCoords(id);
  const arr = [para[0].lat, para[0].lon];
  const [det, setDet] = React.useState({ aqi: 10 });

  React.useEffect(() => {
    const getDetail = async () => {
      const response = await axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${arr[0]}&lon=${arr[1]}&appid=d5069407c8ee26c69337af85c51a84fd`);
      setDet(response.data.list[0].components);
    };
    getDetail();
  }, [setDet]);
  return (
    <div className="details-container">
      <h1>{id}</h1>
      <h2>
        Latitude:
        {arr[0]}
      </h2>
      <h2>
        Longitude:
        {arr[1]}
      </h2>
      <p style={{ fontWeight: 'bolder' }}>
        Air Quality index levels:
      </p>
      <table>
        <tbody>
          <tr>
            <th>CO</th>
            <th>NO</th>
            <th>NO2</th>
            <th>O3</th>
            <th>SO2</th>
            <th>PM2_5</th>
            <th>PM10</th>
            <th>NH3</th>
          </tr>
          <tr>
            {Object.entries(det).map((value) => <td key={value}>{value[1]}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
