import { Conversation } from "./Conversation";
import { useConversationsHook } from "../../hooks/useConversationsHook";
import { getRandomEmoji } from "../../utils/emoji";

export const Conversations = () => {
  const { loading, conversations } = useConversationsHook();
  //console.log("loading ", loading);
  //console.log("Conversations.jsx ", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={index === conversation.length - 1}
          />
        );
      })}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
