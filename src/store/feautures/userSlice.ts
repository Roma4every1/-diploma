import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { Theme } from "ui/theme";
import {
  FirebaseError,
  FirebaseErrorCode,
  getFirebaseMessage,
} from "utils/firebaseErrors";

interface IUserState {
  email: string | null;
  name: string;
  isPendingAuth: boolean;
  error: null | FirebaseError;
  isAuth: boolean;
  creationTime: string | null;
  isResetPassword: boolean;
  themeMode: Theme;
}

const initialState: IUserState = {
  email: null,
  name: "",
  isPendingAuth: false,
  error: null,
  isAuth: false,
  creationTime: null,
  isResetPassword: false,
  themeMode: "dark",
};

export const fetchSignUpUser = createAsyncThunk<
  { creationTime: string; userEmail: string; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: FirebaseError }
>(
  "user/fetchSignUpUser",
  async ({ email, password, userName }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const creationTime = userCredential.user.metadata.creationTime as string;
      const userEmail = userCredential.user.email as string;
      const name = userName as string;

      return { creationTime, userEmail, name };
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
  },
);

export const fetchSignInUser = createAsyncThunk<
  { creationTime: string; userEmail: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const creationTime = userCredential.user.metadata.creationTime as string;
    const userEmail = userCredential.user.email as string;

    return { creationTime, userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignOutUser = createAsyncThunk<
  void,
  undefined,
  { rejectValue: FirebaseError }
>("user/fetchSignOutUser", async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchResetPassword = createAsyncThunk<
  undefined,
  { email: string },
  { rejectValue: FirebaseError }
>("user/fetchResetPassword", async ({ email }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchUpdatePassword = createAsyncThunk<
  void,
  { newPassword: string },
  { rejectValue: FirebaseError }
>("user/fetchUpdatePassword", async ({ newPassword }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    user && (await updatePassword(user, newPassword));
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchUpdateEmail = createAsyncThunk<
  void,
  { email: string },
  { rejectValue: FirebaseError }
>("user/fetchUpdateEmail", async ({ email }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    user && (await updateEmail(user, email));
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName: (state, { payload }: PayloadAction<string>) => {
      if (payload) state.name = payload;
    },
    resetError: (state) => {
      state.error = null;
    },
    toggleTheme(state, { payload }: PayloadAction<Theme>) {
      state.themeMode = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.isAuth = true;
      state.name = payload.name;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
      state.isResetPassword = false;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.isAuth = true;
      state.isResetPassword = false;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
        state.isResetPassword = false;
      }
    });

    builder.addCase(fetchSignOutUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignOutUser.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignOutUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = true;
      }
    });

    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
      state.isResetPassword = false;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
      state.isAuth = false;
      state.isResetPassword = true;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
        state.isResetPassword = false;
      }
    });

    builder.addCase(fetchUpdatePassword.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
    });
    builder.addCase(fetchUpdatePassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
    });
    builder.addCase(fetchUpdatePassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchUpdateEmail.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
    });
    builder.addCase(fetchUpdateEmail.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
    });
    builder.addCase(fetchUpdateEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;

export const { updateUserName, resetError, toggleTheme } = userSlice.actions;
