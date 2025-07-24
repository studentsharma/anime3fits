import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    email: string | null;
    user: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    email: null,
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true,
                state.error = null
        },
        loginSuccess(state, action: PayloadAction<{ name: string; email: string }>) {
            state.email = action.payload.email,
                state.user = action.payload.name,
                state.isAuthenticated = true,
                state.loading = false,
                state.error = null
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        }
    }

})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;