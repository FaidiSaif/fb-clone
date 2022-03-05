import React from 'react'; 
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';


type SidebarRowProps = {
  title : string,
  src?: string , 
  Icon? : React.ComponentType ;
}

export const SidebarRow = ({title , Icon , src} : SidebarRowProps) => {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}
