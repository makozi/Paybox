import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import CustomCard from '../components/customcard';
import WithdrawalCard from '../components/walletcard'; 
import PaymentCard from '../components/paymentcards'; 
import ComparativeCard from '../components/comparativecard.js';
// sections
import { 
  AppNewsUpdate, 
  AppCurrentVisits,
  AppWebsiteVisits, 
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | PayBox </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <WithdrawalCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomCard title="Total savings balance" subtitle="₦194,000" details="View Details" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomCard title="Total customers" subtitle="₦919" details="View Details" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CustomCard title="Total POS" subtitle="0" details="View Details" />
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <PaymentCard   title="Total transfer"
        subtitle1a="₦500"
        subtitle1="Today"
        subtitle2="This Week"
        subtitle2a="₦500"
        content1a="₦200"
        content1="Yesterday"
        content2="Last Week"
        content2a="₦200"
        buttonText="More"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <PaymentCard   title="Total transfer"
        subtitle1a="₦2,000,000"
        subtitle1="Today"
        subtitle2="This Week"
        subtitle2a="₦5,000,000"
        content1a="₦5,000,000"
        content1="Yesterday"
        content2="Last Week"
        content2a="₦5,000,000"
        buttonText="More"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <PaymentCard   title="Total Inflow"
        subtitle1a="₦2,000,000"
        subtitle1="Today"
        subtitle2="This Week"
        subtitle2a="₦5,000,000"
        content1a="₦5,000,000"
        content1="Yesterday"
        content2="Last Week"
        content2a="₦5,000,000"
        buttonText="More"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <PaymentCard   title="Total Transactions"
        subtitle1a="₦2,000,000"
        subtitle1="Today"
        subtitle2="This Week"
        subtitle2a="₦5,000,000"
        content1a="₦5,000,000"
        content1="Yesterday"
        content2="Last Week"
        content2a="₦5,000,000"
        buttonText="More"/>
          </Grid>


        

          <Grid item xs={12} sm={6} md={3}>
          <PaymentCard   title="Total Cashout"
        subtitle1a="₦2,000,000"
        subtitle1="Today" 
        content1a="₦5,000,000"
        content1="Yesterday" 
        buttonText="Today"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <PaymentCard   title="Transaction Status"
         subtitle1a="422"
        subtitle1="Success" 
        content1a="18"
        content1="Failed" 
        buttonText="Today"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <PaymentCard   title="Average transaction Count"
        subtitle1a="₦20,400"
        subtitle1="Value" 
        content1a="422"
        content1="Count" 
        buttonText="Today"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <PaymentCard   title="Total Commission"
        subtitle1a="₦2,000,000"
        subtitle1="Today" 
        content1a="₦5,000,000"
        content1="Yesterday" 
        buttonText="Today"/>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
      


<PaymentCard   title="Average commission"
        subtitle1a="₦87,000"
        subtitle1="POS" 
        content1a="₦102,000"
        content1="Lotto" 
        buttonText="More"/>

          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <ComparativeCard/>
          </Grid>

          

          
 

         
        </Grid>
      </Container>
    </>
  );
}
