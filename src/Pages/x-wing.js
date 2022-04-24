import React, { Component } from "react";
import style from "../Pages/x-wing.css";
import Xwwing from "../pic/X-Wing.jpg";

export default class Xwing extends Component {
    render() {
      return (
        <>
        <div>
          <h1>X-Wing</h1>
          <div className="contmeleft">
          <img className="shipx" src={Xwwing}></img>
          <p>Model: X-wing-1213</p>
          <p>Name: X-wing</p>
          <p>Length: 34.33</p>
          <p>Cost: $2.000.000.000.000</p>
          <p>Created: 11.11.3111</p>
          </div>
          <div className="Text">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.</p>
            </div>
        </div>
        </>
      );
    }
  }