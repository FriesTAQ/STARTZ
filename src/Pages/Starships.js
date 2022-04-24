import React, { Component } from "react";
import style from "./starsh.css";
import StarDeath from "../pic/StarDeath.jpg";
import Falcon from "../pic/Falcon.jpg";
import TIE from "../pic/TIE-Fighter.jpg";
import Xwwing from "../pic/X-Wing.jpg";
import ptts from "../pic/PTTS.jpg";

export default class Starships extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Starships</h1>
        </div>
        <div className="sel">
          <p className="select">Sort by:</p>
          <select>
            <option value="value1">По названию</option>
            <option value="value1">По цене</option>
          </select>
        </div>
        <div>
          <ul class="products clearfix">
            <li class="product-wrapper">
              <a href="/ptts" class="product">
                <div class="product-photo">
                  <img src={ptts}></img>
                  <div>
                    <p><a className="tag">Cost:</a> $2.000</p>
                    <p><a className="tag">Name:</a> PTTS</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="product-wrapper">
              <a href="/tie" class="product">
                <div class="product-photo">
                  <img src={TIE}></img>
                  <p><a className="tag">Cost:</a> $1.000.000</p>
                  <p><a className="tag">Name:</a> TIE-Fighter</p>
                </div>
              </a>
            </li>
            <li class="product-wrapper">
              <a href="/mf" class="product">
                <div class="product-photo">
                  <img src={Falcon}></img>
                  <p><a className="tag">Cost:</a> $6.000.000.000</p>
                  <p><a className="tag">Name:</a> Millenium Falcon</p>
                </div>
              </a>
            </li>
            <li class="product-wrapper">
              <a href="/xwing" class="product">
                <div class="product-photo">
                  <img src={Xwwing}></img>
                  <div>
                    <p><a className="tag">Cost:</a> $5.000.000</p>
                    <p><a className="tag">Name:</a> X-wing</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="product-wrapper">
              <a href="/ds" class="product">
                <div class="product-photo">
                  <img src={StarDeath}></img>
                  <div>
                    <p><a className="tag">Cost:</a> $2.000.000.000</p>
                    <p><a className="tag">Name:</a> Death Star</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="product-wrapper">
              <a href="/ds" class="product">
                <div class="product-photo">
                  <img src={StarDeath}></img>
                  <div>
                    <p><a className="tag">Cost:</a> $2.000.000.000</p>
                    <p><a className="tag">Name:</a> Death Star</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="product-wrapper">
              <a href="/ds" class="product">
                <div class="product-photo">
                  <img src={StarDeath}></img>
                  <div>
                    <p><a className="tag">Cost:</a> $2.000.000.000</p>
                    <p><a className="tag">Name:</a> Death Star</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
