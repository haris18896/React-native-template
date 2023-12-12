import axios from 'axios';

// ** Utils
import {showToast} from '../../utils/utils';
import {MAIN_URL} from '../../utils/constants';
import {navigateTo} from '../../navigation/utils';

// ** Third Party Packages
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class JwtService {
  jwtConfig = {};

  constructor(jwtOverrideConfig) {
    this.jwtConfig = {...this.jwtConfig, ...jwtOverrideConfig};

    axios.interceptors.request.use(
      async config => {
        const token = await AsyncStorage.getItem('token');
        config.headers.Connection = 'keep-alive';
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Request-Method'] = '*';
        config.headers.Authorization = `Bearer ${token}`;

        return config;
      },
      error => Promise.reject(error),
    );

    axios.interceptors.response.use(
      response => response,
      async error => {
        const {response} = error;
        if (response && response.status === 401) {
          await this.removeData('token');
          navigateTo('Auth');
        }

        return Promise.reject(error);
      },
    );
  }

  // ** DONE: Async Storage items has been set
  getData = async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      showToast({
        title: 'Fetch token',
        message: 'Failed to fetch token',
        type: 'error',
      });
    }
  };

  setData = async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (e) {
      showToast({
        title: 'Set token',
        message: 'Failed to set token',
        type: 'error',
      });
    }
  };

  removeData = async key => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (e) {
      showToast({
        title: 'Remove token',
        message: 'Failed to remove token',
        type: 'error',
      });
    }
  };

  getAllData = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      showToast({
        title: 'Get all data',
        message: 'Failed to get all data',
        type: 'error',
      });
    }

    return keys;
  };

  clearAllData = async () => {
    try {
      return await AsyncStorage.clear();
    } catch (e) {
      showToast({
        title: 'Clear all data',
        message: 'Failed to clear all data',
        type: 'error',
      });
    }
  };
}
