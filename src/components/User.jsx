import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated as a } from "react-spring";
import "../App.css";

export default function User() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div className="userInformationDad">
      <div className="userInformation" onClick={() => set(state => !state)}>
        <a.div
          class="c back"
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          {" "}
          <div className="subtittle">
            <p> I'm Cristopher Flores </p>
          </div>
          <div className="title">
            <h1> Fullstack Developer. </h1>
          </div>{" "}
        </a.div>
        <a.div
          class="c front"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`)
          }}
        />
      </div>
    </div>
  );
}
