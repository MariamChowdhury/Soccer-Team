import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
const Gender = (props) => {
  const { strGender } = props.teamDetails;
  let gender;

  if (strGender === "Male") {
    gender = (
      <h5>
        {" "}
        <FontAwesomeIcon icon={faMars} /> Gender: Male
      </h5>
    );
  } else {
    gender = gender = (
      <h5>
        {" "}
        <FontAwesomeIcon icon={faVenus} /> Gender: Female
      </h5>
    );
  }

  return <div>{gender}</div>;
};

export default Gender;
