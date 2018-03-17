import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {

  return (
    <Link
      to={props.path}
      className={props.className}
      id={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      {props.value ? props.value : ''}
    </Link>
  );
}

export default Button;
