const useConversationStore = create((set) =>({
    selectedConversation : null,
    setSelectedConversation: (conversation)=>set({selectedConversation: conversation})
}))

export default useConversationStore