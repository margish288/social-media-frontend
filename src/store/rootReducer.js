import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slice/auth";
import postRedcuer from "./slice/postsSlice";
import frinedsReducer from "./slice/friendsSlice";
import userReducer from "./slice/userSlice";

const rootReducer = combineReducers({
  auth: auth,
  posts: postRedcuer,
  friends: frinedsReducer,
  user: userReducer,
});

export default rootReducer;
