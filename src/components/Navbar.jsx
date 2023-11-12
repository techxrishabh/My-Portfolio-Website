import styled from "styled-components";
import {Link} from "react-router-dom";
import {navLinks as links, navIcons as icons} from "../utils/links";
import eye from "../assets/images/eye.png";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <Link to="/">
            <img src={eye} className="profile-pic" alt="priyanshu" />
          </Link>
          <div className="links-cont">
            <ul className="links">
              {links.map((item) => {
                const {id, name, link} = item;
                return (
                  <Link to={link}>
                    <li>{name}</li>
                  </Link>
                );
              })}
            </ul>
            <ul className="links">
              {icons.map((item) => {
                const {id, icon, link} = item;
                return (
                  <a href={link}>
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
    border: 2px solid black;
    padding: 0rem 1rem;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
    height: 100px;
    border: 2px solid black;
  }
  .profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .links-cont {
    display: flex;
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
      display: inline-block;
    }
    a {
      display: flex;
      align-items: center;
      margin: 0rem 1rem;
      color: var(--clr-white);
    }
  }
`;

export default Navbar;
