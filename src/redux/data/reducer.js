const data1 = [...Array(160).keys()].map(number => number + 100000000);

const data2 = [...Array(160).keys()].map(number => number + 1000000000);

const initialState = { data1, data2 };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DATASETS':
      return { data1: state.data2, data2: state.data1 };
    default:
      return state;
  }
};
