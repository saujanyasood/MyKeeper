import React from "react";
import EventNoteIcon from '@mui/icons-material/EventNote';

function Header() {
  return (
    <header>
      <h1>
        <EventNoteIcon fontSize="large" style={{position:"relative", top: "5px", left: "0px"}}/>
        My Keeper
      </h1>
    </header>
  );
}

export default Header;
