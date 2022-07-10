import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pageStatus } from "../../redux/action";
import { Location } from "../SVG/Location";
import { Menu } from "../SVG/Menu";
import "./navbaar.css";

export const Navbar = () => {
  if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify("lock"));
  }
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const setBg = useSelector(({ setNavBg }) => setNavBg.setNavBg);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const navSearch = useSelector((store) => store.navSearch);
  return (
    <div
      className="navbar"
      style={{
        background: setBg,
      }}
    >
      <div className="nav2">
        <div style={{ display: "flex" }}>
          <div onClick={() => dispatch(pageStatus(true))} className="menudiv">
            <Menu/>
          </div>
          <div className="menudiv" style={{ cursor: "pointer" }}>
            <img
              id="uberEats"
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg"
              alt=""
            />
          </div>
        </div>

        {navSearch.navSearch ? (
          <div
            className="baseinp"
            style={{
              boxShadow: focused ? "inset 0 -2px 0 black" : "",
              position: "relative",
              transition: "all 0.5s",
              display:'flex',
              alignItems:"center"
            }}
          >
            <div style={{width:"50px", marginTop:"-5px"}}><Location/></div>
            <input
              type="text"
              placeholder="Enter delivery address"
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        ) : (
          ""
        )}
        {user === "lock" ? (
          <div>
            <Link to={"/email"}>
              <button className={"signbtn"}>Sign in</button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
