// resetMiddleware.js
import { resetAll } from "../slice/resetSlice";

const resetMiddleware = () => (next) => (action) => {
  if (action.type === resetAll.type) {
    return next({ type: "RESET_STATE" });
  }
  return next(action);
};

export default resetMiddleware;
