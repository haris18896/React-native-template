import React, {createContext, useContext, useState} from 'react';

// import {Platform} from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import {addNotificationListener, showToast} from '../../utils/utils';
// import {useTheme} from './ThemeContext';

// ** Store && Actions
// import {useDispatch, useSelector} from 'react-redux';
// import {NotificationAction} from '../../redux/Slices/auth';

export const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({children}) => {
  // const {upcomingMatches} = useTheme();

  // ** Store
  // const dispatch = useDispatch();
  // const {login} = useSelector(state => state.auth);

  // ** States
  const [fcmToken, setFcmToken] = useState('');

  // ** Add notification packages then uncomment the below code

  // useEffect(() => {
  //   (async () => {
  //     if (upcomingMatches && login?.accessToken) {
  //       if (Platform.OS === 'ios') {
  //         messaging()
  //           .requestPermission()
  //           .then(authStatus => {
  //             if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
  //               showToast({
  //                 type: 'success',
  //                 title: 'Notification',
  //                 message: 'Notification permission granted',
  //               });
  //             } else {
  //               console.log('Notification permission denied');
  //             }
  //           });
  //       }
  //
  //       // Get the FCM token
  //       await messaging()
  //         .getToken()
  //         .then(token => {
  //           setFcmToken(token);
  //           if (token) {
  //             dispatch(
  //               NotificationAction({
  //                 data: {fcm: token, accessToken: login?.accessToken},
  //                 refreshing: () => {},
  //                 callback: () => {
  //                   showToast({
  //                     title: 'Notification',
  //                     message: 'Notification has been activated',
  //                     type: 'success',
  //                   });
  //                 },
  //               }),
  //             );
  //           }
  //         })
  //         .catch(error => {
  //           showToast({
  //             title: 'Notification Error',
  //             message: error.message,
  //             type: 'error',
  //           });
  //         });
  //     }
  //
  //     // Add a listener for FCM token refresh
  //     const onTokenRefresh = messaging().onTokenRefresh(token => {
  //       setFcmToken(token);
  //     });
  //
  //     // Cleanup the listener when unmounting the component
  //     return () => {
  //       onTokenRefresh();
  //     };
  //   })();
  // }, [upcomingMatches, login]);
  //
  // useEffect(() => {
  //   addNotificationListener();
  // }, [fcmToken]);

  return (
    <NotificationContext.Provider value={{fcmToken}}>
      {children}
    </NotificationContext.Provider>
  );
};
