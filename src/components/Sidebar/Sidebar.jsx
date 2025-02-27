import React,{useContext, useState} from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';


const Sidebar=()=>{
    const [extended,setExtended]= useState(false)
    const {onSent,prev,setRecent,newChat}=useContext(Context)

   const loadPrompt= async (prompt)=>{
    setRecent(prompt)
    await onSent(prompt)
   }



  return (
    <div className='sidebar'>
        <div className='top'>
    <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=""/>
    <div onClick={()=>newChat()} className="new-chat">
        <img src={assets.plus_icon} alt="" />
        {extended?<p>New Chat</p> : null}
    </div>
    {extended
       ? <div className="recent">
           <p className="recent-title">Recent</p>
         {prev.map((item,index)=>{
           return(
          <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                   {extended?<p>{item.slice(0,18)} ....</p>:null}
             </div>
               )
              })}
        
               </div>:null
             }
              </div>
              <div className='bottom'>
               <div className="bottom-item">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
              </div>
             <div className="bottom-item">
                <img src={assets.history_icon} alt="" />
                {extended? <p>History</p>:null}
              </div>
              <div className="bottom-item">
                <img src={assets.setting_icon} alt="" />
                {extended? <p>Settings</p>:null}
             </div>

        </div>
      
    </div>
  )
}

export default Sidebar
