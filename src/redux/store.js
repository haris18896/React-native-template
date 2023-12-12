import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ** Reducers
import AuthSlice from './Slices/auth';
import dashboardSlice from './Slices/dashboard/dashboardSlice';
import CumulativeSlice from './Slices/cumulative/cumulativeSlice';
import SpeedometerSlice from './Slices/speedometer/speedometerSlice';
import VQEligibilitySlice from './Slices/VQEligibility/VQEligibilitySlice';
import ShotStatisticsSlice from './Slices/shot-statistics/shotStatisticsSlice';

const rootReducer = combineReducers({
  auth: AuthSlice,
  dashboard: dashboardSlice,
  cumulative: CumulativeSlice,
  speedometer: SpeedometerSlice,
  vqEligibility: VQEligibilitySlice,
  shotStatistics: ShotStatisticsSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
