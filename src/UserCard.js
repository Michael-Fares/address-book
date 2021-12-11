import React from "react";
import { useState } from "react";

function UserCard(props) {
  const { name, location, email, phone, picture } = props;
  const [isHidden, setHide] = useState(true);

  return (
    <li
      style={{
        listStyle: "none",
        padding: "1rem 2rem",
        margin: "1rem",
        boxShadow: "2px 2px 8px black",
        backgroundColor: "#FFE3E3",
        width: "50vw",
        minWidth: "250px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <img
          src={picture}
          alt={`user ${name}`}
          style={{ boxShadow: "0 5px 10px black" }}
        />
          <div>
            <h3 style={{ marginLeft: "1.5rem" }}> {name} </h3>
            <button
            style={{
              border: "none",
              padding: "8px",
              cursor: "pointer",
              color: "#FFE3E3",
              backgroundColor: "black",
              fontFamily: "Josefin Sans, cursive",
              marginLeft: "1.5rem"
            }}
            onClick={() => {
              isHidden ? setHide(false) : setHide(true);
            }}
          >
            {isHidden ? "Show Details" : "Hide Details"}
          </button>
          </div>
      </div>
   
      {isHidden ? (
        <></>
      ) : (
        <div style={{ marginTop: "2rem" }}>
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
