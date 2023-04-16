import userReducer from "./features/User/userSlice";
import { userApi } from "./api/authApi/userApi";
import { authApi } from "./api/authApi/authApi";

export const reducer = {
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const middleWares = [userApi.middleware, authApi.middleware];
