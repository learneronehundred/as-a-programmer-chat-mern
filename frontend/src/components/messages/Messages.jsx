import { useEffect, useRef } from "react";
import { useGetMessagesHook } from "../../hooks/useGetMessagesHook";
import { MessageSkeleton } from "../skeletons/MessageSkeleton";
import { Message } from "./Message";
import { useListenMessageHook } from "../../hooks/useListenMessageHook";

export const Messages = () => {
  const { messages, loading } = useGetMessagesHook();

  useListenMessageHook();

  const lastMessageRef = useRef();
  //console.log("Messages.jsx ", messages);
  //console.log("Messages.jsx lastMessageRef ", lastMessageRef);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          //console.log("Messages.jsx ", message);
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
        })}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};
