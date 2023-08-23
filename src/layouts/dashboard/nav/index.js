import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography,  Stack } from '@mui/material'; 
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components 
import Scrollbar from '../../../components/scrollbar';
import DashedLine from '../../../components/dashline/Dashline';
import NavSection from '../../../components/nav-section';
import '../../../App.css';
//
import navConfig from './config';
import personalconfig from './personalconfig';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <Typography
            gutterBottom
            variant="h6"
            style={{
              fontFamily:'ClashDisplay',
              fontSize: '42px',
              fontWeight: '700',
              lineHeight: '39px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'white',
              marginTop:"40px"
            }}
          >
            Paybox
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            style={{
              fontFamily:'ClashDisplay',
              fontSize: '12px', 
              lineHeight: '14.76px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: "gray",

              
            }}
          >
            by LibertyPay
          </Typography>
        </Link>
      </Box>

      <NavSection data={navConfig} />

      <NavSection data={personalconfig}  style={{marginTop:"50px"}}/>

      <DashedLine color="#192749" width="90%" margin="20px auto" />

      <NavSection data={personalconfig}  style={{marginTop:"30px"}}/>



      <Box sx={{ flexGrow: 1 }} />

      
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              // bgcolor: 'background.default',
              bgcolor: '#07112D',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
