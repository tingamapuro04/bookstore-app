const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const nextBook = 0;
export const addBook = (title, author) => ({
  type: ADD_BOOK,
  id: nextBook,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialState = [
  { id: 1, title: 'River', author: 'tinga' },
  { id: 2, title: 'yeyey', author: 'mapuro' },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export default reducer;
