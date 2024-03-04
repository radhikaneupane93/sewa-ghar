import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CookieHelper from "@/helpers/CookieHelper";
import { AuthState } from "@/types";
import { RootState } from "../store";

const initialState: AuthState = {
    token: CookieHelper.getCookie("sewaghar") || null,
    isAuthenticated: Boolean(CookieHelper.getCookie("sewaghar")) || false,
    role: CookieHelper.getCookie("role") || "",
    userId: CookieHelper.getCookie("userId"),
    email: CookieHelper.getCookie("email") || "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: { ...initialState },
    reducers: {
        //for setting the crediantials first time
        setInitialCredentials: (
            state: AuthState,
            action: PayloadAction<AuthState>
        ) => {
            if (action.payload.token) {
                console.log(action);
                CookieHelper.setCookie("sewaghar", action.payload.token, 7);
                CookieHelper.setCookie("role", action.payload.role, 7);
                CookieHelper.setCookie("userId", action.payload.userId, 7);
                CookieHelper.setCookie("email", action.payload.email, 7);
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.role = action.payload.role;
                state.userId = action.payload.userId;
                state.email = action.payload.email;
            }
        },

        //for setting new access token
        setNewToken: (
            state: AuthState,
            action: PayloadAction<{
                token: string;
                role: string;
                userId: string;
                email: string;
            }>
        ) => {
            if (action.payload.token) {
                CookieHelper.setCookie("sewaghar", action.payload.token, 7);
                CookieHelper.setCookie("role", action.payload.role, 7);
                CookieHelper.setCookie("userId", action.payload.userId, 7);
                CookieHelper.setCookie("email", action.payload.email, 7);
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.role = action.payload.role;
                state.userId = action.payload.userId;
                state.email = action.payload.email;
            }
        },

        //for logout
        logout: (state: AuthState) => {
            CookieHelper.deleteCookie("sewaghar");
            CookieHelper.deleteCookie("role");
            CookieHelper.deleteCookie("userId");
            CookieHelper.deleteCookie("email");
            state.token = null;
            state.isAuthenticated = false;
            state.role = "";
            state.userId = "";
            state.email = "";
        },
    },
});

export const { setInitialCredentials, setNewToken, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectUserRole = (state: RootState) => state.auth.role;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUserId = (state: RootState) => state.auth.userId;
export const selectUsername = (state: RootState) => state.auth.email;