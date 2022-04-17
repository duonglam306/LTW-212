import React, { useState } from 'react'

// import TextField from '@mui/material/TextField';
// import { Button, Stack} from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';
// import SendIcon from '@mui/icons-material/Send';
import { useUserInfo } from '../../../assets/firebase-data/getUserAPI';

import style from './Wallet.module.css'

function AddMoney(props) {
    const {addWallet}=useUserInfo();
    const [balance, setBalance]=useState(0);
    const [loading, setLoading]=useState(false);
    const onAdd= async()=>{
      setLoading(true);
        await addWallet(Number(balance));
        setLoading(false);
    }

    const onHandleChange=(event)=>{
        if(event.target.value>0){
            setBalance(Number(event.target.value));
        }
    }


    return (
      <div className={style.addmoney}>
        <Stack spacing={3}>
      <TextField id="outlined-basic" variant="outlined" onChange={onHandleChange} name='balance' value={balance}/>
      <LoadingButton
        onClick={onAdd}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        Nạp tiền
      </LoadingButton>
      <Button onClick={props.finish}> Hoàn thành </Button>
      </Stack>
    </div>
    )
}

export default AddMoney;
