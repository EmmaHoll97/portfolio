import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import logoBright from '../assets/logo.webp';
import logoDark from '../assets/logoDark.webp'
import resume from '../assets/resume.pdf';

const Navbar = (props) => {
    const pages = ['About Me', 'My Skills', 'Recent Experiance', 'Contact'];
    return <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'background.default', p: {xs: '1rem', md: '1rem 2rem'}}}>
         {/* mobile menu icon goes here  */}
        <Link to='/'><img height={35} src={props.theme === 'dark' ? logoDark : logoBright} alt='Capital E and H to for the logo for Emma Hollands site' /></Link>
        <Box sx={{ display: { xs: 'none', md: 'flex'}, gap: '1rem', alignItems: 'center'}}>
             {pages.map((page) => {
                return <Typography key={page} variant="p" component="div" gutterBottom><a style={{color: 'inherit', fontSize: 'inherit', textDecoration: 'inherit'}} href={`#${page}`}>{page}</a></Typography>
             })}
            <Button target='_blank' href={resume} variant='outlined' sx={{borderRadius: '50rem'}}>Resume</Button>
        </Box>
    </Box>
}
export default Navbar;