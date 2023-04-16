import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
  expiresAt: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      const { token, refreshToken, expiresAt } = action.payload;
      return {
        ...state,
        token,
        refreshToken,
        expiresAt,
      };
    },
  },
});

export const reducer = persistReducer(
  {
    key: "PH:Auth",
    storage,
    whitelist: ["user", "token", "refreshToken", "expiresAt"],
  },
  userSlice.reducer
);

export default reducer;
export const { logout, setUser, setToken } = userSlice.actions;
