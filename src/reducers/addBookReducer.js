export default (state = {}, action) => {
  switch (action.type) {
    case "":
      return { ...state, [action.payload.userId]: action.payload.formValues };
    case "logout":
      return {}
    default:
      return state;
  }
};
