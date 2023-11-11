import styled from "styled-components";
import {navLinks as links, navIcons as icons} from "../utils/links";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <Link to="/">
            <h2>Rishabh</h2>
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
    align-item: center;
    width: 90vw;
    height: 50px;
    border: 2px solid black;
  }
  .links-cont {
    display: flex;
  }
  .links {
    border: 2px solid black;
    margin: 0rem 1rem;

    li {
      display: inline-block;
    }
    a {
      margin: 0rem 1rem;
    }
  }
`;

export default Navbar;
