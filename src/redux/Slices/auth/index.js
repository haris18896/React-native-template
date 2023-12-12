// AuthSlice.js
import {createSlice} from '@reduxjs/toolkit';
import useJwt from '../../../@core/auth/useJwt';
import {createAction} from '../../createAction';

// ** Function: Actions
export const LoginAction = createAction('Login', useJwt.login);

export const UserMeAction = createAction('UserMe', useJwt.UserMe);

export const DeleteAccountAction = createAction(
  'DeleteAccount',
  useJwt.deleteAccount,
);

export const NotificationAction = createAction(
  'Notification',
  useJwt.notification,
);

// ** Function: Reducer
const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    login: {},
    userMe: {},
    avatar: null,
  },
  reducers: {
    Logout: state => {
      return {
        ...state,
        login: {},
        userMe: {},
        isLoading: false,
      };
    },
    UserProfileAction: (state, action) => {
      return {
        ...state,
        avatar: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      // ** STATES: LoginAction
      .addCase(LoginAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(LoginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(LoginAction.rejected, (state, action) => {
        state.login = {};
        state.isLoading = false;
        state.error = action.payload;
      })

      // ** STATES: UserMeAction
      .addCase(UserMeAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(UserMeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userMe = action.payload;
      })
      .addCase(UserMeAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.userMe = {};
      });
  },
});

export const {Logout, UserProfileAction} = AuthSlice.actions;
export default AuthSlice.reducer;
