import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ControlledSwitches from '../ui/DarkmodeSwitch'
const Header= ({darkmode,setDarkmode,showSidebar,setShowSidbar})=>{
   return (
      <header className="header" data-testid='header'>
         <nav>
            <div className='icons'>
               <span>
               <MenuIcon onClick={()=>setShowSidbar(!showSidebar)} />
               </span>
               <span>
               <HomeIcon/>
               </span>
            </div>
            <div className='settings'>
               <span className='settings__add'>
                  <AddIcon/>
               </span>
               <span className='settings__darkmode'>
                  <ControlledSwitches darkmode={darkmode} setDarkmode={setDarkmode} />
               </span>
            </div>
         </nav>
      </header>
   )
}
export default Header