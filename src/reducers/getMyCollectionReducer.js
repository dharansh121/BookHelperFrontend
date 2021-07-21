import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "getMyCollection":
      return { ...state, ..._.mapKeys(action.payload, "_id") };
      case "addBook":
      return { ...state, [action.payload.userId]: action.payload.formValues };
    case "deleteInCollection" :
      // return _.remove(state, { key : action.payload._id });
      return _.omit(state, action.payload._id);
    case "logout":
      return {}
    default:
      return state;
  }
};
