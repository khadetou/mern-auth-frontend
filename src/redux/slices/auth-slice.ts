import { createSlice } from "@reduxjs/toolkit";

type UserInfo = {
  name: string;
  email: string;
  password: string;
};
interface AuthState {
  userInfo: UserInfo | null;
}

const initialState: AuthState = {
  userInfo:
    typeof window !== "undefined" && localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")!)
      : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
