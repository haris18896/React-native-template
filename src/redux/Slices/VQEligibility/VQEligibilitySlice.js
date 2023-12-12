import {createSlice} from '@reduxjs/toolkit';
import useJwt from '../../../@core/auth/useJwt';
import {createAction} from '../../createAction';
import {appIcons} from '../../../assets';

// ** Function: Actions
export const VQEligibilityAction = createAction(
  'VQEligibility-API',
  useJwt.vqEligibility,
);

// ** Function: Reducer
const VQEligibilitySlice = createSlice({
  name: 'VQEligibility',
  initialState: {
    isLoading: false,
    vqEligibility: [],
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // ** STATES: VQEligibility API States
      .addCase(VQEligibilityAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(VQEligibilityAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vqEligibility = Object.keys(action.payload[0]).map(
          (key, index) => ({
            data: action.payload.map(item => item[key]),
            ballNumber: index === 0 ? 8 : index === 1 ? 9 : 10,
            ball:
              index === 0
                ? appIcons?.ball_8
                : index === 1
                ? appIcons?.ball_9
                : appIcons?.ball_10,
          }),
        );
        state.error = null;
      })
      .addCase(VQEligibilityAction.rejected, (state, action) => {
        state.isLoading = false;
        state.vqEligibility = [];
        state.error = action.payload;
      });
  },
});

export default VQEligibilitySlice.reducer;
