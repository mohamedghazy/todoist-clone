import React from 'react'
import Sidbare from './Sidbare'
import Tasks from '../Tasks'
const Content =({showSidebar})=>{
   return (
      <section className='content'>
         <Sidbare showSidebar={showSidebar}/>
         <Tasks/>
      </section>
   )
}
export default Content