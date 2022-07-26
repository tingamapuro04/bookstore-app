const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
  status: '',
});

const initialState = [];

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        {
          status: 'Under Construction.',
        },
      ];
    default: return state;
  }
};

export default statusReducer;
