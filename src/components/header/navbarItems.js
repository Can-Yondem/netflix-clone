import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import UserIcon from "../../assets/user-icon.png";

export const menuItems = [
    {
        title: "Ana Sayfa",
        url: "#",
        cName: "nav-link"
    },
    {
        title: "Diziler",
        url: "#",
        cName: "nav-link"
    },
    {
        title: "Filmler",
        url: "#",
        cName: "nav-link"
    },
    {
        title: "Yeniler ve Popüler",
        url: "#",
        cName: "nav-link"
    },
    {
        title: "Listem",
        url: "#",
        cName: "nav-link"
    }
]

export const secondMenuItems = [
    {
        icon: <IoSearchSharp />,
        url: "#",
        cName: "nav-link",
        isImg: false
    },
    {
        icon: <IoNotificationsSharp />,
        url: "#",
        cName: "nav-link",
        isImg: false
    },
    {
        icon: UserIcon,
        url: "#",
        cName: "nav-link",
        isImg: true
    }
]