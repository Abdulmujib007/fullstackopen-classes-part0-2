 import React from 'react'
 
 const Note = ({note}) => {
     return (
         <div>
           {note.map((val,index) => <p key={index}>{val.content}</p>)}  
         </div>
     )
 }
 
 export default Note
 