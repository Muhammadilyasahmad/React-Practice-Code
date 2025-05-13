import React from 'react'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className="user-container">
      <p id='user-title'>{props.name}</p>
      <img src={props.image} alt="img"  id='user-img'></img>
      <p id='user-desc'>{props.desc}</p>  
    </div>
  )
}

export default UserCard
