import React from 'react';
import 'tachyons';

const AvatarList = (props) => {
  return (
    <div className="avatarstyle bg-light-purple ba b--light-red dib ma4 pa3">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='avatar'/> 
      <h1>{props.name}</h1>
      <p>{props.work}</p>
    </div>
  );
}

export default AvatarList;