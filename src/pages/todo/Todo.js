
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pacaman from '../../card/pacaman.png'

const Todo = () => {
    return (
    
    <Card sx={{ maxWidth: 345, m:"auto"}}>
      <CardMedia
        component="img"
        maxHeight="500"
        image={pacaman}
        alt="green iguana"
      />
      <CardContent sx={{  m:"auto"}}>
        <Typography gutterBottom variant="h5" component="div">
          Todo
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Todo;