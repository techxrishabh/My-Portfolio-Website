import {FiTwitter} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {AiOutlineLinkedin} from "react-icons/ai";
const navLinks = [
  {
    id: 1,
    name: "projects",
    link: "/projects",
  },
  {
    id: 2,
    name: "blog",
    link: "/blog",
  },
  {
    id: 3,
    name: "talks",
    link: "/talks",
  },
  {
    id: 4,
    name: "store",
    link: "/store",
  },
  {
    id: 5,
    name: "contact",
    link: "/contact",
  },
];

const navIcons = [
  {
    id: 1,
    icon: <FiTwitter />,
    link: "",
  },
  {
    id: 2,
    icon: <FiGithub />,
    link: "",
  },
  {
    id: 3,
    icon: <AiOutlineLinkedin />,
    link: "",
  },
];

export {navLinks, navIcons};
