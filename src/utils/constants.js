import {appIcons} from '../assets';
import useJwt from '../@core/auth/useJwt';
import {showToast} from './utils';

// export const MAIN_URL = 'https://upa-api-dev.azurewebsites.net';
export const MAIN_URL = 'http://upatour.me/api';
export const API_KEY =
  'LSovK2FzL3BvaWorK35gPS0zMjk0Ki04NQ0KLSo4NSsxKi84c2FhXF1bL1wNCl0=';

export const getToken = async () => {
  try {
    const token = await useJwt.getData('token');
    return token ? `Bearer ${token}` : '';
  } catch (error) {
    showToast({
      title: 'Token not found',
      message: error,
      type: 'error',
    });
    return '';
  }
};

export const AppBottomTab = [
  {
    id: 0,
    title: 'Home',
    icon: appIcons?.home,
    iconActive: appIcons?.homeActive,
    screen: 'Home',
  },
];
