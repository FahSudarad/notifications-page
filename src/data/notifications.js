import markWebber from "../assets/images/avatar-mark-webber.webp";
import angelaGray from "../assets/images/avatar-angela-gray.webp";
import jacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import nathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import annaKim from "../assets/images/avatar-anna-kim.webp";
import chess from "../assets/images/image-chess.webp";
const notifications = [
    {
        id: 1,
        name: "Mark Webber",
        profilePic: markWebber,
        text: "reacted to your recent post",
        post: "My first tournament today!",
        time: "1m ago",
        activities: "post",
        group: "",
        dm: "",
        imagePost: "",
        status: true
    },
    {
        id: 2,
        name: "Angela Gray",
        profilePic: angelaGray,
        text: "followed you",
        post: "",
        time: "5m ago",
        activities: "followed",
        group: "",
        dm: "",
        imagePost: "",
        status: true
    },
    {
        id: 3,
        name: "Jacob Thompson",
        profilePic: jacobThompson,
        text: "has joined your group",
        post: "",
        time: "1 day ago",
        activities: "joined group",
        group: "Chess Club",
        dm: "",
        imagePost: "",
        status: true
    },
    {
        id: 4,
        name: "Rizky Hasanuddin",
        profilePic: rizkyHasanuddin,
        text: "sent you a private message",
        post: "",
        time: "5 days ago",
        activities: "receive dm",
        group: "",
        dm: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        imagePost: "",
        status: true
    },
    {
        id: 5,
        name: "Kimberly Smith",
        profilePic: kimberlySmith,
        text: "commented on your picture",
        post: "",
        time: "1 week ago",
        activities: "commented post",
        group: "",
        dm: "",
        imagePost: chess,
        status: false
    },
    {
        id: 6,
        name: "Nathan Peterson",
        profilePic: nathanPeterson,
        text: "reacted to your recent post",
        post: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        activities: "reacted post",
        group: "",
        dm: "",
        imagePost: "",
        status: false
    },
    {
        id: 7,
        name: "Anna Kim",
        profilePic: annaKim,
        text: "left the group",
        post: "",
        time: "2 weeks ago",
        activities: "left the group",
        group: "Chess Club",
        dm: "",
        imagePost: "",
        status: false
    }
];
export default notifications;