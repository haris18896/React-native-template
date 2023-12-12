import React, {createContext, useContext, useState, useEffect} from 'react';

// ** hooks
import useJwt from '../../@core/auth/useJwt';

// ** third Party Packages
import {showToast} from '../../utils/utils';

// Create a context for the theme
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeToggleProvider = ({children}) => {
  const [theme, setTheme] = useState('dark');
  const [upcomingMatches, setUpcomingMatches] = useState(true);

  useEffect(() => {
    async function loadTheme() {
      try {
        const savedTheme = await useJwt.getData('theme');
        const upcomingMatchesNotification = await useJwt.getData(
          'upcomingMatches',
        );

        if (savedTheme) {
          setTheme(savedTheme);
        }

        if (upcomingMatchesNotification === 'true') {
          setUpcomingMatches(upcomingMatchesNotification);
        }
      } catch (err) {
        showToast({
          title: 'Load theme',
          message: err,
          type: 'error',
        });
      }
    }

    loadTheme().then();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      await useJwt.setData('theme', newTheme);
    } catch (err) {
      showToast({
        title: 'Load theme',
        message: err,
        type: 'error',
      });
    }
  };

  const toggleUpcomingMatchesNotification = async () => {
    const newUpcomingMatches = upcomingMatches === true ? false : true;
    setUpcomingMatches(newUpcomingMatches);
    try {
      await useJwt.setData(
        'upcomingMatches',
        JSON.stringify(newUpcomingMatches),
      );
    } catch (err) {
      showToast({
        title: 'Upcoming Matches',
        message: err,
        type: 'error',
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        upcomingMatches,
        toggleUpcomingMatchesNotification,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
