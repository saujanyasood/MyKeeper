import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import DoneIcon from '@mui/icons-material/Done';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const [editOn, setEditOn] = useState(false);
  function handleEdit() {
    setEditOn(!editOn);
  }
  return (
    <div className="note">
      <h1 contentEditable={editOn}>{props.title}</h1>
      <p
        style={{ maxHeight: "100px", overflow: "scroll" }}
        contentEditable={editOn}
      >
        {props.content}
      </p>

      <Fab onClick={handleClick}>
        <DeleteOutlineIcon />
      </Fab>
      <Fab onClick={handleEdit}>{editOn ? <DoneIcon /> : <EditIcon />}</Fab>
    </div>
  );
}

export default Note;
