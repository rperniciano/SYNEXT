const initialState = {
  visible: false,
  title: null,
  description: null,
};

const modalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_VISIBLE":
      return { ...state, visible: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
