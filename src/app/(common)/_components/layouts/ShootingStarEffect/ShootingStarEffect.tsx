"use client";

import { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import { ShootingStarProps } from "@/type/index";

class ShootingStarEffect extends Component<{}, ShootingStarProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      vw: 0,
      vh: 0,
    };
  }

  starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 300,
          value: "0",
        },
        {
          duration: 300,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };

  randomRadius = () => Math.random() * 5;

  getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
  };

  getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
  };

  updateWindowDimensions = () => {
    this.setState({
      vw: Math.max(document.body.clientWidth, window.innerWidth || 0),
      vh: Math.max(document.body.clientHeight, window.innerHeight || 0),
    });
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.starryNight();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="absolute m-0 h-full w-full overflow-hidden p-0">
        <svg
          id="sky"
          className="absolute m-0 h-full w-full overflow-hidden p-0"
        >
          {[...Array(200)].map((x, y) => (
            <circle
              cx={this.getRandomX()}
              cy={this.getRandomY()}
              r={this.randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="#002b35"
              key={y}
              className="star"
            />
          ))}
        </svg>
      </div>
    );
  }
}

export default ShootingStarEffect;
