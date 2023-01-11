import baseData from './baseData.json';

const getAllLocations = (la, lo) => {
  const dist = baseData.map((sample) => {
    let finLat = 0;
    if ((la && sample.lat >= 0) || (la && sample.lat < 0)) {
      finLat = Math.abs(la - sample.lat);
    } else {
      finLat = Math.abs(la + sample.lat);
    }
    let finLon = 0;
    if ((lo && sample.lon >= 0) || (lo && sample.lon < 0)) {
      finLon = Math.abs(lo - sample.lon);
    } else {
      finLon = Math.abs(lo + sample.lon);
    }
    return Object.values(sample).concat(finLat + finLon);
  });

  const distSorted = dist.sort((a, b) => a[5] - b[5]);

  return distSorted.slice(0, 9);
};

export default getAllLocations;
