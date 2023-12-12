/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';

// ** Third Party Packages
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ** Custom Components
import {ImageWrapper} from '../Styles/Pages';
import {Title} from '../Styles/infrustucture';
import {Layout, UpdateButton} from '../@core/components';
import {theme as AppTheme} from '../infrustructure/theme';

const Splash = ({route}) => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('token');
        const initialRouteName = isLoggedIn ? 'App' : 'Auth';
        navigation.reset({
          index: 0,
          routes: [{name: initialRouteName}],
        });
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <ImageWrapper>
        {/*<UPAImage source={appImages.splash} resizeMode={'cover'} />*/}
        <Title style={{marginTop: AppTheme.WP(5)}}>Splash Title</Title>
      </ImageWrapper>

      <UpdateButton route={route?.name} />
    </Layout>
  );
};

export {Splash};
