import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CookieHelper from "@/helpers/CookieHelper";
import { RootState } from "../store";
import { AuthState } from "@/types";


const initialState: AuthState = {
    token: CookieHelper.getCookie("sewaghar-token") || null,
    email: CookieHelper.getCookie("sewaghar-email") || null,
    role: CookieHelper.getCookie("sewaghar-role") || null,
    name: CookieHelper.getCookie("sewaghar-user-name") || null,
    isAuthenticated: Boolean(CookieHelper.getCookie("sewaghar-token")) || false,
    id: CookieHelper.getCookie("sewaghar-user-id") || null,
    phonenumber: CookieHelper.getCookie("sewaghar-phone-number") || null,
    address: CookieHelper.getCookie("sewaghar-address") || null,
  };
  
  const authSlice = createSlice({
    name: "auth",
    initialState: { ...initialState },
    reducers: {
      setInitialCredentials: (
        state: AuthState,
        action: PayloadAction<AuthState>
    ) => {
      if (
        action.payload.token &&
        action.payload.email &&
        action.payload.role &&
        action.payload.name &&
        action.payload.id &&
        action.payload.phonenumber &&
        action.payload.address
      ) {
        CookieHelper.setCookie("sewaghar-token", action.payload.token, 10);
        CookieHelper.setCookie("sewaghar-email", action.payload.email, 10);
        CookieHelper.setCookie("sewaghar-role", action.payload.role, 10);
        CookieHelper.setCookie("sewaghar-user-name", action.payload.name, 10);
        CookieHelper.setCookie("sewaghar-user-id", action.payload.id, 10);
        CookieHelper.setCookie("sewaghar-phone-number", action.payload.phonenumber, 10);
        CookieHelper.setCookie("sewaghar-address", action.payload.address, 10);

        state.token = action.payload.token;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.phonenumber = action.payload.phonenumber;
        state.address = action.payload.address;
        state.isAuthenticated = true;
      }
    },

    setNewToken: (
      state: AuthState,
      action: PayloadAction<{ token: string }>
    ) => {
      if (action.payload.token) {
        CookieHelper.setCookie("sewaghar-token", action.payload.token, 10);
        state.token = action.payload.token;
        state.isAuthenticated = true;
      }
    },

    //for logout
    logout: (state: AuthState) => {
      CookieHelper.deleteCookie("sewaghar-token");
      CookieHelper.deleteCookie("sewaghar-email");
      CookieHelper.deleteCookie("sewaghar-role");
      CookieHelper.deleteCookie("sewaghar-user-name");
      CookieHelper.deleteCookie("sewaghar-user-id");
      CookieHelper.deleteCookie("sewaghar-phone-number");
      CookieHelper.deleteCookie("sewaghar-address");

      state.token = null;
      state.email = null;
      state.role = null;
      state.name = null;
      state.isAuthenticated = false;
      state.id = null;
      state.phonenumber = null;
      state.address = null;
    },
  },
});

export const {
  setInitialCredentials: setInitialCredentials,
  setNewToken,
  logout,
} = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectRole = (state: RootState) => state.auth.role;
export const selectUserName = (state: RootState) => state.auth.name;
export const selectUserId = (state: RootState) => state.auth.id;
export const selectphonenumber = (state: RootState) => state.auth.phonenumber;
export const selectAddress = (state: RootState) => state.auth.address;
