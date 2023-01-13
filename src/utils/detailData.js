import baseData from './baseData.json';

const getCoords = (pop) => {
  const di = baseData.filter((item) => item.name === pop);
  return di;
};

export default getCoords;
