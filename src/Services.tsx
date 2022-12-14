
import Grid from '@mui/material/Grid';
import ServiceCards from './ServiceCards';
import Typography  from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import ReviewCard from './ReviewCard';
import ReviewCarousel from './ReviewCarousel';
import Jumbotron from './Jumbotron';
import Paper from '@mui/material/Paper';
import CardActionArea  from '@mui/material/CardActionArea';







export default function Services () {
    return(
      <>
      <Jumbotron/>
    
      <Grid container sx={{ p: 2}}>
        <Grid item xs={12} sm={6}>
        <Card sx={{ p: 2}}>
     <CardMedia
     component="img"
     height="500"
     image="./background.jpg"
     alt="background"
     >
    
     </CardMedia>
     <CardContent>
      <Typography sx={{ p: 2, align: 'center'}}>
        Why Choose Us?
      </Typography>
      <Typography sx={{ p: 2}}>
        We do the best job in the world. 
        With over 4 years of experiance we have
        the best most profesional people in the world.
        But don't take our word for it.  
      </Typography>
     </CardContent>
     <CardContent>
        <ReviewCarousel/>
     </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ p: 2}}>
        <ServiceCards/>
        </Grid>
      </Grid>
      <Paper
    sx={{
      bgcolor: 'secondary',
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="lg">
      <Card sx={{p:3}}>
        <CardActionArea>
      <Typography
        component="h1"
        variant="h1"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Get Started!
      </Typography>
      </CardActionArea>
      </Card>
      </Container>
      </Paper>
        </>
    );
}