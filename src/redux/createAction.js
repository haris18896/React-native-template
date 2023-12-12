import {showToast} from '../utils/utils';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const createAction = (type, apiFunction) => {
  return createAsyncThunk(
    `dashboard/${type}`,
    async (
      {data, callback, refreshing},
      {fulfillWithValue, rejectWithValue},
    ) => {
      try {
        const res = await apiFunction(data);
        const result = res?.data?.result;
        refreshing();

        if (res?.data?.success) {
          callback(result);
        }

        return fulfillWithValue(result);
      } catch (err) {
        refreshing();
        showToast({
          title: `Error in ${type}`,
          message: err?.response?.data?.message || err?.message,
          type: 'error',
        });
        return rejectWithValue(err);
      }
    },
  );
};
