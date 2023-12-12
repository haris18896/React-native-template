import {createSlice} from '@reduxjs/toolkit';
import useJwt from '../../../@core/auth/useJwt';
import {createAction} from '../../createAction';

export const CumulativeStatisticsRecentAction = createAction(
  'cumulativeStatisticsAction',
  useJwt.cumulativeStatistics,
);

export const CumulativeStatisticsAnnualAction = createAction(
  'cumulativeStatisticsAnnual',
  useJwt.cumulativeStatistics,
);

const CumulativeSlice = createSlice({
  name: 'CumulativeStatistics',
  initialState: {
    isLoading: false,
    cumulativeStatisticsRecent: [],
    cumulativeStatisticsAnnual: [],
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // ** STATES: Cumulative Statistics Recent API States
      .addCase(CumulativeStatisticsRecentAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(CumulativeStatisticsRecentAction.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.cumulativeStatisticsRecent = action.payload;
      })
      .addCase(CumulativeStatisticsRecentAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.cumulativeStatisticsRecent = [];
      })

      // ** STATES: Cumulative Statistics API States
      .addCase(CumulativeStatisticsAnnualAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(CumulativeStatisticsAnnualAction.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.cumulativeStatisticsAnnual = action.payload;
      })
      .addCase(CumulativeStatisticsAnnualAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.cumulativeStatisticsAnnual = [];
      });
  },
});

export default CumulativeSlice.reducer;
