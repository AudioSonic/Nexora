import "./ChatMessage.css"
import NexoraIcon from "../../assets/logos/nexora-logo-klein.png"
import UserIcon from "../../assets/icons/icon_person.svg"

type ChatMessageProps = {
    sender: string,
    message: string
}

function ChatMessage(props: ChatMessageProps){
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    return(
        <article className="message-content">
            <div className="message-avatar">
                    <img
                        src={props.sender === "Nexora" ? NexoraIcon : UserIcon}
                        alt={props.sender === "Nexora" ? "Nexora" : "Benutzer"}
                    />
            </div>
            <div className={`message ${props.sender === "Nexora" ? "ai-message" : "user-message"}`}>
                <strong>{props.sender}</strong>
                <p>{props.message}</p>
                <time>{time}</time>
            </div>
        </article>
    )
}

export default ChatMessage
