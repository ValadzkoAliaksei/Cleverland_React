import React, { useState } from 'react';
import './List.css';
import { FormControlLabel, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="List">
      <FormControlLabel
        className="ProductLabel"
        control={
          <Checkbox
            checked={check}
            onChange={(event) => setCheck(event.target.checked)}
            name="checked" />}
        label={`${props.products.product} ${(props.products.number !== 1) ? ("| " + props.products.number) : ""}`}
      />
      <IconButton aria-label="delete" onClick={() => {props.onDelete(props.products.id)
  }}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};


export default List;