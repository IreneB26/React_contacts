import { useState } from "react"


export default function Input() {

  const [message, setMessage] = useState("")  

  return(
  
  
     <div>
        <input onChange={event => setMessage(event.target.value)} type="text"></input>
        <button >submit</button>

        <p>{message}</p>
     </div>

  )
}