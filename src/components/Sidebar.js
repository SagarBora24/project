import React from 'react';
import '../style.css'
import {SidebarData} from "./SidebarData"

function Sidebar() {
  return(
      <>


<div className="Sidebar">

<ul className='SidebarList'>
<button type="button" class="btn btn-outline-primary my-2 ml-5">Connect wallet</button>
  {
    
    SidebarData.map((val,key)=>{

     return(
          <li key={key} 
          className="side "
          onClick={()=>{window.location.pathname = val.link}}>
          {""}
            <div>{val.icon}</div>
            <div><a href="http://">{val.title}</a></div>
          </li>
     )
    })}
</ul>
</div>

      </>
  );
}

export default Sidebar;
