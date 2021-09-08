import React from "react";
import { useState } from "react";

function UserCard(props) {
  const { name, location, email, phone, picture } = props;
  const [isHidden, setHide] = useState(true);

  return (
    <li
      style={{
        listStyle: "none",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 8px black",
        backgroundColor: "#FFE3E3"
      }}
    >
      <div
        style={{
          display: "flex",
          marginBottom: "20px"
        }}
      >
        <img
          src={picture}
          alt={`user ${name}`}
          style={{ boxShadow: "2px 2px 2px" }}
        />
        <h3 style={{ marginLeft: "20px" }}> {name} </h3>
      </div>
      <button
        style={{
          border: "none",
          padding: "8px",
          cursor: "pointer",
          color: "#FFE3E3",
          backgroundColor: "black",
          fontFamily: "Josefin Sans, cursive"
        }}
        onClick={() => {
          isHidden ? setHide(false) : setHide(true);
        }}
      >
        {isHidden ? "Show Details" : "Hide Details"}
      </button>
      {isHidden ? (
        <></>
      ) : (
        <div>
          <p>{location}</p>
          <p>{phone}</p>
          <div>
            <p>{email}</p>
          </div>
        </div>
      )}
    </li>
  );
}
export default UserCard;
