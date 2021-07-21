import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "getRecentUsers":
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
    case "logout":
      return {}
      return state;
  }
};
