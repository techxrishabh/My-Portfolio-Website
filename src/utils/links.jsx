import {FiTwitter} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {PiLinkedinLogoBold} from "react-icons/pi";
const navLinks = [
  {
    id: 1,
    name: "projects",
    link: "/projects",
    color: "link-a",
  },
  {
    id: 2,
    name: "blog",
    link: "/blog",
    color: "link-b",
  },
  {
    id: 3,
    name: "talks",
    link: "/talks",
    color: "link-c",
  },
  {
    id: 4,
    name: "store",
    link: "/store",
    color: "link-d",
  },
  {
    id: 5,
    name: "contact",
    link: "/contact",
    color: "link-e",
  },
];

const navIcons = [
  {
    id: 1,
    icon: <FiTwitter />,
    link: "",
    color: "link-a",
  },
  {
    id: 2,
    icon: <FiGithub />,
    link: "",
    color: "link-a",
  },
  {
    id: 3,
    icon: <PiLinkedinLogoBold />,
    link: "",
    color: "link-a",
  },
];

export {navLinks, navIcons};
