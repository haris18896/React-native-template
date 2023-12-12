// ** Third Party Packages
// import messaging from '@react-native-firebase/messaging';
// import notifee, {AndroidBadgeIconType} from '@notifee/react-native';

// async function displayNotification(notification) {
//   await notifee.requestPermission();
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//     badge: true,
//     vibration: true,
//     vibrationPattern: [300, 500],
//   });
//
//   const notificationData = Object.entries(notification.data).map(
//     ([key, value]) => ({[key]: value}),
//   );
//
//   // Display a notification
//   await notifee.displayNotification({
//     title: notification.notification.title,
//     body: notification.notification.body,
//     android: {
//       sound: 'default',
//       channelId,
//       smallIcon: 'ic_launcher',
//       largeIcon: require('../assets/logo.png'),
//       badgeIconType: AndroidBadgeIconType.SMALL,
//       color: 'red',
//       pressAction: {
//         id: 'default',
//         launch: 'default',
//       },
//     },
//     ios: {
//       sound: 'default',
//       pressAction: {
//         id: 'default',
//         launch: 'default',
//       },
//     },
//   });
// }

function updateFCMToken() {
  // Implement FCM token update logic here
}

// async function addNotificationListener() {
//   updateFCMToken();
//
//   messaging().setBackgroundMessageHandler(async notification => {
//     console.log('onPressNotification', notification);
//   });
//
//   messaging().onNotificationOpenedApp(notification => {
//     console.log('onPressNotification', notification);
//   });
//
//   notifee.onBackgroundEvent(async ({type, detail}) => {
//     return detail.notification;
//   });
//
//   notifee.onForegroundEvent(async ({type, detail}) => {
//     return detail.notification;
//   });
//
//   messaging().onMessage(notification => {
//     displayNotification(notification);
//   });
// }

// export {addNotificationListener, updateFCMToken, displayNotification};
