import { UserAuth } from "../lib/AuthContext";
/**
 * A simple component to handle rendering of the chats between user and AI
 * @param { chat } - What this does is to destructure the props so that we can use it to display on the front page. Learn more about destructuring here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * @returns
 */
const Chat = ({ chat }) => {
  const { user } = UserAuth();

  return (
    <div className="chat-container">
      {chat.map((response, index) => {
        const { u, gpt } = response;
        return (
          <div key={index} className="chat">
            <div className="chat-box">
              <p className="chat-user">{user?.displayName}:</p>
              <p>{u}</p>
            </div>

            <div className="chat-box">
              <p className="chat-gpt">AI:</p>
              <p>{gpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;  