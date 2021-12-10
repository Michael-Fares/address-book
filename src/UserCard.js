import React from "react";
import { useState } from "react";

function UserCard(props) {
  const { name, location, email, phone, picture } = props;
  const [isHidden, setHide] = useState(true);

  return (
    <li
      style={{
        listStyle: "none",
        padding: "1rem",
        margin: "1rem auto",
        boxShadow: "2px 2px 8px black",
        backgroundColor: "#FFE3E3",
        width: "40vw",
        minWidth: "250px"
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
          style={{ boxShadow: "0 5px 10px black" }}
        />
          <div>
            <h3 style={{ marginLeft: "3rem" }}> {name} </h3>
            <button
            style={{
              border: "none",
              padding: "8px",
              cursor: "pointer",
              color: "#FFE3E3",
              backgroundColor: "black",
              fontFamily: "Josefin Sans, cursive",
              marginLeft: "3rem"
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
