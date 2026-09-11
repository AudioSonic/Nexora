import "./ChatBotSection.css"
import ChatMessage from "./ChatMessage"

function ChatBotSection(){
    return(
        <section className="chat">
            
            <div className="chat-messages">
                <ChatMessage message="Ich möchte Spanisch lernen." sender="Du"/>
                <ChatMessage message="Das klingt spannend! Wie ist dein aktuelles Sprachniveau in Spanisch? (z.B. Anfänger, A1, A2, B1, B2,...)" sender="Nexora"/>
                <ChatMessage message="B2" sender="Du"/>
                <ChatMessage message="Alles klar. Für welchen Zweck möchtest du Spanisch lernen? (z.B. Reisen, Studium, Beruf, Umzug, persönliche Interessen...)" sender="Nexora"/>
                <ChatMessage message="Für einen beruflichen Umzug nach Spanien." sender="Du"/>
                <ChatMessage message="Super, das ist ein konkretes Ziel! Wie viel Zeit kannst du pro Woche ungefähr zum Lernen einplanen? (z.B. 2-4 Stunden, 5+ Stunden...)" sender="Nexora"/>
            </div>

            <form className="chat-input" onSubmit={(event) => event.preventDefault()}>
                <textarea placeholder="Deine Antwort ..."></textarea>
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
