import {Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux.js';
import { useEffect } from 'react';
import { Password } from '@mui/icons-material';

const Dashboard = () => {

    const dispatch = useDispatch();
    const todo = useSelector(appSelector.todo);
   
    const trueList = todo.filter(tarea => tarea.completed !== false );
    const falseList = todo.filter(tarea => tarea.completed !== true );
    
    useEffect(()=>{
        dispatch(appActions.setPageTitle('TABLERO'));
      },[]); 
      
    return (
    <>          
                <Box>
                    <Card sx={{ minWidth: 275, bgcolor: 'info.main', borderRadius: '16px', boxShadow: 3, mb: 2}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 50 }} color="text.primary" align="center" gutterBottom>
                            Tareas Completadas: {trueList.length}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/todo">
                                <Button>
                                    <ArrowCircleRightTwoToneIcon sx={{color:'red'}}/>
                                </Button>
                            </Link>
                            <p>Ir a Todo</p>
                        </CardActions> 
                    </Card>
                </Box>
                <Box>
                    <Card sx={{ minWidth: 275, bgcolor: 'warning.main', borderRadius: '16px', zIndex: 'modal', boxShadow: 3}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 50 }} color="text.primary" align="center" gutterBottom>
                            Tareas Pendientes: {falseList.length}
                            </Typography>
                        </CardContent>
                        <CardActions>
                           
                            <Link to="/fetch-list">
                                <Button>
                                    <ArrowCircleRightRoundedIcon/>
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