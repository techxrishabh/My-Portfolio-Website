import {FiTwitter} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {PiLinkedinLogoBold} from "react-icons/pi";
const navLinks = [
  {
    id: 1,
    name: "projects",
    link: "/projects",
    active_color: "var(--clr-link-a)",
    inactive_color: "var(--clr-white)",
  },
  {
    id: 2,
    name: "blog",
    link: "/blog",
    active_color: "var(--clr-link-b)",
    inactive_color: "var(--clr-white)",
  },
  {
    id: 3,
    name: "talks",
    link: "/talks",
    active_color: "var(--clr-link-c)",
    inactive_color: "var(--clr-white)",
  },
  {
    id: 4,
    name: "store",
    link: "/store",
    active_color: "var(--clr-link-d)",
    inactive_color: "var(--clr-white)",
  },
  {
    id: 5,
    name: "contact",
    link: "/contact",
    active_color: "var(--clr-link-e)",
    inactive_color: "var(--clr-white)",
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
