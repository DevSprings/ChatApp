/**
 * ChatContainer.jsx
 * -----------------
 * Main chat application container for the ChatApp project.
 * 
 * Features:
 * - Handles user authentication (login/logout) using localStorage.
 * - Connects to a Socket.IO server for real-time chat functionality.
 * - Maintains and updates the chat message list.
 * - Renders the chat UI, including message input and chat history.
 * 
 * Components Used:
 * - ChatLists: Displays the list of chat messages.
 * - InputText: Handles user message input and sending.
 * - UserLogin: Handles user login form.
 * 
 * Styling:
 * - All styles are defined in src/index.css.
 * 
 * Usage:
 * - Start the backend Socket.IO server on port 3001.
 * - Run the Vite dev server for the frontend.
 * - Enter a username to log in and start chatting.
 * 
 * 
 * Date: July 2025
 */

import { useEffect, useState } from "react";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./userLogin";
import "./index.css"
import socketIOClient from "socket.io-client";

const ChatContainer = () => {
    const [user, setUser] = useState(localStorage.getItem("user"))
    const socketio = socketIOClient('http://localhost:3001')
    const [chats, setChats] = useState([])

    useEffect(() => {
        socketio.on("chat", (chats) => {
            setChats(chats)
        })
    })
     
    const sendToSoccket = (chat) => {
        socketio.emit('chat', chat)
    }
    const addMessage = (chat) => {
        const newChat = {...chat, user: localStorage.getItem("user")};

        setChats([...chats, newChat])
        sendToSoccket([...chats, newChat])
    }

    const logOut = () => {
        localStorage.removeItem("user")
        setUser(null)
    }
    
    return (
        <div>
            {
                user ? (
                    <div className="chats__container">
                        <div className="chats__header">
                            <h4>Username: {user}</h4>
                            <p className="chats__logout" onClick={logOut}><strong>Logout</strong>
                            </p>
                        </div>
                        <ChatLists chats={chats} />
                        <InputText addMessage = {addMessage} />
                    </div>
                ) : <UserLogin setUser={setUser} />
            }

        </div>
    )
}
export default ChatContainer;