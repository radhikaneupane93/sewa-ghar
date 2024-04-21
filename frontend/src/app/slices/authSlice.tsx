import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CookieHelper from "@/helpers/CookieHelper";
import { RootState } from "../store";

type AuthState = {
    isAuthenticated: boolean;
    token: string | null; 
    email: string;
    role: string | null;
};

const initialState: AuthState = {
    isAuthenticated: Boolean(CookieHelper.getCookie("token")) || false,
    token: CookieHelper.getCookie("token") || null,
    email: CookieHelper.getCookie("email") || "",
    role: CookieHelper.getCookie("role") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state: AuthState, action: PayloadAction<{ token: string; role: string }>) => {
            const { token, role } = action.payload;
            CookieHelper.setCookie("token", token, 7); 
            CookieHelper.setCookie("role", role, 7);
            state.token = token;
            state.isAuthenticated = true;
            state.role = role;
        },
        logout: (state: AuthState) => {
            CookieHelper.deleteCookie("token");
            CookieHelper.deleteCookie("role");
            state.isAuthenticated = false;
            state.email = "";
            state.role = null;
        },
        setInitialCredentials: (state: AuthState, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
    },
});

export const { setToken, logout, setInitialCredentials } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectRole = (state: RootState) => state.auth.role;
