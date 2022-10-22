
import pace from '../../card/pace.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FetchList = () => {
    return (
    <Card sx={{ maxWidth: 345, m:"auto"}}>
        <CardMedia
          component="img"
          Maxheight="500"
          image={pace}
          alt="green iguana"
        />
        <CardContent sx={{  m:"auto"}}>
          <Typography gutterBottom variant="h5" component="div">
            Fetch-List
          </Typography>
        </CardContent>
    </Card>
    );
};

export default FetchList;