import moment from 'moment';
import {createSlice} from '@reduxjs/toolkit';
import useJwt from '../../../@core/auth/useJwt';
import {createAction} from '../../createAction';

// ** Function: Actions
export const OfficialSpeedAction = createAction(
  'Official-Speed-API',
  useJwt.officialSpeed,
);
export const RankPointsAction = createAction(
  'Rank-Points-API',
  useJwt.officialSpeedRanks,
);

export const PreviousMatchesAction = createAction(
  'Previous-Matches-API',
  useJwt.previousMatches,
);

export const UpcomingMatchesAction = createAction(
  'Upcoming-Matches-API',
  useJwt.upcomingMatches,
);

// ** Function: Reducer
const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    isLoading: false,
    data: {
      officialSpeed: {},
      ranks: {},
      previousMatches: [],
      upcomingMatches: [],
    },
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // ** STATES: Official Speed API States
      .addCase(OfficialSpeedAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(OfficialSpeedAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.officialSpeed = action.payload;
        state.error = null;
      })
      .addCase(OfficialSpeedAction.rejected, (state, action) => {
        state.isLoading = false;
        state.data.officialSpeed = {};
        state.error = action.payload;
      })

      // ** STATES: Rank Points API States
      .addCase(RankPointsAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(RankPointsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.ranks = action.payload;
        state.error = null;
      })
      .addCase(RankPointsAction.rejected, (state, action) => {
        state.data.ranks = {};
        state.isLoading = false;
        state.error = action.payload;
      })

      // ** STATES: Previous Matches API States
      .addCase(PreviousMatchesAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(PreviousMatchesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.previousMatches = action.payload.map(
          match =>
            ({
              game: match?.gameType || '',
              played: moment(match?.matchDate).format('M-D-YY') || '',
              status: match?.ssrEnteredFlag || '',
              mid: match?.matchID || '',
            } ?? []),
        );
        state.error = null;
      })
      .addCase(PreviousMatchesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.data.previousMatches = [];
        state.error = action.payload;
      })

      // ** STATES: Upcoming Matches API States
      .addCase(UpcomingMatchesAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(UpcomingMatchesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.upcomingMatches = action.payload?.items.map(
          match =>
            ({
              day: moment(match?.matchDate).format('dddd') || '',
              time: moment(match?.matchDate).format('h:mm A') || '',
              fame: match?.gameType || '',
              week: match?.week || '',
            } ?? []),
        );
        state.error = null;
      })
      .addCase(UpcomingMatchesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.data.upcomingMatches = [];
        state.error = action.payload;
      });
  },
});

export default DashboardSlice.reducer;
