import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useState} from 'react'
import { useScrollTrigger } from '@mui/material';
// or


export const Edit=({open,setOpen,deleteid,annotations,setAnnotations})=>{
    const handleClose = () => {
        setOpen(!open)
      };
    const handledelete=()=>{
var x=annotations.filter((a)=>!(a.id===deleteid))
setAnnotations([...x])
setOpen(false)
    }

    return(
        <>
              <div className="popups">
           <Dialog onClose={handleClose} open={open}>
            <div className='popup'>
                <h2>
            Are you sure you want to delete ?
           
            </h2>
            <div>
            <button className='cancel' onClick={handleClose}>Cancel</button>
            <button className='delete' onClick={handledelete}>Delete</button>
            </div>
            </div>
        </Dialog>
        </div>
        </>
    )
}

export default Edit