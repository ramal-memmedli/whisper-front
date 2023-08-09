import SidebarChatCardViewModel from "@/ViewModels/SidebarChatCardViewModel"


const ceyhun: SidebarChatCardViewModel = {
    id: 1,
    username: "Ceyhun3169",
    image: "https://picsum.photos/200",
    imagePlaceholder: "CM",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 3
}

const ilkin: SidebarChatCardViewModel = {
    id: 2,
    username: "Ilkin3169",
    image: "https://picsum.photos/200",
    imagePlaceholder: "IQ",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 0
}

const ali: SidebarChatCardViewModel = {
    id: 3,
    username: "Ali3169",
    image: "https://picsum.photos/200",
    imagePlaceholder: "AA",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 1
}

const ramal: SidebarChatCardViewModel = {
    id: 4,
    username: "Ramal014",
    image: "https://picsum.photos/200",
    imagePlaceholder: "MR",
    message: "Salam",
    messageDate: new Date("2023-07-29T03:11:03"),
    unreadMessageCount: 2
}

const sidebarCards: SidebarChatCardViewModel[] = [ceyhun, ilkin, ali, ramal];

export default sidebarCards