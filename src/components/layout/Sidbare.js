import { useState } from "react"
import InboxIcon from '@mui/icons-material/Inbox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
const Sidbare =({showSidebar})=>{
   const [active,setActive]=useState('inbox')
   const [showProjects,setShowProjects]=useState(true)
   return(
      <div className={showSidebar ? "sidebar": "sidebar closeSidbar"} data-testid="sidbar">
         <ul className='sidebar__generic'>
            <li 
               data-testid='inbox' 
               className={active==='inbox'? 'active':undefined}
               onClick={()=>{
                  setActive('inbox')
                  // setSelectedProject('INBOX')
                  }
               }
               >
               <span className="inboxIcon">
                  <InboxIcon/>
               </span>
               <span>Inbox</span>
            </li>
            <li 
            data-testid='today' 
            className={active==='today'? 'active':undefined}
            onClick={()=>{
               // setSelectedProject('TODAY')
               setActive('today')
            }}
            >
               <span className="todayIcon">
                  <CalendarTodayIcon/>
               </span>
               <span>Today</span>
            </li>
            <li 
            data-testid='next_7' 
            className={active==='next_7'? 'active':undefined}
            onClick={()=>{
               // setSelectedProject('NEXT_7')
               setActive('next_7')
            }}
            >
               <span className="nextIcon">
                  <DateRangeIcon/>
               </span>
               <span>Next 7 days</span>
            </li>
         </ul>
         <div className='sidebar__middle' onClick={()=>setShowProjects(!showProjects)}>
            <span>
               <ExpandMoreIcon className={!showProjects? 'hidden-projects' : undefined } />
               {/* <FaChevronDown className={!showProjects? 'hidden-projects' : undefined }/> */}
            </span>
            <h2>Projects</h2>
            <span className="addProject">
               <AddIcon/>
            </span>
         </div>
         {/* <ul className='sidebar__projects'>
            {showProjects && <Project />}
         </ul>
         {showProjects && <AddProject  />} */}
      </div>
      )
}
export default Sidbare