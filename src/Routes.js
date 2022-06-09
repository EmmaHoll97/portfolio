import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";

const Routing = (props) => {
    return <Routes>
        {/* viewPages  */}
        <Route path="/" element={<Home 
            theme={props.theme}
        />} />
    </Routes>
}

export default Routing;