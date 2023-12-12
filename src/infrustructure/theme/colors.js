import {useTheme} from '../context/ThemeContext';

const DefaultPalette = () => {
  const {theme} = useTheme();

  // ** Vars
  const whiteColor = '#FFF';
  const lightColor = '86, 86, 95';
  const darkColor = '255, 255, 255';
  const mainColor = theme === 'light' ? lightColor : darkColor;

  const defaultBgColor = () => {
    if (theme === 'light') {
      return '#eaf0fe';
    } else return '#2b296d';
  };

  return {
    customColors: {
      white: '#fff',
      dark: darkColor,
      main: mainColor,
      darkBg: '#2b296d',
      light: lightColor,
      lightBg: '#eaf0fe',
      bodyBg: theme === 'light' ? '#eaf0fe' : '#2b296d',
      trackBg: theme === 'light' ? '#F2F2F4' : '#41435C',
      tooltipBg: theme === 'light' ? '#262732' : '#464A65',
      tableHeaderBg: theme === 'light' ? '#F5F5F7' : '#3A3E5B',
    },
    theme: theme,
    common: {
      black: '#000',
      white: whiteColor,
      bottomBarBG: '#252367',
      switch: '#533BC6',
      gray: '#7775AD',
    },
    primary: {
      extraLight: theme === 'light' ? '#FFFFFF' : '#2B2A6E',
      light: theme === 'light' ? '#543BC6' : '#543BC6',
      main: theme === 'light' ? '#2C2A6E' : '#EAF0FE',
      mainRevert: theme === 'light' ? '#EAF0FE' : '#2C2A6E',
      dark: theme === 'light' ? '#FFFFFF' : '#201E61',
      contrastText: theme === 'light' ? '#56565F' : '#FFFFFF',
      disabled: theme === 'light' ? 'red' : 'green',
      same: theme === 'dark' ? '#EAF0FE' : '#FFFFFF',
    },
    secondary: {
      light: '#533BC6',
      main: '#2C2A6E',
      dark: '#201E61',
    },
    error: {
      light: '#fa2d33',
      main: '#ED1E24',
      dark: '#c91c21',
    },
    warning: {
      light: '#FDBE42',
      main: '#FDB528',
      dark: '#DF9F23',
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
    },
    success: {
      light: '#47b020',
      main: '#379215',
      dark: '#2c7013',
    },
    badges: {
      purple: '#543bc6',
      red: '#ED1E24',
    },
    linearGradient: {
      gold: ['#F6A113', '#F6DF69'],
      black: ['#1E1E1E', '#4F4F4F'],
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161',
      light: theme === 'light' ? 'lightgray' : 'gray',
      dark: theme === 'light' ? 'gray' : 'lightgray',
    },
    borders: {
      inputBorder: theme === 'light' ? '#dbdbdb' : '#525085',
      borderSelected: theme === 'light' ? 'red' : '#fefefe',
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      default: defaultBgColor(),
      paper: theme === 'light' ? '#EAF0FE' : '#2C2A6E',
      inputBG: theme === 'light' ? '#F7F7FB' : 'transparent',
      table: theme === 'light' ? '#533BC6' : '#2C2A6E',
      backdrop:
        theme === 'light'
          ? `rgba(234, 240, 254, 0.4)`
          : `rgba(44, 42, 110, 0.4)`,
    },
    labels: {
      primaryLabel: theme === 'light' ? '#8C8C8C' : '#9593CE',
      secondaryLabel: theme === 'light' ? '#56565E' : '#7775AD',
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
    skeleton: {
      backgroundColor: '#bdbdbd',
      highlightColor: theme === 'light' ? '#e0e0e0' : '#fcfcfc',
    },
  };
};

export default DefaultPalette;
