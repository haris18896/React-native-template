// ** Third Party Packages
import Toast from 'react-native-toast-message';
import {Platform} from 'react-native';
import {theme as AppTheme} from '../infrustructure/theme';

// Show a toast message
const showToast = ({
  title = 'Title',
  message = 'Message',
  type = 'success',
}) => {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
    topOffset: Platform.OS === 'ios' ? AppTheme.WP(15) : AppTheme.WP(10),
    customText: {
      text1: {
        fontSize: AppTheme.WP(5),
        fontFamily: AppTheme.fonts.PoppinsSemiBold,
        fontWeight: AppTheme.fontWeights.semiBold,
      },
      text2: {
        fontSize: AppTheme.WP(3.5),
        fontFamily: AppTheme.fonts.PoppinsMedium,
        fontWeight: AppTheme.fontWeights.medium,
      },
    },
  });
};

export {showToast};
