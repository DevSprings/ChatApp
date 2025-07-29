/**
 * InputText.jsx
 * -------------
 * Handles user message input and sending.
 * 
 * Props:
 * - addMessage: Function to add a new message to the chat.
 * 
 * Features:
 * - Controlled textarea for message input.
 * - Calls addMessage with the message content on send.
 * - Clears input after sending.
 */

import { useState } from "react"

const InputText = ({addMessage}) => {
  const [message, setMessage] = useState()
  const sendMessage = () => {
    addMessage({message})
    setMessage("")
    document.getElementById("message").value = "";
  }
  return (
    <div className="input__area">
        <textarea 
        name="message" 
        id="message" 
        rows='6'
        placeholder="Input message"
        onChange={(e) => setMessage(e.target.value)}></textarea>
        <button onClick={() => {
          if (!message) return;
          sendMessage();
        }
        }>Send</button>
    </div>
  )
}

export default InputText