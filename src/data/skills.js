import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CookieRoundedIcon from '@mui/icons-material/CookieRounded';
import MemoryIcon from '@mui/icons-material/Memory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const skills = [
    {
        icon: <StorageIcon sx={{ fontSize: 40 }} />,
        title: 'Server Development',
        description: "I build fast multi-cluster Node applications to meet all your server needs. Whether you are building out your company's API, wanting a website back-end, or need something on a larger scale I have you covered.",
    },
    {
        icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
        title: 'UI/UX Design',
        description: "I'm a Google-trained UI/UX designer. I pride myself on developing web applications that can grow with the end-user. Accessibility, typography, and color theory play a major role in providing for the end user's needs.",
    },
    {
        icon: <i class="fa-brands fa-react fa-2x"></i>,
        title: 'React Development',
        description: "All my website font-ends arere built using react Js. React is a fast and reliable javascript framework that makes managing states easier, handling and displaying data with low latency, and makes production.",
    },
    {
        icon: <PhoneAndroidIcon sx={{ fontSize: 40 }} />,
        title: 'Mobile First Design',
        description: "In our modern world, over 68% of all web traffic globally is generated via mobile users. This number is even larger in Canada and the U.S. with companies like Facebook reporting a mobile user rate of over 95%. All my designs keep this in mind. I develop first for mobile platforms this ensures that your users will love your site regardless of device type or screen size.",
    },
    {
        icon: <CookieRoundedIcon sx={{ fontSize: 40 }} />,
        title: 'Custom cookies & Metrics',
        description: "Understanding your end user can make or break your attempts at marketing. I develop custom cookies and anylitics to makes sure that you and your team gets the data they need to market successfully!",
    },
    {
        icon: <i class="fa-solid fa-database fa-2x"></i>,
        title: 'Database Management',
        description: "I work with fast, modern tools to store and manage data. I work with MongoDB, a NoSQL platform known for being fast and handling non-uniform data. I've spent many years, however, developing using SQL databases for windows desktop applications.",
    },
    {
        icon: <MemoryIcon sx={{ fontSize: 40 }} />,
        title: 'Website hosting',
        description: "When I was head of development at Awareness Athletics Inc. Hosting the website and keeping it up at running was a must. I develop skills to product and mange a website without any down time.",
    },
]
export default skills;