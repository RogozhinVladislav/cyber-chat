import { ConversationLink } from '../conversation-link'

export function ConversationNav({ activeConversation = null, conversations = [] }) {
    return (
        <ul className="nav">
            {conversations.map((convo) => (
                <li className="nav__item">
                    <a
                        className={`nav__link ${activeConversation && activeConversation.id === convo.id
                            ? "nav__link--active"
                            : ""
                            }`}
                        href="#"
                    >
                        <ConversationLink conversation={convo} />
                    </a>
                </li>
            ))}
        </ul>
    );
}