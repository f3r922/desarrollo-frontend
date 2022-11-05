import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { appSelector } from '../redux/appRedux';

export default function Loading() {

    const loading = useSelector(appSelector.loading)
  return (
    <div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
