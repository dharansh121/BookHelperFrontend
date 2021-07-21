import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "getWishList":
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case "addToWishList" :
      console.log(state)
      console.log(action.payload)
      // return { ...state, ..._.mapKeys(action.payload, "_id") };
      return { ...state, [action.payload._id]: action.payload };
    case "removeFromWishList" :
      // return _.remove(state, { key : action.payload._id });
      return _.omit(state, action.payload._id);
    case "logout":
      return {}
    default:
      return state;
  }
};
