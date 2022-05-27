import React , { useState}from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";

import './Menu.css';


function NewProject() {
 
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
  
   
    <div className='newProject'>
    <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
    
    </div>
    
    );
  }

export default NewProject