import Theme from "./Theme";
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar'
import { Box } from "@mui/system";
import BasicSpeedDial from "./Components/SpeedDial";
import Routing from "./Routes";
function App(props) {
  return <BrowserRouter>
    <Theme theme={props.theme}>
        <Navbar 
          theme={props.theme}
        />
        <Box sx={{ p: { xs: '0rem', m: '2rem 4rem' }, width: '100%'}}>
          <Routing
            theme={props.theme}
            setTheme={props.setTheme}
          />
          <BasicSpeedDial
            theme={props.theme}
            setTheme={props.setTheme}
          />
        </Box>
    </Theme>
  </BrowserRouter>;
};


export default App;

