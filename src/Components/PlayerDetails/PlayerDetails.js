/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PlayerDetails.css";
import maleImg from "../Images/male.png";
import twitter from "../Images/Twitter.png";
import facebook from "../Images/Facebook.png";
import youtube from "../Images/YouTube.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faFlag,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import Gender from "../Gender/Gender";
const PlayerDetails = () => {
  const { teamId } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.teams[0]));
  }, [teamId]);

  console.log(teamDetails);
  return (
    <div className=" player-container  ">
      <div className="home-banner opacity">
        <img
          className="details-banner d-flex align-items-center justify-content-center"
          src={teamDetails.strTeamBadge}
          alt=""
        />
      </div>
      <div>
        <br />
        <br />
        <div className="team-details-container d-flex justify-content-around align-items-center container">
          <div className="team-info py-5 ">
            <h1> {teamDetails.strTeam}</h1>
            <h5>
              {" "}
              <FontAwesomeIcon icon={faLandmark} /> Founded:
              {teamDetails.intFormedYear}
            </h5>
            <h5>
              {" "}
              <FontAwesomeIcon icon={faFlag} /> Country:{" "}
              {teamDetails.strCountry}
            </h5>
            <h5>
              {" "}
              <FontAwesomeIcon icon={faFutbol} /> Sports type:{" "}
              {teamDetails.strSport}
            </h5>
            <Gender teamDetails={teamDetails}></Gender>
          </div>
          <div className="team-image">
            <img src={maleImg} alt="" />
          </div>
        </div>
        <div className="team-description container">
          <p className=" py-5">{teamDetails.strDescriptionEN}</p>
        </div>
      </div>
      <div className="footer ">
        <a target="_blank" href={teamDetails.strTwitter}>
          <img src={twitter} alt="" />{" "}
        </a>
        <a target="_blank" href={teamDetails.strFacebook}>
          <img src={facebook} alt="" />{" "}
        </a>
        <a target="_blank" href={teamDetails.strYoutube}>
          <img src={youtube} alt="" />{" "}
        </a>
      </div>
    </div>
  );
};

export default PlayerDetails;
