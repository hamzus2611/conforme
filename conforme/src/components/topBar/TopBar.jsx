import React from "react";
import "./TopBar.css";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getuserinfo, logout } from "./../../redux/Action/AuthAction";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { loading, user, error } = useSelector((state) => state.UserReducer);
  const navigate = useNavigate();

  const deconnexion=()=>{
    dispatch(logout())
    navigate("/");

  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);
  return (
    <div className="topBar">
      {(loading) ? 
        <h1> </h1>
       : (
        <div className="topBarWrapper">
          <div className="topLeft">
            <span className="logo">{user.userinfo.UserName} </span>
          </div>
          <div className="topRight">
            <div className="topBarIcons">
              <AiOutlineLogout onClick={deconnexion}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
