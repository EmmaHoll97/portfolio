import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import avater from '../assets/avatar/emmaholland.jpg';
import { Grid } from "@mui/material";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from './Home.module.css';
import { Fragment } from "react";
import emma from '../assets/Emma holland.webp';
import { Paper } from "@mui/material";
import SkillsCard from "../Components/SkillsCard";
import skills from "../data/skills";
import CarouselContainer from "../Components/Carousel";
import experiance from "../data/experiance";

const Home = (props) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const options = {
        fpsLimit: 240,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.2,
                },
            },
        },
        particles: {
            color: {
                value: "#ff00d1",
            },
            links: {
                color: props.theme === 'dark' ? '#ffffff' : '#000000',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 4,
                straight: true,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 80,
            },
            opacity: {
                value: { min: 0.5, max: 0.9 },
            },
            shape: {
                type: "star",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }

    return <Fragment>
        <Box sx={{ p: { xs: '1rem', md: '2rem 5rem' } }}>
            <Particles
                className={styles.particles}
                id="tsparticles"
                init={particlesInit}
                options={options}
            />
            <Grid container sx={{ alignItems: 'center', width: '100%', height: '80vh', mb: { xs: '20vh', md: '20vh' } }}>
                <Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                    <Avatar sx={{ width: '60%', height: 'auto', border: '4px dashed #ff00d1' }} alt="Emma Holland's cartoon avatar" src={avater} />
                </Grid>
                <Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography color='secondary' variant="h6" component="div" gutterBottom>Hello, My name is</Typography>
                        <Typography sx={{ m: '0' }} variant="h3" component="div" gutterBottom>Emma Holland</Typography>
                        <Typography sx={{ mt: '0' }} variant="h5" component="div" gutterBottom>I build modern web applications.</Typography>
                        <Typography variant="p" component="div" gutterBottom>
                            Welcome my name is Emma, I'm a full-stack web developer. I specialize in backend server deployment with a passion for building beautiful accessible applications for the modern web. I have a passion for UI/UX. I believe the modern web should be accessible to everyone.
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box>
                        <Typography color='primary' variant="h5" component="div" gutterBottom>Hello, My name is</Typography>
                        <Typography variant="h1" component="div" gutterBottom>Emma Holland</Typography>
                        <Typography variant="h3" component="div" gutterBottom>I build modern web applications.</Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            Welcome my name is Emma, I'm a full-stack web developer. I specialize in backend server deployment with a passion for building beautiful accessible applications for the modern web. I have a passion for UI/UX. I believe the modern web should be accessible to everyone.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    <Avatar sx={{ width: '85%', height: 'auto', border: '4px dashed #ff00d1' }} alt="Emma Holland's cartoon avatar" src={avater} />
                </Grid>
            </Grid>
        </Box>
        <Paper elevation={3} sx={{ backgroundColor: 'background.default', p: { xs: '1rem', md: '2rem 5rem' } }}>
            <section id='About Me'>
                <Grid container spacing={3} sx={{ alignItems: { sm: 'start', md: 'center' } }} >
                    <Grid item xs={12} sm={5} md={4} ld={3} xl={2}>
                        <img style={{ width: '100%' }} src={emma} alt='A picture of Emma Holland' />
                    </Grid>
                    <Grid item xs={12} sm={7} md={8} ld={9} xl={10}>
                        <Typography color='secondary' variant="h4" component="div" gutterBottom>About Me</Typography>
                        <Typography sx={{ m: '1rem auto', fontWeight: 500, fontSize: '1rem' }} variant="p" component="div" gutterBottom>
                            Welcome! My name is <Typography color='primary' variant="p" component="span">Emma Holland</Typography>.
                            I have been writing code for 10+ years. I first started developing websites at the age of 12 as a way to
                            help my friends promote their sports and hobbies. Back when I started HTML 4, CSS 2, and JS4 were stable
                            for any web developer.
                        </Typography>
                        <Typography sx={{ m: '1rem auto', fontWeight: 500, fontSize: '1rem' }} variant="p" component="div" gutterBottom>
                            Over the years I learned many different coding languages because it was truly fun for me. I moved on to
                            coding windows desktop applications in C++ and C# and built a Point of sale system. I also built mobile
                            applications for early android in Java and spent some time learning Xamerain and now use flutter and
                            react-native to build mobile applications.
                        </Typography>
                        <Typography sx={{ m: '1rem auto', fontWeight: 500, fontSize: '1rem' }} variant="p" component="div" gutterBottom>
                            Fast-forward to now, I have been developing modern web applications using react, node, ES6, and a few
                            other handy tools. I specialize in handling large or non-uniform data sets with noSQL servers like MongoDB
                            and Nodejs. I pride myself on designing beautiful front-end UI and UX with React. Currently, I work
                            full-time as head of development at <Typography color='primary' variant="p" component="span"> Awareness Athletics Inc.</Typography>
                            and complete freelance work for others as well.
                        </Typography>
                    </Grid>
                </Grid>
            </section>
        </Paper>
        <Box sx={{ p: { xs: '1rem', md: '2rem 5rem' } }}>
            <section id='My Skills'>
                <Box>
                    <Typography variant="h4" component="div" gutterBottom>My Skills</Typography>
                    <CarouselContainer arrows={false}>
                        {skills.map((skill) => {
                            return <SkillsCard theme={props.theme} skill={skill} />
                        })}
                    </CarouselContainer>
                </Box>
            </section>
        </Box>
        <Paper elevation={3} sx={{ backgroundColor: 'background.default', p: { xs: '1rem', md: '2rem 5rem' } }}>
            <section id='Recent Experiance'>
                <Typography variant="h4" component="div" gutterBottom>Recent Experiance</Typography>
                {experiance.map((item) => {
                    return <Grid container spacing={2}>
                        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={item.mobile} alt='An Image of the SPFA webiste' aria-hidden='true' style={{ width: '50%' }} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" component="div" gutterBottom>{item.title}</Typography>
                            <Typography variant="p" component="div" gutterBottom>{item.description}</Typography>
                        </Grid>
                    </Grid>
                })}
            </section>
        </Paper>
        <Box sx={{ p: { xs: '1rem', md: '2rem 5rem' } }}>
        <Typography variant="h4" component="div" gutterBottom>Contact Information</Typography>
            <Paper elevation={3} sx={{ backgroundColor: 'background.default', p: { xs: '1rem', md: '2rem 5rem' } }}>
                <section id='Contact'>
                    <Typography variant="p" component="div" gutterBottom>Email Address: emmaholland13@hotmail.com</Typography>
                    <Typography variant="p" component="div" gutterBottom>Cell Phone: +1 (613) 661-4653</Typography>
                    <Typography variant="p" component="div" gutterBottom>Mailing Address: 19 Cottonwood Drive, Belleville, Ontario, K8N 0J3</Typography>
                </section>
            </Paper>
        </Box>
    </Fragment>
}
export default Home;