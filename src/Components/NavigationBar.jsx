import React,{useRef} from "react";
import Logo from "./Landingpage/Logo";
import Item from "./Landingpage/Item";
import { Link } from "react-router-dom";

function Profilenavbar(props) {
  return (
    <div style={{ background: props.bgcolor }} className="menu__items--div">
      <Logo color={props.itemcolor} />
      <div className="menu__items--container">
        <Link to="">
          <Item
            color={props.itemcolor}
            option="About"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
        <Link to="">
          <Item
            color={props.itemcolor}
            option="Blogs"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
        <Link to="">
          <Item
            color={props.itemcolor}
            option="Starred"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
        <Link to="">
          <Item
            color={props.itemcolor}
            option="Progress"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
      </div>
    </div>
  );
}

function Normalnavbar(props) {
  const titleRef = useRef();
  console.log(titleRef);
  // document.querySelector(".exploreSection__div").setAttribute("ref",titleRef);
  // function scrollTo(){
  //   titleRef.current.scrollIntoView({ behavior: 'smooth' })
  // }
  
  return (
    <div style={{ background: props.bgcolor }}>
      <Logo color={props.itemcolor} />
      <ul className="MenuOptions">
        <Link to="/ProfilePage">
          <li className="item1">
            <Item
              color={props.itemcolor}
              option="Profile"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
        <Link to="">
          <li className="item2">
            <Item
              color={props.itemcolor}
              option="Contact"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
        <Link to="">
          <li  className="item3">
            <Item
              color={props.itemcolor}
              option="Explore"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
      </ul>
    </div>
  );
}

function NavigationBar(props) {   
  if (props.navtype === "profile") {
    return (
      <Profilenavbar
        itemcolor={props.itemcolor}
        bgcolor={props.bgcolor}
        hovercolor={props.hovercolor}
        hoverbgcolor={props.hoverbgcolor}
      />
    );
  } else {
    return (
      <Normalnavbar
        itemcolor={props.itemcolor}
        bgcolor={props.bgcolor}
        hovercolor={props.hovercolor}
        hoverbgcolor={props.hoverbgcolor}
      />
    );
  }
}

export default NavigationBar;
