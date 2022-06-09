import App from "./App"
import { useState } from "react";

const States = () => {
    const [theme, setTheme] = useState('dark')
    return <App 
        theme={theme}
        setTheme={setTheme}
        
    />
}
export default States;