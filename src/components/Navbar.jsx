import {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import {navLinks as links, navIcons as icons} from "../utils/links";
import eye from "../assets/images/eye.png";

const Navbar = ({isHomePage}) => {
  const [isActive, setIsActive] = useState(links[0].link);

  const setLinkActive = (e, active_color) => {
    e.currentTarget.style.color = active_color;
  };
  const setLinkInActive = (e, inactive_color, link) => {
    if (isActive != link) {
      e.currentTarget.style.color = inactive_color;
    }
  };
  return (
    <Wrapper check={`${isHomePage}`}>
      <nav>
        <div className="nav-center">
          {!isHomePage && (
            <Link to="/">
              <img src={eye} className="profile-pic" alt="priyanshu" />
            </Link>
          )}

          <div className="links-cont">
            <ul className="links">
              {links.map((item) => {
                const {id, name, link, active_color, inactive_color} = item;
                return (
                  <Link
                    key={id}
                    style={
                      isActive == link
                        ? {color: active_color}
                        : {color: inactive_color}
                    }
                    onClick={() => setIsActive(link)}
                    onMouseOver={(e) => setLinkActive(e, active_color)}
                    onMouseOut={(e) => setLinkInActive(e, inactive_color, link)}
                    to={link}
                  >
                    <li>{name}</li>
                  </Link>
                );
              })}
            </ul>
            <ul className="links">
              {icons.map((item) => {
                const {id, icon, link} = item;
                return (
                  <a href={link} key={id} className="navbar-icon">
                    <li>{icon}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    display: flex;
    justify-content: center;
    padding: 0rem 1rem;
  }
  .nav-center {
    display: flex;
    justify-content: ${(props) =>
      props.check === "true" ? "flex-end" : "space-between"};
    align-items: center;
    width: 1100px;
    height: 100px;
  }
  .profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .links-cont {
    display: flex;
    overflow: hidden;
  }
  .links {
    height: 50px;
    border: 2px solid black;
    margin: 0rem 0.55rem;
    padding: 0rem 0.75rem;
    background: var(--primary-clr);
    display: flex;
    align-item: center;
    border-radius: 50px;

    li {
      display: flex;
      align-items: center;
    }
    a {
      display: flex;
      align-items: center;
      margin: 0rem 1rem;
      color: white;
      transition: var(--transition);
      text-transform: capitalize;
    }
    .link-a {
      color: var(--clr-link-a);
      border-bottom: 2px solid var(--clr-link-a);

      border-bottom-left-radius: 10px;
      border-bottom-right-radius: none;
    }
    .link-b {
      color: var(--clr-link-b);
    }
    .link-c {
      color: var(--clr-link-c);
    }
    .link-d {
      color: var(--clr-link-d);
    }
    .link-e {
      color: var(--clr-link-e);
    }

    .navbar-icon:hover {
      color: var(--clr-link-a);
    }
  }
`;

export default Navbar;
