const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

const nextBook = 0;
export const addBook = (author) => ({
  type: BOOK_ADDED,
  id: nextBook + 1,
  author,
});

export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  id,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
        },
      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export default reducer;
