const growthByYear = {
  2011: 0.8,
  2012: 1.2,
  2013: 3,
  2014: 5,
  2015: 8.5,
  2016: 13,
  2017: 21,
  2018: 30
};

export default (state = growthByYear, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
