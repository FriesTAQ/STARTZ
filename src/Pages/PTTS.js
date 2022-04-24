import React, { Component } from "react";
import pttts from "../pic/PTTS.jpg";

export default class PTTS extends Component {
  render() {
    return (
      <>
        <div>
          <h1>PTTS-SH10</h1>
          <div className="contmeleft">
            <img src={pttts}></img>
            <p>Model: PTTS-SH10</p>
            <p>Name: PTTS</p>
            <p>Length: 34.33</p>
            <p>Cost: $2.000.000</p>
            <p>Created: 11.11.3111</p>
          </div>
          <div className="Text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo.
            </p>
          </div>
        </div>
      </>
    );
  }
}
