import React from 'react';

// ** Third Party Packages
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import Toast from 'react-native-toast-message';
import {ThemeProvider} from 'styled-components';
import {PersistGate} from 'redux-persist/integration/react';

// ** Custom Packages
import MainStack from './navigation';
import {theme} from './infrustructure/theme';
import {PaperProvider} from 'react-native-paper';
import {ThemeToggleProvider} from './infrustructure/context/ThemeContext';
import {NotificationProvider} from './infrustructure/context/NotificationContext';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ThemeToggleProvider>
            <NotificationProvider>
              <PaperProvider>
                <MainStack />
                <Toast />
              </PaperProvider>
            </NotificationProvider>
          </ThemeToggleProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
