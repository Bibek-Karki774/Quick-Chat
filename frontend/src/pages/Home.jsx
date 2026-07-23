import React from "react";

import NavRail from "../components/nav/NavRail";
import ConversationWindow from "../components/conversation/ConversationWindow";
import ConversationHeader from "../components/conversation/ConversationHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatHeader from "../components/chat/ChatHeader";
import InfoPanel from "../components/ChatInfoPanel/InfoPanel"
import ConversationList from "../components/conversation/ConversationList";


const Home = () => {
 
  return (
    <div className="flex w-screen v-screen flex-row *:border">
      <NavRail />
      <ConversationWindow>  
        <ConversationHeader />
        <ConversationList />
      
      </ConversationWindow>

      <ChatWindow>
        <ChatHeader />
      </ChatWindow>

      <InfoPanel />

    
    </div>
  );
};

export default Home;
