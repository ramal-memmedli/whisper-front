type ChatCardViewModel = {
    userId: number;
    username: string;
    profileImage: string;
    imagePlaceholder: string;
    lastMessage: string;
    lastMessageDate: Date;
    unreadMessageCount: number;
}

export default ChatCardViewModel