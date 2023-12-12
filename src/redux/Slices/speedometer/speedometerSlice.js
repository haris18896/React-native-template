import {createSlice} from '@reduxjs/toolkit';
import useJwt from '../../../@core/auth/useJwt';
import {createAction} from '../../createAction';

// ** Function: Actions
export const SpeedometerAction = createAction(
  'Speedometer-API',
  useJwt.speedometer,
);

// ** Function: Reducer
const SpeedometerSlice = createSlice({
  name: 'Speedometer',
  initialState: {
    isLoading: false,
    speedometer: {},
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // ** STATES: Speedometer API States
      .addCase(SpeedometerAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(SpeedometerAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.speedometer = action.payload;
        state.error = null;
      })
      .addCase(SpeedometerAction.rejected, (state, action) => {
        state.isLoading = false;
        state.speedometer = {};
        state.error = action.payload;
      });
  },
});

export default SpeedometerSlice.reducer;
