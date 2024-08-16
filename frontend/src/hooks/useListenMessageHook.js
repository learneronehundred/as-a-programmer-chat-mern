import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useConversation } from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

export const useListenMessageHook = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  // console.log("socket useListenMessageHook ", socket);
  // console.log("messages useListenMessageHook ", messages);
  // console.log("setMessages useListenMessageHook ", setMessages);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
