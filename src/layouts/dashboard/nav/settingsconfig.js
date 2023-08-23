// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const settingsconfig = [
  {
    title: 'Leaderboard',
    path: ' ',
    icon: icon('ic_user'),
  },
  {
    title: 'Profile & Settings',
    path: ' ',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Bank performance',
    path: ' ',
    icon: icon('ic_user'),
  },
 
  
];

export default settingsconfig;
