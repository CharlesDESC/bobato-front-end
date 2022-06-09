import { useState } from "react";
import "./structure.css";
import { Button } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export function Headers() {
  return (
    <>
      <Header>
        <div className="header-tittle">Bobato</div>
        <div className="header-btn">
          <span>
            <Button type="primary">
                <div className="font">
                  <Link to="/login">connection</Link>
                </div>
            </Button>
          </span>
          <span>
            <Button type="primary">
                <div className="header-inscription">
                  <Link to="/register">inscription</Link>
                </div>
            </Button>
          </span>
        </div>
      </Header>
    </>
  );
}

export function Footers() {
  return (
    <Footer>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>Web design</li>
                  <li>Development</li>
                  <li>Hosting</li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>Company</li>
                  <li>Team</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div class="col item social">
                <a href="#">
                  <i class="icon ion-social-facebook"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-instagram"></i>
                </a>
              </div>
            </div>
            <p class="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
    </Footer>
  );
}
