module.exports = {
  assets: ['./src/assets/fonts'],
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
  },
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: {},
        android: {},
      },
    },
  },
};
