import styled from "styled-components";
import {navLinks as links} from "../utils/links";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <h2>my project</h2>
          <ul className="links">
            {links.map((link) => {
              const {id, name} = link;
              return (
                <a>
                  <li>{name}</li>
                </a>
              );
            })}
          </ul>
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
  .links li {
    display: inline-block;
  }
  .links a {
    margin: 0rem 1rem;
  }
`;

export default Navbar;
