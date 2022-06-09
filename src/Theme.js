import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const dark = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff00d1',
    },
    secondary: {
      main: '#A91079',
    },
    error: {
      main: '#ff0004',
    },
    info: {
      main: '#2940D3',
    },
    success: {
      main: '#239D60',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Oswald',
    subtitle1: {
      fontFamily: 'Raleway',
    },
    subtitle2: {
      fontFamily: 'Raleway',
    },
    body1: {
      fontFamily: 'Raleway',
    },
    body2: {
      fontFamily: 'Raleway',
    },
    caption: {
      fontFamily: 'Raleway',
    },
    overline: {
      fontFamily: 'Raleway',
    },
  },
});
const light = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ff00d1',
    },
    secondary: {
      main: '#A91079',
    },
    error: {
      main: '#ff0004',
    },
    info: {
      main: '#2940D3',
    },
    success: {
      main: '#239D60',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
  },
  typography: {
    fontFamily: 'Oswald',
    subtitle1: {
      fontFamily: 'Raleway',
    },
    subtitle2: {
      fontFamily: 'Raleway',
    },
    body1: {
      fontFamily: 'Raleway',
    },
    body2: {
      fontFamily: 'Raleway',
    },
    caption: {
      fontFamily: 'Raleway',
    },
    overline: {
      fontFamily: 'Raleway',
    },
  },
});
const Contrast = createTheme({
  palette: {
    type: 'contrast',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#ff0004',
    },
    info: {
      main: '#3857ff',
    },
    success: {
      main: '#00ff7d',
    },
    warning: {
      main: '#ffcb00',
    },
    divider: '#ffffff',
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Oswald',
    subtitle1: {
      fontFamily: 'Raleway',
    },
    subtitle2: {
      fontFamily: 'Raleway',
    },
    body1: {
      fontFamily: 'Raleway',
    },
    body2: {
      fontFamily: 'Raleway',
    },
    caption: {
      fontFamily: 'Raleway',
    },
    overline: {
      fontFamily: 'Raleway',
    },
  },
});

const Theme = (props) => {
  var theme = dark;
  switch (props.theme) {
    case "light":
      theme = light;
      break;
    case "dark":
      theme = dark;
      break;
    case "contrast":
      theme = Contrast;
      break;
    default:
      theme = dark;
      break;
  }
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
}
export default Theme;