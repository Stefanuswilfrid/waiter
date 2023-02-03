import { UserAuth } from "../lib/AuthContext";

const Chat = ({ chat }) => {
  const { user } = UserAuth();

  return (

    <div className="chat-container" >
      {chat.map((response, index) => {
        const { u, gpt } = response;
        return (
          <div key={index} className="chat">
            <div className="chat-box">
              {/* <p className="chat-user">{user?.displayName}:</p> */}
              <p className="chat-user">{u}</p>

            </div>

            <div className="chat-box">
              {/* <p className="chat-gpt">AI:</p> */}
              <p className="chat-gpt">{gpt}</p>

            </div>
          </div>
        );
      })}
    </div>
    
  );
};

export default Chat;  