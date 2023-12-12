import {createSlice} from '@reduxjs/toolkit';
import useJwt from '../../../@core/auth/useJwt';
import {createAction} from '../../createAction';

// ** Function: Actions
export const ShotStatisticsAction = createAction(
  'Shot-Statistics-API',
  useJwt.shotStatistics,
);

// ** Function: Reducer
const ShotStatisticsSlice = createSlice({
  name: 'shotStatistics',
  initialState: {
    isLoading: false,
    data: {
      shots: [],
    },
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // ** STATES: Shot Statistics API States
      .addCase(ShotStatisticsAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(ShotStatisticsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.shots = action.payload;
        state.error = null;
      })
      .addCase(ShotStatisticsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data.shots = [];
      });
  },
});

export default ShotStatisticsSlice.reducer;
