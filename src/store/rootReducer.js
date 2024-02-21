import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slice/auth";
import postRedcuer from "./slice/postsSlice";
import frinedsReducer from "./slice/friendsSlice";
import userReducer from "./slice/userSlice";
import searchReducer from "./slice/searchSlice";
import localStore from "../store/slice/index";

const appReducer = combineReducers({
  localStore,
  auth: auth,
  posts: postRedcuer,
  friends: frinedsReducer,
  user: userReducer,
  searchResponse: searchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "user/logout") {
    state = undefined;
    localStorage.removeItem("token");
  }

  return appReducer(state, action);
};

export default rootReducer;
