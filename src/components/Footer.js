import React from "react";
import { Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer class="footer">     
        <a class="footer-a" href="index.html" id="guidelines">
          Guidelines
        </a>
        <a class="footer-a" href="index.html">
          FAQ
        </a>
        <a class="footer-a" href="index.html">
          Lists
        </a>
        <a class="footer-a" href="index.html">
          API
        </a>
        <a class="footer-a" href="index.html">
          Security
        </a>
        <a class="footer-a" href="index.html">
          Legal
        </a>
        <a class="footer-a" href="index.html">
          Apply to CN
        </a>
        <a class="footer-a" href="https://github.com/EmelineLmr/coderNews#">
          Contact
        </a>
        <Col className="text-md-right" id="copyright">
          {/* warum funktioniert das text-md-right nicht? */}
          2021 © Copyright: Emeline, Alicia, Tim {/* was bedeutet diese {" "}? */}
        </Col>
    </footer>
  );
};

export default Footer;
