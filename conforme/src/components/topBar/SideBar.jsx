import './sideBar.css'
import {MdLineStyle} from 'react-icons/md';
import {GoChecklist } from 'react-icons/go'; 
import {BiTrendingUp} from 'react-icons/bi';



export default function SideBar() {

  return (
    <div className='SideBar'>
     <div className='sideBarWrapper'>
      <div className='sideBarMenu'>
      <h3 className='sideBarTitle'> Dashboard</h3>
        <ul className='sideBarList'> 
            <li className='sideBarListItem'>
                <MdLineStyle className='sideBarIcon'/>
                Home
            </li>
                <li className='sideBarListItem'>
                <GoChecklist  className='sideBarIcon' />
                Projets
            </li>
                <li className='sideBarListItem'>
                <BiTrendingUp  className='sideBarIcon' />
                Statistiques
            </li>
        </ul>
      
      </div>
     </div>
    </div>
  )
}
