/**
 * ChatLists.jsx
 * -------------
 * Renders the list of chat messages.
 * 
 * Props:
 * - chats: Array of chat objects ({ user, message }).
 * 
 * Features:
 * - Differentiates between sender and receiver messages.
 * - Uses localStorage to identify the current user.
 * - Applies different styles for sender and receiver messages.
 */

const ChatLists = ({ chats }) => {
    const user = localStorage.getItem("user")
    function SenderChat({message, username}) {
        return (
            <div className="sender__chat">
                {/* image */}
                <p><strong>{username}</strong><br /> {message}</p>
            </div>

        )
    }
    function ReceiverChat({message, username}) {
        return (

            <div className="receiver__chat">
                {/* image */}
                <p><strong>{username}</strong> <br />{message}</p>
            </div>
        )
    }
    return (
        <div className="chats__list">
            {
                chats.map((chat, index) => {
                    if (chat.user === user) {
                        return <SenderChat
                            key={index}
                            message={chat.message}
                            username={chat.user}
                        />
                    }
                    else {
                        return <ReceiverChat
                            key={index}
                            message={chat.message}
                            username={chat.user}
                        />
                    }
                })
            }
        </div>
    )
}
export default ChatLists;