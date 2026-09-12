import { useState } from "react"
import "./ChatBotSection.css"
import ChatMessage from "./ChatMessage"
import { chatData } from "../data/chatData";
import type {ChatData} from "../data/chatData";

function ChatBotSection(){
    const [messages, setMessages] = useState(chatData);
    const [message, setMessage] = useState("");

function getNewChatId(messageArray: ChatData[]) {
    const latestMessage = messageArray[messageArray.length - 1];

    return latestMessage.id + 1;
}

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (message.trim() === "") {
            return;
        }

        const newMessage = {
            id: getNewChatId(messages),
            senderId: 2,
            message: message.trim()
        };

        setMessages([
            ...messages,
            newMessage
        ]);

        setMessage("");
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        event.currentTarget.form?.requestSubmit();
        }
    }

    return(
        <section className="chat">
            
            <div className="chat-messages">
                {messages.map(chat => 
                    <ChatMessage message={chat.message} sender={chat.senderId === 1 ? "Nexora" : "Du"} key={chat.id}/>
                )}
                
                
            </div>

            <form className="chat-input" onSubmit={handleSubmit}>
                <textarea placeholder="Deine Antwort ..." value={message} 
                onChange={(event) => setMessage(event.target.value)} onKeyDown={handleKeyDown}/>
                <button type="submit" aria-label="Antwort senden">➤</button>
            </form>

            <div className="chat-hint">
                <span aria-hidden="true">ⓘ</span>
                <span>Du kannst so ausführlich antworten, wie du möchtest. Ich stelle bei Bedarf weitere Fragen.</span>
                <span className="chat-shortcut">Shift + Enter für neue Zeile</span>
            </div>

        </section>
    )
}

export default ChatBotSection
