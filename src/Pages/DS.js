import React, { Component } from "react";
import ti from "../pic/StarDeath.jpg"

export default class DS extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Millenium Falcon</h1>
          <div className="contmeleft">
            <img src={ti}></img>
            <p>Model: Data-Deleted</p>
            <p>Name: Death-Star</p>
            <p>Length: Data-deleted</p>
            <p>Cost: Secret-info</p>
            <p>Created: 11.11.3700</p>
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
