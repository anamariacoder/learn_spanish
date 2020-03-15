import React, { Component } from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>Nous contacter</p>
            </div>
            <div className="column has-text-right">
              <a className="icon" href="#">
                <i class="fab fa-instagram-square"></i>
              </a>
              <a className="icon" href="#">
                <i className="fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

//export default class extends Component {
//   render() {
// return (

//       <div className="footer">Instagram</div>

//     );
//   }
// }
