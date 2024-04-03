import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CookieHelper from "@/helpers/CookieHelper";
import { RootState } from "../store";


type AuthState = {
    isAuthenticated: boolean;
    token: string | null; 
    email: string;
   
};


const initialState: AuthState = {
    isAuthenticated: Boolean(CookieHelper.getCookie("sewaghar")),
    token: CookieHelper.getCookie("sewaghar") || null,
    email: CookieHelper.getCookie("email") || "",
    
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state: AuthState, action: PayloadAction<string>) => {
            const token = action.payload;
            CookieHelper.setCookie("sewaghar", token, 7);
            state.token = token;
            state.isAuthenticated = true;
        },
        logout: (state: AuthState) => {
            CookieHelper.deleteCookie("sewaghar");
            state.token = null;
            state.isAuthenticated = false;
            state.email = "";
        },
        setInitialCredentials: (state: AuthState, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.email = action.payload.email;
           
        },
    },
});


export const { setToken, logout, setInitialCredentials } = authSlice.actions;
export default authSlice.reducer;


export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
export const selectEmail = (state: RootState) => state.auth.email;
