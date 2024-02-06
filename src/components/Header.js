import React from "react";
import "../styles/Header.css";
import { SearchOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlined />
        <input placeholder="Search for Artists, Songs" type="text" />
      </div>
      <div className="header__right">
  {user && (
    <>
      <Avatar src={user?.images[0]?.url} alt={user.display_name.charAt(0).toUpperCase()} />
      <h4>{user?.display_name}</h4>
    </>
  )}
</div>
    </div>
  );
}

export default Header;
