import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';

// ** Third Party Packages
// import DeviceInfo from 'react-native-device-info';
// import checkVersion from 'react-native-store-version';

// ** Custom Components
import {ButtonAction} from './ButtonAction';
// import {showToast} from '../../../utils/utils';
import {UserActivityWrapper} from '../../../Styles/Pages';
import {theme as AppTheme} from '../../../infrustructure/theme';

const UpdateButton = props => {
  const {route} = props;

  // ** States
  const [updateAvailable, setUpdateAvailable] = useState(false);

  // ** Constants
  const store = Platform.OS === 'ios' ? 'App' : 'Play';

  // const checkForAppUpdates = async () => {
  //   const currentAppVersion = DeviceInfo.getVersion();
  //
  //   let APP_STORE_ID = '163331123842';
  //   let PLAY_STORE_ID = 'com.upa.tour';
  //   const appStoreUrl = `https://apps.apple.com/app/id${APP_STORE_ID}`;
  //   const playStoreUrl = `https://play.google.com/store/apps/details?id=${PLAY_STORE_ID}&hl=en`;
  //
  //   try {
  //     const check = await checkVersion({
  //       iosStoreURL: appStoreUrl,
  //       version: currentAppVersion,
  //       androidStoreURL: playStoreUrl,
  //     });
  //
  //     console.log('checkVersion : ', check);
  //
  //     if (check.result === 'new') {
  //       // ** TODO: App needs to be updated Function is still remaining
  //       console.log('app needs to be updated');
  //       setUpdateAvailable(true);
  //     }
  //   } catch (e) {
  //     showToast({
  //       title: 'Error Version',
  //       message: `Invalid URL for the ${store} store; unable to verify the app version.`,
  //       type: 'error',
  //     });
  //   }
  // };

  useEffect(() => {
    // checkForAppUpdates().then(() => {});
  }, [updateAvailable]);

  return (
    <>
      {updateAvailable && (
        <UserActivityWrapper
          style={
            route === 'Login' && {
              position: 'absolute',
              bottom: AppTheme.WP(10),
            }
          }>
          <ButtonAction
            end={true}
            loading={false}
            disabled={false}
            title={'UPDATE'}
            color={AppTheme.DefaultPalette().success.light}
            loadingColor={AppTheme.DefaultPalette().primary.main}
            onPress={() => {}}
          />
        </UserActivityWrapper>
      )}
    </>
  );
};
export {UpdateButton};
