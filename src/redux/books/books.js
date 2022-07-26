const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const nextBook = 0;
export const addBook = (title) => ({
  type: ADD_BOOK,
  id: nextBook,
  title,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export default reducer;
