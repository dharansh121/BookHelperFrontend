import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "mySent":
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case "deleteRequest":
      return _.omit(state, action.payload);
    default:
    case "logout":
      return {}
      return state;
  }
};
