import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  name: string | null;
  token: string | null;
}

const initialState: AuthState = {
  name: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state: any,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    defaultState: (state: any) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;
