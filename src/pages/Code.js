import React, { useState } from "react";
import "./css/Code.css";
import code_img from "../assets/code.png";
import bow from "../assets/bow.png";
import brick from "../assets/brick.png";
import corner from "../assets/corner.png";
import peg from "../assets/peg.png";
import loader from "../assets/loader.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Code() {
  const bricks = [
    { item: "Brick W. Bow 1X4, Item No. 3659", img: bow },
    { item: "Brick 2X2, Item No. 3003", img: brick },
    { item: "Brick Corner 1X2X2, Item No. 2357", img: corner },
    { item: "Connector Peg, Item No. 4274", img: peg },
  ];
  const [target, setTarget] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading("finished");
    }, 1250);
  }

  return (
    <div className="content">
      <img src={code_img} alt="code" />
      <div className="results">
        <h3>
          I have used Deep Learning to create a model capable of recognizing 50
          different LEGO bricks.
        </h3>
        <h3>
          The model takes an image of one of the 50 LEGO bricks and returns the
          LEGO item number of the predicted brick.
          <br />
          Using a Convolutional Neural Network, the model can recognize a LEGO
          brick with an accuracy of 73.83%.
        </h3>
        <h3>
          Feel free to select one of the LEGO bricks, run the code, and see what
          Item No. the model predicts for the LEGO brick you have chosen.
        </h3>
        <div className="images">
          {bricks.slice(0, 2).map((brick) => {
            return (
              <img
                src={brick.img}
                alt={brick.item}
                onClick={() => {
                  setTarget(brick.item);
                  setLoading(false);
                }}
                style={{
                  borderStyle: target === brick.item && "solid",
                  borderWidth: target === brick.item && "5px",
                  borderColor: target === brick.item && "lime",
                }}
              />
            );
          })}
        </div>
        <div className="images">
          {bricks.slice(2).map((brick) => {
            return (
              <img
                src={brick.img}
                alt={brick.item}
                onClick={() => {
                  setTarget(brick.item);
                  setLoading(false);
                }}
                style={{
                  borderStyle: target === brick.item && "solid",
                  borderWidth: target === brick.item && "5px",
                  borderColor: target === brick.item && "lime",
                }}
              />
            );
          })}
        </div>
        <div className="process">
          <div
            onClick={
              target !== "" ? handleClick : console.log("Choose a LEGO brick")
            }
            className="btn"
          >
            Run Code
          </div>
          <FaArrowRight size={30} color="gray" />
          <div className="guess">
            {loading === "finished" && target !== "" ? (
              <h3>{target}</h3>
            ) : (
              <>
                {loading === true ? (
                  <img style={{ height: "100%" }} src={loader} alt="loader" />
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
        <div className="repo_grp">
          <div className="repo">
            <FaGithub size={30} />
            <a
              href="https://github.com/tomasrieck/lego_AI"
              target="_blank"
              rel="noreferrer"
            >
              Check out the code for the AI here
            </a>
          </div>
          <div className="repo">
            <FaGithub size={30} />
            <a
              href="https://github.com/Tomasrieck/lego_webapp"
              target="_blank"
              rel="noreferrer"
            >
              Check out the code for this website here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;
