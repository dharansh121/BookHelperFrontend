import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "myReceived":
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case "confirmRequest":
      return _.omit(state, action.payload);
    case "deleteRequest":
      return _.omit(state, action.payload);
    case "logout":
      return {}
    default:
      return state;
  }
};
