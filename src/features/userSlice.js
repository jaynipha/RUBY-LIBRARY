import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../services/apiServices";
import { registerUrl, loginUrl } from "../services/urls";

// check local storage for saved user
//const user = JSON.parse(localStorage.getItem("bcn_user"));

export const register = createAsyncThunk(
  registerUrl,
  async (user, thunkAPI) => {
    try {
      const response = await registerUser(user);
      console.log(response);
      return response.data;
    } catch (error) {
      const message = error.response.data.message;
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(loginUrl, async (user, thunkAPI) => {
  try {
    const response = await loginUser(user);
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    console.log(error);
    return thunkAPI.rejectWithValue(message);
  }
});

// export const login = createAsyncThunk(
// 	"auth/login",
// 	async (user, { rejectWithValue }) => {
// 	  try {
// 		const response = await axios.post("/auth/login", { user });
// 		console.log(response.data);
// 		return response.data;
// 	  } catch (err) {
// 		if (err.response) {
// 		  return rejectWithValue(err.response.data.message);
// 		} else {
// 		  return rejectWithValue("Network Error.");
// 		}
// 	  }
// 	}
//   );

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  isLoggedIn: false,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    expiredToken: (state) => {
      state.user = null;
      state.token = "";
    },
    setProfile: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
      state.isError = false;
      state.token = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      console.log(action);
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload;
      state.user = null;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
      state.isError = false;
      state.isLoggedIn = true;
      state.message = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action, " action here ");
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload;
      state.user = null;
      state.isLoggedIn = false;
    });
  },
});

export const { reset, expiredToken, setProfile } = userSlice.actions;

export default userSlice.reducer;
