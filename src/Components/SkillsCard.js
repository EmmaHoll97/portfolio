import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState } from "react";
const SkillsCard = (props) => {
    const [hover, setHover] = useState(false);
    const toggleHover = () => {
        if(hover) {
            setHover(false);
            return;
        }
        setHover(true);
    }
    const backgroundColor = hover ? props.theme === 'dark' ? 'background.default' : 'secondary.main' : props.theme === 'dark' ? 'secondary.main' : 'background.default';
    return <Paper elevation={3}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        sx={{ backgroundColor: backgroundColor, textAlign: 'center', p: '1rem', m: '0 1rem 1rem 0', textAlign: 'left' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '1rem 0' }}>
            {props.skill.icon}
            <Typography variant="h6" component="div" gutterBottom>{props.skill.title}</Typography>
        </Box>
        <Typography variant="p" component="div" gutterBottom>{props.skill.description}</Typography>
    </Paper>
}
export default SkillsCard;