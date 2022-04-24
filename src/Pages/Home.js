import React, { Component } from "react";
import style from "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to StarDB</h1>
        <div className="Grad">
          <p className="Text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </div>
      </div>
    );
  }
}
