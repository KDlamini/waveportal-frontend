import CaptainAmerica from '../assets/images/Captain-America.png';
import CaptainAmericaLogo from '../assets/images/Captain-America-logo.png';
import AntMan from '../assets/images/Ant-Man.png';
import AntManLogo from '../assets/images/AntMan-logo.png';
import Aquaman from '../assets/images/Aquaman.png';
import AquamanLogo from '../assets/images/Aquaman-logo.png';
import Batman from '../assets/images/Batman.png';
import BatmanLogo from '../assets/images/Batman-logo.png';
import BlackPanther from '../assets/images/Black-Panther.png';
import BlackPantherLogo from '../assets/images/Black-Panther-logo.png';
import BlackWidow from '../assets/images/Black-Widow.png';
import BlackWidowLogo from '../assets/images/Black-Widow-logo.png';
import CaptainMarvel from '../assets/images/Captain-Marvel.png';
import CaptainMarvelLogo from '../assets/images/Captain-Marvel-logo.png';
import IronMan from '../assets/images/IronMan.png';
import IronManLogo from '../assets/images/IronMan-logo.png';
import Hulk from '../assets/images/Hulk.png';
import HulkLogo from '../assets/images/Hulk-logo.png';
import Superman from '../assets/images/Superman.png';
import SupermanLogo from '../assets/images/Superman-logo.png';
import WonderWoman from '../assets/images/Wonder-Woman.png';
import WonderWomanLogo from '../assets/images/Wonder-Woman-logo.png';
import TheFlash from '../assets/images/The-Flash.png';
import TheFlashLogo from '../assets/images/The-Flash-logo.png';
import SpiderMan from '../assets/images/SpiderMan.png';
import SpiderManLogo from '../assets/images/SpiderMan-logo.png';
import Cyborg from '../assets/images/Cyborg.png';
import Vision from '../assets/images/Vision.png';
import DoctorStrange from '../assets/images/Doctor-Strange.png';
import DoctorStrangeLogo from '../assets/images/Doctor-Strange-logo.png';
import Deadpool from '../assets/images/Deadpool.png';
import DeadpoolLogo from '../assets/images/Deadpool-logo.png';
import Hawkeye from '../assets/images/Hawkeye.png';
import MoonKnight from '../assets/images/Moon-Knight.png';
import MoonKnightLogo from '../assets/images/Moon-Knight-logo.png';
import MrKnight from '../assets/images/Mr-Knight.png';
import MrKnightLogo from '../assets/images/Mr-Knight-logo.png';

const Characters = [
    {
        studio: "Marvel",
        name: 'Iron Man',
        image: `${IronMan}`,
        logo: `${IronManLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Captain America',
        image: `${CaptainAmerica}`,
        logo: `${CaptainAmericaLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Spider-Man',
        image: `${SpiderMan}`,
        logo: `${SpiderManLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Doctor Strange',
        image: `${DoctorStrange}`,
        logo: `${DoctorStrangeLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "DC Comics",
        name: 'Batman',
        image: `${Batman}`,
        logo: `${BatmanLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "DC Comics",
        name: 'Superman',
        image: `${Superman}`,
        logo: `${SupermanLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "DC Comics",
        name: 'Wonder Woman',
        image: `${WonderWoman}`,
        logo: `${WonderWomanLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "DC Comics",
        name: 'Aquaman',
        image: `${Aquaman}`,
        logo: `${AquamanLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Ant-Man',
        image: `${AntMan}`,
        logo: `${AntManLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Black Panther',
        image: `${BlackPanther}`,
        logo: `${BlackPantherLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Black Widow',
        image: `${BlackWidow}`,
        logo: `${BlackWidowLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Captain Marvel',
        image: `${CaptainMarvel}`,
        logo: `${CaptainMarvelLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "DC Comics",
        name: 'The Flash',
        image: `${TheFlash}`,
        logo: `${TheFlashLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "DC Comics",
        name: 'Cyborg',
        image: `${Cyborg}`,
        logo: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Deadpool',
        image: `${Deadpool}`,
        logo: `${DeadpoolLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Vision',
        image: `${Vision}`,
        logo: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Hulk',
        image: `${Hulk}`,
        logo: `${HulkLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Hawkeye',
        image: `${Hawkeye}`,
        logo: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Moon Knight',
        image: `${MoonKnight}`,
        logo: `${MoonKnightLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        studio: "Marvel",
        name: 'Mr Knight',
        image: `${MrKnight}`,
        logo: `${MrKnightLogo}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
]

export default Characters