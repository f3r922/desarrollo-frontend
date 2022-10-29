import {Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

const Dashboard = () => {
    return (
    <>          
                <box>
                    <Card sx={{ minWidth: 275, bgcolor: 'info.main', borderRadius: '16px', boxShadow: 3, mb: 2}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            “Ley de Alzheimer de la programación: si lees un código que escribiste hace más de dos semanas es como si lo vieras por primera vez”
                            </Typography>
                            <Typography variant="body2">
                            Dan Hurvitz           
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/todo">
                                <Button>
                                    <ArrowCircleRightTwoToneIcon sx={{color:'red'}}></ArrowCircleRightTwoToneIcon>
                                </Button>
                            </Link>
                            <p>Ir a Todo</p>
                        </CardActions> 
                    </Card>
                </box>
                <Box>
                    <Card sx={{ minWidth: 275, bgcolor: 'warning.main', borderRadius: '16px', zIndex: 'modal', boxShadow: 3}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            “Si el código y los comentarios no coinciden, posiblemente ambos sean erróneos”
                            </Typography>
                            <Typography variant="body2">
                            Norm Schryer
                            </Typography>
                        </CardContent>
                        <CardActions>
                           
                            <Link to="/fetch-list">
                                <Button>
                                    <ArrowCircleRightRoundedIcon></ArrowCircleRightRoundedIcon>
                                </Button>
                            </Link>
                            <p>Ir a FetchList</p>
                           
                        </CardActions>
                        
                    </Card>
                </Box>
    </>
    );
};

export default Dashboard;