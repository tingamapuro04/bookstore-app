const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

let nextBook = 0
const addBook = author => ({
  type: BOOK_ADDED,
  id: nextBook + 1,
  author,
});

const removeBook = () => ({
  type: BOOK_REMOVED,
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
    default: return state;
  }
};
