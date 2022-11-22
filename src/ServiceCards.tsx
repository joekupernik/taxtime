
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

export default function ServiceCards() {
  return (
    <Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="\Static\taxes.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stop stressing about your taxes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Worried about your taxes?  Looking for a tax prepairer you can trust?  Well look no further Carly has the experiance and knowledge plus the follow through to make your tax season a breeze.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="\Static\consulting.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Turn your ideas into realities
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Give your dreams the nutrients they need to blosom. Buisness can take many forms, find out which on best suits your needs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/Static/bookkeeping.jpg"
          alt="bookeeping"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Focus on your buisness not your bookeeping.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Owning a buisness is hard work.  Elevated Finicals makes your life eaiser by streamlining your finiancial recording and allowing you to focus on the most important parts of your buisness.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  );
}
