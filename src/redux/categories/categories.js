const CHECK_STATUS = 'CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
  status: '',
});

const statusReucer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        status: state.status.concat('Under Construction.'),
      };
    default: return state;
  }
};
