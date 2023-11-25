import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import {navLinks as links, navIcons as icons} from "../utils/links";
import eye from "../assets/images/eye.png";
import black from "../assets/images/black_video_game.jpg";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../features/navigation/navigationSlice";

const Navbar = () => {
  const page = useSelector((state) => state.navigation.page);
  const dispatch = useDispatch();

  const setLinkActive = (e, active_color) => {
    e.currentTarget.style.color = active_color;
  };
  const setLinkInActive = (e, inactive_color, name) => {
    if (page != name) {
      e.currentTarget.style.color = inactive_color;
    }
  };
  return (
    <Wrapper check={page}>
      <header>
        <nav>
          <div className="nav-center">
            {page != "home" && (
              <Link to="/" onClick={() => dispatch(setPage("home"))}>
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
                        page == name
                          ? {color: active_color}
                          : {color: inactive_color}
                      }
                      onClick={() => dispatch(setPage(name))}
                      onMouseOver={(e) => setLinkActive(e, active_color)}
                      onMouseOut={(e) =>
                        setLinkInActive(e, inactive_color, name)
                      }
                      to={link}
                    >
                      <li>{name}</li>
                    </Link>
                  );
                })}
              </ul>
              <ul className="links">
                {icons.map((item) => {
                  const {id, icon, link, active_color, inactive_color} = item;
                  return (
                    <a
                      href={link}
                      key={id}
                      className="navbar-icon"
                      onMouseOver={(e) => setLinkActive(e, active_color)}
                      onMouseOut={(e) =>
                        setLinkInActive(e, inactive_color, link)
                      }
                    >
                      <li>{icon}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    background: url(${black});
    background-repeat: no-repeat;
    background-size: 100%;
  }
  nav {
    display: flex;
    justify-content: center;
    padding: 0rem 1rem;
  }
  .nav-center {
    display: flex;
    justify-content: ${(props) =>
      props.check === "home" ? "flex-end" : "space-between"};
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
  }
`;

export default Navbar;
