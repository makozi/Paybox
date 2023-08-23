// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const personalconfig = [
  {
    title: 'personal',
    path: ' ',
    icon: icon('ic_user'),
  },
  {
    title: 'sale hub',
    path: ' ',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Talent management',
    path: ' ',
    icon: icon('ic_user'),
  },
  {
    title: 'Spend management',
    path: ' ',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Cards',
    path: ' ',
    icon: icon('ic_user'),
  }, 
  
];

export default personalconfig;
