import React, { Component } from "react";
import ti from "../pic/Falcon.jpg"

export default class MF extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Millenium Falcon</h1>
          <div className="contmeleft">
            <img src={ti}></img>
            <p>Model: YT-1300</p>
            <p>Name: Millenium-Falcon</p>
            <p>Length: 34.37</p>
            <p>Cost: $30.000.000.00</p>
            <p>Created: 11.11.3454</p>
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
